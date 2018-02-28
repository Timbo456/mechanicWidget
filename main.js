function Scheduler(shopId) {

  this.shopId = shopId
  this.years = []
  this.makes = []
  this.allMakes = [
    {id: 3106, name: "Acura"},
    {id: 3107, name: "Alfa romeo"},
    {id: 3108, name: "Aston martin"},
    {id: 3109, name: "Audi"},
    {id: 3853, name: "Belmont"},
    {id: 3112, name: "Bentley"},
    {id: 3113, name: "Bmw"},
    {id: 3967, name: "Boxtruck"},
    {id: 3488, name: "Buell"},
    {id: 3114, name: "Bugatti"},
    {id: 3115, name: "Buick"},
    {id: 4028, name: "Ca/on"},
    {id: 3116, name: "Cadillac"},
    {id: 4137, name: "CaSE"},
    {id: 3117, name: "Chevrolet"},
    {id: 3169, name: "Chevy"},
    {id: 3118, name: "Chrysler"},
    {id: 3119, name: "Dodge"},
    {id: 3993, name: "Doolittle"},
    {id: 3120, name: "Ferrari"},
    {id: 3121, name: "Fiat"},
    {id: 3123, name: "Ford"},
    {id: 3776, name: "Freightliner"},
    {id: 3124, name: "Gmc"},
    {id: 3125, name: "Honda"},
    {id: 3126, name: "Hummer"},
    {id: 3127, name: "Hyundai"},
    {id: 3128, name: "Infiniti"},
    {id: 3129, name: "Isuzu"},
    {id: 3130, name: "Jaguar"},
    {id: 3131, name: "Jeep"},
    {id: 3682, name: "Kawasaki"},
    {id: 3835, name: "Kenworth"},
    {id: 3132, name: "Kia"},
    {id: 3133, name: "Lamborghini"},
    {id: 3134, name: "Land rover"},
    {id: 4079, name: "LANT"},
    {id: 3135, name: "Lexus"},
    {id: 3136, name: "Lincoln"},
    {id: 3138, name: "Lotus"},
    {id: 3139, name: "Maserati"},
    {id: 3140, name: "Maybach"},
    {id: 3141, name: "Mazda"},
    {id: 3143, name: "Mercedes-benz"},
    {id: 3144, name: "Mercury"},
    {id: 3145, name: "Mini"},
    {id: 3894, name: "Mitsu fuso"},
    {id: 3146, name: "Mitsubishi"},
    {id: 3147, name: "Nissan"},
    {id: 3896, name: "Nissan-datsun"},
    {id: 3150, name: "Pontiac"},
    {id: 3151, name: "Porsche"},
    {id: 3152, name: "Ram"},
    {id: 3153, name: "Rolls-royce"},
    {id: 3155, name: "Saab"},
    {id: 3157, name: "Saturn"},
    {id: 3159, name: "Scion"},
    {id: 3161, name: "Smart"},
    {id: 3162, name: "Subaru"},
    {id: 3164, name: "Suzuki"},
    {id: 3165, name: "Tesla"},
    {id: 3166, name: "Toyota"},
    {id: 3787, name: "Trailer"},
    {id: 3876, name: "Ud"},
    {id: 3167, name: "Volkswagen"},
    {id: 3168, name: "Volvo"},
    {id: 3794, name: "Workhorse"},
    {id: 3976, name: "Zap"}
  ]
  this.models = []
  this.selectedYear = null
  this.selectedModel = null
  this.selectedMake = null
  this.services = []
  this.shopHours = null
  this.api = {
    url: "https://api.mechanicadvisor.com/v7/schedule/",
    key: "Zjc3Y2ZmNDUyYmI5NGZiOWE4OGI4YjgyYmNlMzE4NjI6",
    endpoints: {
      shopYears: "GetShopVehicleYears",
      makes: "GetShopVehicleMakes",
      models: "GetShopVehicleModels"
    }
  }
  this.selection = {}

  this.init = function () {

    var that = this

    this.years = this.getYears(function () {
      that.selectedYear = that.years[0]

      that.makes = that.getMakes(function () {
        that.selectedMake = that.makes[0]

        // that.render()
        // that.bindEvents()

        // FIX THIS DUMBASS
        that.models = that.getModels(function () {
          that.selectedModel = that.models[0]

           // that.render()
           // that.bindEvents()

          // WHERE RENDER SHOULD BE

          that.render()
          that.bindEvents()
        })
      })
    })



  }.bind(this)

  this.render = function () {
    var formContentEl = $("#form-content")

    var yearSelectOptionsHtml = ""
    for (var i = 0; i < this.years.length; i++) {
      yearSelectOptionsHtml += `<option value=${this.years[i]}>${this.years[i]}</option>`
    }

    var yearSelectHtml = "<div class='select-wrap'><select id='year-select'>" + yearSelectOptionsHtml + "</select></div>"

    var makeSelectOptionsHtml = ""
    //for (var i = 0; i < this.allMakes.length; i++) {
    for (var i = 0; i < this.makes.length; i++) {
    //makeSelectOptionsHtml += `<option value=${this.allMakes[i].id}>${this.allMakes[i].name}</option>`
      makeSelectOptionsHtml += `<option value=${this.makes[i].id}>${this.makes[i].name}</option>`
    }
    var makeSelectHtml = "<div class='select-wrap'><select id='make-select'>" + makeSelectOptionsHtml + "</select></div>"

    var modelSelectOptionsHtml = ""
    for (var i = 0; i < this.models.length; i++) {
      modelSelectOptionsHtml += `<option value= ${this.models[i].id}>${this.models[i].name}</option>`
    }
    var modelSelectHtml = "<div class= 'select-wrap'><select id='model-select'>" + modelSelectOptionsHtml + "</select></div>"

    var buttonHtml = "<button>Go</button>"

    formContentEl.append(yearSelectHtml)
    formContentEl.append(makeSelectHtml)
    formContentEl.append(modelSelectHtml)
    formContentEl.append(buttonHtml)

  }.bind(this)

  this.bindEvents = function () {
    var yearSelectEl = $("#year-select")
    var makeSelectEl = $("#make-select")
    var modelSelectE1 = $("#model-select")

    yearSelectEl.change(function(e) {
      this.selectedYear = $(e.currentTarget).val()
      this.makes = this.getMakes()
    }.bind(this))

    makeSelectEl.change(function(e){
      this.selectedMake = $(e.currentTarget).val()
      this.models = this.getModels()
    }.bind(this))

    // modelSelectE1.change(function(e){
    //   this.selectedModel = $(e.currentTarget).val()
    //   //this.models = this.getModels()
    // })

  }.bind(this)
//////////////
  this.getYears = function (callback) {
    var shopYearsUrl = this.api.url + this.api.endpoints.shopYears + '?param.shopId=' + this.shopId
    var yearsRequest = new XMLHttpRequest()
    yearsRequest.open("GET", shopYearsUrl)
    yearsRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    yearsRequest.onload = function() {
        this.years = JSON.parse(yearsRequest.response)
        callback()
    }.bind(this)

    yearsRequest.send()

  }.bind(this)
////////////
  this.getMakes = function (callback) {
    var makesUrl = this.api.url + this.api.endpoints.makes + '?param.year=' + this.selectedYear + "&param.shopId=" + this.shopId
    var makesRequest = new XMLHttpRequest()
    makesRequest.open("GET", makesUrl)
    makesRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    makesRequest.onload = function() {
        //console.log(makesRequest)
        this.makes = JSON.parse(makesRequest.response)
        if (callback) callback()
    }.bind(this)

    makesRequest.send()

  }.bind(this)
///////////
  this.getModels = function (callback) {
    var modelsUrl = this.api.url + this.api.endpoints.models + "?param.year=" + this.selectedYear + "&param.makeId=" + this.selectedMake.id + "&param.shopId=" + this.shopId
    //var modelsUrl = this.api.url + this.api.endpoints.models + "?param.year=" + this.selectedYear + "&param.makeId=" + "3113" + "&param.shopId=" + this.shopId
    var modelsRequest = new XMLHttpRequest()
    modelsRequest.open("GET", modelsUrl)
    modelsRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    modelsRequest.onload = function() {
        console.log(modelsRequest.response)
        this.models = JSON.parse(modelsRequest.response)
        if (callback) callback()
    }.bind(this)

    modelsRequest.send()

  }.bind(this)

  // this.getModels = function () {
  //   var shopYearsUrl = this.api.url + this.api.endpoints.shopYears + '?param.shopId=' + this.shopId
  //   var yearsRequest = new XMLHttpRequest()
  //   yearsRequest.open("GET", shopYearsUrl)
  //   yearsRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
  //   yearsRequest.onload = function(data) {
  //       this.years = data
  //   }.bind(this)
  //
  //   yearsRequest.send()
  //
  // }.bind(this)
}

$(function() {
  var scheduler = new Scheduler(465087)
  scheduler.init()
})
