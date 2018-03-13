function Scheduler(shopId) {

  this.shopId = shopId
  this.years = []
  this.makes = []
  this.models = []
  this.services = []
  this.hours = []
  this.hours.AvailableIntervals = [],[]
  this.phone = ""
  this.firstName = ""
  this.lastName = ""
  this.email = ""
  this.comment = ""
    //  AvailableIntervals = {}
  this.date = "2018-03-14"
  this.selectedYear = null
  this.selectedModel = null
  this.selectedMake = null
  this.selectedService = null
  this.selectedHour = null
  this.api = {
    url: "https://api.mechanicadvisor.com/v7/schedule/",
    key: "Zjc3Y2ZmNDUyYmI5NGZiOWE4OGI4YjgyYmNlMzE4NjI6",
    endpoints: {
      shopYears: "GetShopVehicleYears",
      makes: "GetShopVehicleMakes",
      models: "GetShopVehicleModels",
      services: "GetShopServices",
      hours: "GetShopHours"
    }
  }
  this.selection = {}

  this.init = function () {

    var that = this

      this.years = this.getYears(function () {
        that.selectedYear = that.years[0]

      that.makes = that.getMakes(function () {
        that.selectedMake = that.makes[0].Id

      that.models = that.getModels(function () {
        that.selectedModel = that.models[0].Id

      this.services = that.getServices(function () {
        that.selectedService = that.services[0].Id

      this.hours = that.getHours(function () {
        console.log(that.hours.AvailableIntervals[6]);
        //debugger;
        that.selectedHour = that.hours.AvailableIntervals[0];

      })
        })

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
      if (parseInt(this.selectedYear) === this.years[i]) {
        yearSelectOptionsHtml += `<option value=${this.years[i]} selected>${this.years[i]}</option>`
      }
      else {
        yearSelectOptionsHtml += `<option value=${this.years[i]}>${this.years[i]}</option>`
      }
    }

    var yearSelectHtml = "<div class='select-wrap'><select id='year-select'>" + yearSelectOptionsHtml + "</select></div>"
    var makeSelectOptionsHtml = ""

    for (var i = 0; i < this.makes.length; i++) {
      // console.log(this.selectedMake)
      // console.log(this.makes[i].Id)
      if (parseInt(this.selectedMake) === this.makes[i].Id) {
        makeSelectOptionsHtml += `<option value=${this.makes[i].Id} selected>${this.makes[i].Name}</option>`
      }
      else {
        makeSelectOptionsHtml += `<option value=${this.makes[i].Id}>${this.makes[i].Name}</option>`
      }
    }

    var makeSelectHtml = "<div class='select-wrap'><select id='make-select'>" + makeSelectOptionsHtml + "</select></div>"

    var modelSelectOptionsHtml = ""

    for (var i = 0; i < this.models.length; i++) {
      if (this.selectedModel === this.models[i]) {
        modelSelectOptionsHtml += `<option value= ${this.models[i].Id} selected>${this.models[i].Name}</option>`
      }
      else {
        modelSelectOptionsHtml += `<option value= ${this.models[i].Id}>${this.models[i].Name}</option>`
      }
    }

    var modelSelectHtml = "<div class= 'select-wrap'><select id='model-select'>" + modelSelectOptionsHtml + "</select></div>"
    var serviceSelectOptionsHtml = ""

    for (var i = 0; i < this.services.length; i++) {
      if (this.selectedService === this.services[i]) {
        serviceSelectOptionsHtml += `<option value= ${this.services[i].Id} selected>${this.services[i].Name}</option>`
      }
      else {
        serviceSelectOptionsHtml += `<option value= ${this.services[i].Id}>${this.services[i].Name}</option>`
      }
    }

    var serviceSelectHtml = "<div class= 'select-wrap'><select id='services-select'>" + serviceSelectOptionsHtml + "</select></div>"

//// Hours /////

    var hoursSelectOptionsHtml = ""
    //for (var i = 0; i < this.hours.AvailableIntervals.length; i++) {
    //console.log(this.hours)
    //console.log(this.hours[1].start)
    //for (var i = 0; i < this.hours.length; i++) {
    for (var i = 0; i < this.hours.AvailableIntervals.length; i++) {

      if (this.selectedHour === this.hours.AvailableIntervals[i]) {
        hoursSelectOptionsHtml += `<option value= ${this.hours.AvailableIntervals[i].start} selected>${this.hours.AvailableIntervals[i].start}</option>`
      }
      else {

        hoursSelectOptionsHtml += `<option value= ${this.hours.AvailableIntervals[i].start}>${this.hours.AvailableIntervals[i].start}</option>`
        //console.log(this.hours.AvailableIntervals[i])
      }
    }

    var hoursSelectHtml = "<div class= 'select-wrap'><select id='hours-select'>" + hoursSelectOptionsHtml + "</select></div>"





    var buttonHtml = "<button onclick='bookfunction()'>Schedule !</button>"

    formContentEl.html(yearSelectHtml + makeSelectHtml + modelSelectHtml + serviceSelectHtml + hoursSelectHtml + buttonHtml)


  }.bind(this)

  this.bindEvents = function () {
    var yearSelectEl = $("#year-select")
    var makeSelectEl = $("#make-select")
    var modelSelectEl = $("#model-select")
    var serviceSelectEl = $("#services-select")
    var hoursSelectEl = $("#hours-select")
    var that = this;

    yearSelectEl.change(function(e) {
      this.selectedYear = $(e.currentTarget).val()
      this.makes = this.getMakes(function () {
        // if (!that.selectedMake){
        // that.selectedMake = that.makes[0].Id
        // }

        that.render()
        that.bindEvents()
      })
    }.bind(this))

    makeSelectEl.change(function(e){
      this.selectedMake = $(e.currentTarget).val()
      this.models = this.getModels(function() {
        this.selectedModel = that.models[0].Id
        that.render()
        that.bindEvents()
      })
    }.bind(this))


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
    var modelsUrl = this.api.url + this.api.endpoints.models + "?param.year=" + this.selectedYear + "&param.makeId=" + this.selectedMake + "&param.shopId=" + this.shopId
    //var modelsUrl = this.api.url + this.api.endpoints.models + "?param.year=" + this.selectedYear + "&param.makeId=" + "3113" + "&param.shopId=" + this.shopId
    var modelsRequest = new XMLHttpRequest()
    modelsRequest.open("GET", modelsUrl)
    modelsRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    modelsRequest.onload = function() {
        //console.log(modelsRequest.response)
        this.models = JSON.parse(modelsRequest.response)
        if (callback) callback()
    }.bind(this)

    modelsRequest.send()

  }.bind(this)
/////////////
  this.getServices = function(callback) {
    var servicesURL = this.api.url + this.api.endpoints.services + "?param.shopId=" + this.shopId
    var serviceRequest = new XMLHttpRequest()
    serviceRequest.open("GET", servicesURL)
    serviceRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    serviceRequest.onload = function() {

      this.services = JSON.parse(serviceRequest.response)
      if (callback) callback()
    }.bind(this)

    serviceRequest.send()

  }.bind(this)
  /////////////////////
  this.getHours = function (callback) {
    var hoursUrl = this.api.url + this.api.endpoints.hours + "?param.date=" + this.date + "&param.shopId=" + this.shopId
    var hoursRequest = new XMLHttpRequest()
    hoursRequest.open("GET", hoursUrl)
    hoursRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    hoursRequest.onload = function() {
        console.log(hoursRequest.response)

        this.hours = JSON.parse(hoursRequest.response)
        if (callback) callback()
    }.bind(this)

    hoursRequest.send()

  }.bind(this)

}

function bookfunction() {
  var customer = {Year :this.selectedYear,
                  MakeId :this.selectedMake,
                  ModelId :this.selectedModel,
                  ServiceId :this.selectedService,
                  AdditionalComment :this.comment,
                  TimeStart :this.selectedHour,
                  TimeEnd :this.selectedHourEnd,
                  FirstName :this.firstName,
                  LastName :this.lastName,
                  Email :this.email,
                  Phone :this.phone,
                  ShopId :this.shopId}

                $.ajax({
                  type: "POST",
                  data :JSON.stringify(customer),
                  url: "https://api.mechanicadvisor.com/v7/schedule/Book",
                  contentType: "application/json"
                })

}

function names() {
  this.firstName = document.getElementById("firstName").value;
  this.lastName = document.getElementById("lastName").value;
  this.phone = document.getElementById("phone").value;
  this.email = document.getElementById("email").value;
  this.comment = document.getElementById("comment").value;

}

$(function() {
  var scheduler = new Scheduler(576676)
  scheduler.init()
})
