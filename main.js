
function Scheduler(shopId) {

  this.mockHours = {
    "UtcOffset":"-05:00:00",
    "AvailableIntervals":[
    {
    "start":"2018-03-20T08:00:00",
    "end":"2018-03-20T09:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-20T09:00:00",
    "end":"2018-03-20T10:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-20T10:00:00",
    "end":"2018-03-20T11:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-20T11:00:00",
    "end":"2018-03-20T12:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-20T12:00:00",
    "end":"2018-03-20T13:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-20T13:00:00",
    "end":"2018-03-20T14:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-20T14:00:00",
    "end":"2018-03-20T15:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-20T15:00:00",
    "end":"2018-03-20T16:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-20T16:00:00",
    "end":"2018-03-20T17:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-20T17:00:00",
    "end":"2018-03-20T18:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-21T08:00:00",
    "end":"2018-03-21T09:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-21T09:00:00",
    "end":"2018-03-21T10:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-21T10:00:00",
    "end":"2018-03-21T11:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-21T11:00:00",
    "end":"2018-03-21T12:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-21T12:00:00",
    "end":"2018-03-21T13:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-21T13:00:00",
    "end":"2018-03-21T14:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-21T14:00:00",
    "end":"2018-03-21T15:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-21T15:00:00",
    "end":"2018-03-21T16:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-21T16:00:00",
    "end":"2018-03-21T17:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-21T17:00:00",
    "end":"2018-03-21T18:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-22T08:00:00",
    "end":"2018-03-22T09:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-22T09:00:00",
    "end":"2018-03-22T10:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-22T10:00:00",
    "end":"2018-03-22T11:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-22T11:00:00",
    "end":"2018-03-22T12:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-22T12:00:00",
    "end":"2018-03-22T13:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-22T13:00:00",
    "end":"2018-03-22T14:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-22T14:00:00",
    "end":"2018-03-22T15:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-22T15:00:00",
    "end":"2018-03-22T16:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-22T16:00:00",
    "end":"2018-03-22T17:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-22T17:00:00",
    "end":"2018-03-22T18:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-23T08:00:00",
    "end":"2018-03-23T09:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-23T09:00:00",
    "end":"2018-03-23T10:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-23T10:00:00",
    "end":"2018-03-23T11:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-23T11:00:00",
    "end":"2018-03-23T12:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-23T12:00:00",
    "end":"2018-03-23T13:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-23T13:00:00",
    "end":"2018-03-23T14:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-23T14:00:00",
    "end":"2018-03-23T15:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-23T15:00:00",
    "end":"2018-03-23T16:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-23T16:00:00",
    "end":"2018-03-23T17:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-23T17:00:00",
    "end":"2018-03-23T18:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-24T08:00:00",
    "end":"2018-03-24T09:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-24T09:00:00",
    "end":"2018-03-24T10:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-24T10:00:00",
    "end":"2018-03-24T11:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-24T11:00:00",
    "end":"2018-03-24T12:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-24T12:00:00",
    "end":"2018-03-24T13:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-24T13:00:00",
    "end":"2018-03-24T14:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-24T14:00:00",
    "end":"2018-03-24T15:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-24T15:00:00",
    "end":"2018-03-24T16:00:00",
    "isTimeBlock":false,
    "TimeType":0
    },
    {
    "start":"2018-03-24T16:00:00",
    "end":"2018-03-24T17:00:00",
    "isTimeBlock":false,
    "TimeType":0
    }
    ]
    }

  
  
  
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
  this.date = new Date();
  this.date = (this.date.getFullYear() + "-" + (this.date.getMonth() +1) + "-" + this.date.getDate());
  this.selectedYear = null
  this.selectedModel = null
  this.selectedMake = null
  this.selectedService = null
  this.selectedHour = null
  this.sortedHours = {};

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

  this.weekday = new Array(7);
  this.weekday[0] =  "Sunday";
  this.weekday[1] = "Monday";
  this.weekday[2] = "Tuesday";
  this.weekday[3] = "Wednesday";
  this.weekday[4] = "Thursday";
  this.weekday[5] = "Friday";
  this.weekday[6] = "Saturday";

  this.selection = {}

  this.init = function () {

    var that = this
    //this.setupTable (this.mockHours.AvailableIntervals);

      this.years = this.getYears(function () {
        that.selectedYear = that.years[0]

      that.makes = that.getMakes(function () {
        that.selectedMake = that.makes[0].Id

      that.models = that.getModels(function () {
        that.selectedModel = that.models[0].Id

      this.services = that.getServices(function () {
        that.selectedService = that.services[0].Id

      this.hours = that.getHours(function () {
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
    var buttonDiv = $("button-holder");

    var yearSelectOptionsHtml = ""
    for (var i = 0; i < this.years.length; i++) {
      if (parseInt(this.selectedYear) === this.years[i]) {
        yearSelectOptionsHtml += `<option value=${this.years[i]} selected>${this.years[i]}</option>`
      }
      else {
        yearSelectOptionsHtml += `<option value=${this.years[i]}>${this.years[i]}</option>`
      }
    }
    var yearSelectHtml = "<div class='form-group select-wrap'><select id='year-select' class='form-control'>" + yearSelectOptionsHtml + "</select></div>"
    var makeSelectOptionsHtml = ""
    for (var i = 0; i < this.makes.length; i++) {
      if (parseInt(this.selectedMake) === this.makes[i].Id) {
        makeSelectOptionsHtml += `<option value=${this.makes[i].Id} selected>${this.makes[i].Name}</option>`
      }
      else {
        makeSelectOptionsHtml += `<option value=${this.makes[i].Id}>${this.makes[i].Name}</option>`
      }
    }
    var makeSelectHtml = "<div class='form-group select-wrap'><select id='make-select' class='form-control'>" + makeSelectOptionsHtml + "</select></div>"
    var modelSelectOptionsHtml = ""
    for (var i = 0; i < this.models.length; i++) {
      if (this.selectedModel === this.models[i]) {
        modelSelectOptionsHtml += `<option value= ${this.models[i].Id} selected>${this.models[i].Name}</option>`
      }
      else {
        modelSelectOptionsHtml += `<option value= ${this.models[i].Id}>${this.models[i].Name}</option>`
      }
    }
    var modelSelectHtml = "<div class= 'form-group select-wrap'><select id='model-select' class='form-control'>" + modelSelectOptionsHtml + "</select></div>"
    var serviceSelectOptionsHtml = ""
    for (var i = 0; i < this.services.length; i++) {
      if (this.selectedService === this.services[i]) {
        serviceSelectOptionsHtml += `<option value= ${this.services[i].Id} selected>${this.services[i].Name}</option>`
      }
      else {
        serviceSelectOptionsHtml += `<option value= ${this.services[i].Id}>${this.services[i].Name}</option>`
      }
    }
    var serviceSelectHtml = "<div class= 'form-group select-wrap'><select id='services-select' class='form-control'>" + serviceSelectOptionsHtml + "</select></div>"
    var hoursSelectOptionsHtml = ""
    for (var i = 0; i < this.hours.AvailableIntervals.length; i++) {

      if (this.selectedHour === this.hours.AvailableIntervals[i]) {
        hoursSelectOptionsHtml += `<option value= ${this.hours.AvailableIntervals[i].start} selected>${this.hours.AvailableIntervals[i].start}</option>`
      }
      else {
        hoursSelectOptionsHtml += `<option value= ${this.hours.AvailableIntervals[i].start}>${this.hours.AvailableIntervals[i].start}</option>`
      }
    }

    var hoursSelectHtml = "<div class= 'select-wrap form-group'><select id='hours-select' class='form-control'>" + hoursSelectOptionsHtml + "</select></div>"
    var buttonHtml = '<button class= "btn btn-lg btn-primary" id="bookButton">Schedule !</button>';

    formContentEl.html(yearSelectHtml + makeSelectHtml + modelSelectHtml + serviceSelectHtml + hoursSelectHtml);
    buttonDiv.html(buttonHtml);

  }.bind(this)

  this.bindEvents = function () {
    var yearSelectEl = $("#year-select")
    var makeSelectEl = $("#make-select")
    var modelSelectEl = $("#model-select")
    var serviceSelectEl = $("#services-select")
    var hoursSelectEl = $("#hours-select")
    var bookButton = $("#bookButton");

    var that = this;

    yearSelectEl.change(function(e) {
      this.selectedYear = $(e.currentTarget).val()
      this.makes = this.getMakes(function () {
        that.render()
        that.bindEvents()
      })
    }.bind(this))

    hoursSelectEl.change(function(e) {
      var availableIntervals = this.hours.AvailableIntervals;
      for (i = 0; i < availableIntervals.length; i++) {
        if (availableIntervals[i].start == $(e.currentTarget).val() ) {
          this.selectedHour = availableIntervals[i];
          break;
        }
      }
    }.bind(this));

    serviceSelectEl.change(function(e) {
      this.selectedService = $(e.currentTarget).val();
    }.bind(this));

    modelSelectEl.change(function(e) {
      this.selectedModel = $(e.currentTarget).val();
    }.bind(this));

    bookButton.click(function (e) {
      e.preventDefault();
      this.bookfunction();
    }.bind(this));

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
    var modelsRequest = new XMLHttpRequest()
    modelsRequest.open("GET", modelsUrl)
    modelsRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    modelsRequest.onload = function() {
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
      this.hours = JSON.parse(hoursRequest.response)
      this.setupTable(this.hours.AvailableIntervals);
      if (callback) callback()
    }.bind(this)

    hoursRequest.send()

  }.bind(this)

  this.bookfunction =  function() {
    this.names();
    var that  = this;

    var customer = {
      Year : parseInt(this.selectedYear),
      MakeId : parseInt(this.selectedMake),
      ModelId : parseInt(this.selectedModel),
      ServiceId :parseInt(this.selectedService),
      AdditionalComment : this.comment,
      TimeStart : this.selectedHour.start,
      TimeEnd :this.selectedHour.end,
      FirstName : this.firstName,
      LastName : this.lastName,
      Email : this.email,
      Phone :this.phone,
      ShopId : this.shopId
    }

    var bookRequest = new XMLHttpRequest()
    bookRequest.open("POST", 'https://api.mechanicadvisor.com/v7/schedule/Book')
    bookRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    bookRequest.setRequestHeader("Content-Type", "application/json")
    bookRequest.send(JSON.stringify(customer));
    bookRequest.onload = function() {
      console.log(bookRequest.response);
    };
  }

  this.names = function () {
    this.firstName = $("#firstName").val();
    this.lastName = $("#lastName").val();
    this.phone = $("#phone").val();
    this.email = $("#email").val();
    this.comment = $("#comment").val();

  }


  this.setupTable = function (availableIntervals) {
   
    for (i = 0; i < availableIntervals.length; i++ ) {
      var date = availableIntervals[i].start.split("T")[0];
      if (Object.keys(this.sortedHours).indexOf(date) == -1) {
        this.sortedHours[date] = [];
      }
      this.sortedHours[date].push(availableIntervals[i]);
    }
    this.populateTable ();
  };
  
  this.populateTable = function () {
    var body = '';
    var tableBodyEl = $('#tbody');
    for (dayDate in this.sortedHours) {
      day  = this.weekday[new Date (dayDate).getDay()];
      body += '<tr> <td>' + day + '</td> <td>';

      for (i = 0; i < this.sortedHours[dayDate].length; i++) {
        body += ' <button onclick="getClickedTime(event)" class="btn btn-sm btn-default" id ="'+ this.sortedHours[dayDate][i].start + ' "> ' + this.sortedHours[dayDate][i].start.split("T")[1] + '</button>';
      } 

      body += '</td></tr>'
    }
    tableBodyEl.html(body)
  }


  this.setChosenTime = function(timeString) {
    arr = timeString.split("T")[0];
    for (i = 0; i < this.sortedHours[arr].length; i++ ) {
      
      if (this.sortedHours[arr][i].start.trim() === timeString.trim()) {
        this.selectedHour = this.sortedHours[arr][i];
        break;
      }
    }
  }
}

var scheduler = new Scheduler(576676)
scheduler.init()

function getClickedTime (e) {
  e.preventDefault();
  scheduler.setChosenTime(e.target.id);
}




  

