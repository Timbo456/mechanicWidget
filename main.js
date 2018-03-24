function Scheduler(shopId) {
  this.nextHours = {
    "UtcOffset": "-05:00:00",
    "AvailableIntervals": [
      {
        "start": "2018-03-26T08:00:00",
        "end": "2018-03-26T09:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-26T09:00:00",
        "end": "2018-03-26T10:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-26T10:00:00",
        "end": "2018-03-26T11:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-26T11:00:00",
        "end": "2018-03-26T12:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-26T12:00:00",
        "end": "2018-03-26T13:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-26T13:00:00",
        "end": "2018-03-26T14:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-26T14:00:00",
        "end": "2018-03-26T15:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-26T15:00:00",
        "end": "2018-03-26T16:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-26T16:00:00",
        "end": "2018-03-26T17:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-26T17:00:00",
        "end": "2018-03-26T18:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-27T08:00:00",
        "end": "2018-03-27T09:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-27T09:00:00",
        "end": "2018-03-27T10:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-27T10:00:00",
        "end": "2018-03-27T11:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-27T11:00:00",
        "end": "2018-03-27T12:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-27T12:00:00",
        "end": "2018-03-27T13:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-27T13:00:00",
        "end": "2018-03-27T14:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-27T14:00:00",
        "end": "2018-03-27T15:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-27T15:00:00",
        "end": "2018-03-27T16:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-27T16:00:00",
        "end": "2018-03-27T17:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-27T17:00:00",
        "end": "2018-03-27T18:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-28T08:00:00",
        "end": "2018-03-28T09:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-28T09:00:00",
        "end": "2018-03-28T10:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-28T10:00:00",
        "end": "2018-03-28T11:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-28T11:00:00",
        "end": "2018-03-28T12:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-28T12:00:00",
        "end": "2018-03-28T13:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-28T13:00:00",
        "end": "2018-03-28T14:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-28T14:00:00",
        "end": "2018-03-28T15:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-28T15:00:00",
        "end": "2018-03-28T16:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-28T16:00:00",
        "end": "2018-03-28T17:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-28T17:00:00",
        "end": "2018-03-28T18:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-29T08:00:00",
        "end": "2018-03-29T09:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-29T09:00:00",
        "end": "2018-03-29T10:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-29T10:00:00",
        "end": "2018-03-29T11:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-29T11:00:00",
        "end": "2018-03-29T12:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-29T12:00:00",
        "end": "2018-03-29T13:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-29T13:00:00",
        "end": "2018-03-29T14:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-29T14:00:00",
        "end": "2018-03-29T15:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-29T15:00:00",
        "end": "2018-03-29T16:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-29T16:00:00",
        "end": "2018-03-29T17:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-29T17:00:00",
        "end": "2018-03-29T18:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-30T08:00:00",
        "end": "2018-03-30T09:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-30T09:00:00",
        "end": "2018-03-30T10:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-30T10:00:00",
        "end": "2018-03-30T11:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-30T11:00:00",
        "end": "2018-03-30T12:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-30T12:00:00",
        "end": "2018-03-30T13:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-30T13:00:00",
        "end": "2018-03-30T14:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-30T14:00:00",
        "end": "2018-03-30T15:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-30T15:00:00",
        "end": "2018-03-30T16:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-30T16:00:00",
        "end": "2018-03-30T17:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-30T17:00:00",
        "end": "2018-03-30T18:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-31T08:00:00",
        "end": "2018-03-31T09:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-31T09:00:00",
        "end": "2018-03-31T10:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-31T10:00:00",
        "end": "2018-03-31T11:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-31T11:00:00",
        "end": "2018-03-31T12:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-31T12:00:00",
        "end": "2018-03-31T13:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-31T13:00:00",
        "end": "2018-03-31T14:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-31T14:00:00",
        "end": "2018-03-31T15:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-31T15:00:00",
        "end": "2018-03-31T16:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-31T16:00:00",
        "end": "2018-03-31T17:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      }
    ]
  }

  this.mockHours = {
    "UtcOffset": "-05:00:00",
    "AvailableIntervals": [
      {
        "start": "2018-03-24T08:00:00",
        "end": "2018-03-24T09:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-24T09:00:00",
        "end": "2018-03-24T10:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-24T10:00:00",
        "end": "2018-03-24T11:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-24T11:00:00",
        "end": "2018-03-24T12:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-24T12:00:00",
        "end": "2018-03-24T13:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-24T13:00:00",
        "end": "2018-03-24T14:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-24T14:00:00",
        "end": "2018-03-24T15:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-24T15:00:00",
        "end": "2018-03-24T16:00:00",
        "isTimeBlock": false,
        "TimeType": 0
      },
      {
        "start": "2018-03-24T16:00:00",
        "end": "2018-03-24T17:00:00",
        "isTimeBlock": false,
        "TimeType": 0
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
  this.extraComment = "";
  this.date = new Date();
  this.dateString = (this.date.getFullYear() + "-" + (this.date.getMonth() +1) + "-" + this.date.getDate());
  this.queryDate = null;
  this.selectedYear = "none"
  this.selectedModel = "none"
  this.selectedMake = "none"
  this.selectedService = "none"
  this.selectedHour = "none"
  this.sortedHours = {};
  //var proxy = 'https://cors-anywhere.herokuapp.com/';

  this.api = {
    url:  "https://api.mechanicadvisor.com/v7/schedule/",
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
    var that = this;

  //  this.bindEvents();
    //this.setupTable(this.mockHours.AvailableIntervals);

      this.years = this.getYears(function () {
        that.selectedYear = "none"
        console.log(that.years);
      that.makes = that.getMakes(that.years[0], function () {
        that.selectedMake = "none"

      that.models = that.getModels(that.years[0], that.makes[0].id, function () {
        that.selectedModel = "none"

      this.services = that.getServices(function () {
        that.selectedService = "none"

      this.hours = that.getHours(that.dateString, function () {
        that.selectedHour = "none"
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
    var buttonDiv = $("#button-holder");

    var yearSelectOptionsHtml = ""
    if (this.selectedYear === 'none') {
      yearSelectOptionsHtml += `<option value="none" selected>Select Year</option>`
    }
    
    for (var i = 0; i < this.years.length; i++) {
      if (this.selectedYear === this.years[i]) {
        yearSelectOptionsHtml += `<option value=${this.years[i]} selected>${this.years[i]}</option>`
      } else {
        yearSelectOptionsHtml += `<option value=${this.years[i]}>${this.years[i]}</option>`
      }
    }
    var yearSelectHtml = "<div class='form-group select-wrap'><select id='year-select' class='form-control'>" + yearSelectOptionsHtml + "</select></div>"

    var makeSelectOptionsHtml = ""
    if (this.selectedMake === 'none') {
      makeSelectOptionsHtml += `<option value="none" selected>Select Make</option>`
    }

    for (var i = 0; i < this.makes.length; i++) {
      if (this.selectedMake === this.makes[i].Id) {
        makeSelectOptionsHtml += `<option value=${this.makes[i].Id} selected> ${this.makes[i].Name}</option>`
      } else{
        makeSelectOptionsHtml += `<option value=${this.makes[i].Id}>${this.makes[i].Name}</option>`
      }
    }
    var makeSelectHtml = "<div class='form-group select-wrap'><select id='make-select' class='form-control'>" + makeSelectOptionsHtml + "</select></div>"

    var modelSelectOptionsHtml = ""
    if (this.selectedModel === "none") {
      modelSelectOptionsHtml += `<option value= "none" selected>Select Model</option>`
    }

    for (var i = 0; i < this.models.length; i++) {
      if (this.selectedModel === this.models[i].Id) {
        modelSelectOptionsHtml += `<option value= ${this.models[i].Id} selected>${this.models[i].Name}</option>`
      } else {
        modelSelectOptionsHtml += `<option value= ${this.models[i].Id}>${this.models[i].Name}</option>`
      }
    }
    var modelSelectHtml = "<div class= 'form-group select-wrap'><select id='model-select' class='form-control'>" + modelSelectOptionsHtml + "</select></div>"

    var serviceSelectOptionsHtml = "";
    if (this.selectedService == "none") {
      serviceSelectOptionsHtml += `<option value= "none"} selected>Select Service</option>`
    }
    for (var i = 0; i < this.services.length; i++) {
      if(this.selectedService == this.services[i].Id) {
        serviceSelectOptionsHtml += `<option value= ${this.services[i].Id} selected>${this.services[i].Name}</option>`
      } else {
        serviceSelectOptionsHtml += `<option value= ${this.services[i].Id}>${this.services[i].Name}</option>`
      }
    }
    
    var serviceSelectHtml = "<div class= 'form-group select-wrap'><select id='services-select' class='form-control'>" + serviceSelectOptionsHtml + "</select></div>"

    var buttonHtml = '<button class= "btn btn-md btn-primary" id="bookButton">Schedule!</button>';

    formContentEl.html(yearSelectHtml + makeSelectHtml + modelSelectHtml + serviceSelectHtml);
    buttonDiv.html(buttonHtml);

  }.bind(this)

  this.bindEvents = function () {
    var yearSelectEl = $("#year-select")
    var makeSelectEl = $("#make-select")
    var modelSelectEl = $("#model-select")
    var serviceSelectEl = $("#services-select")
    var hoursSelectEl = $("#hours-select")
    var bookButton = $("#bookButton");
    var changeHourEl = $("#change");
    var nextButton = $("#next");
    var prevButton = $("#prev");
    var commentSelectEL = $("#comment-select");

    var that = this;

    nextButton.click(function(e) {
      e.preventDefault();
      this.next();
    }.bind(this));

    prevButton.click(function(e) {
      e.preventDefault();
      this.previous();
    }.bind(this));

    yearSelectEl.change(function(e) {
      this.selectedYear = $(e.currentTarget).val()
      this.selectedMake = "none";
      this.selectedModel = "none";
      this.makes = this.getMakes(this.selectedYear, function () {
        console.log("rerendering makes");
        that.render()
        that.bindEvents()
      })
    }.bind(this))

    commentSelectEL.change(function (e) {
      this.extraComment = $(e.currentTarget).val();
    }.bind(this));

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

    changeHourEl.click(function (e) {
      e.preventDefault();
      $('#table').show();
      $('#change').hide();
    }.bind(this));

    makeSelectEl.change(function(e){
      this.selectedMake = $(e.currentTarget).val()
      this.models = this.getModels(this.selectedYear, this.selectedMake, function() {
        this.selectedModel = "none"
        console.log("rerendering makes");
        that.render()
        that.bindEvents()
      })
    }.bind(this))

  }.bind(this)
//////////////
  this.getYears = function (callback) {
    var shopYearsUrl = this.api.url + this.api.endpoints.shopYears + '?param.shopId=' + this.shopId
    console.log(shopYearsUrl);
    var yearsRequest = new XMLHttpRequest()
    yearsRequest.open("GET",  shopYearsUrl)
    yearsRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    yearsRequest.onload = function() {
        this.years = JSON.parse(yearsRequest.response);
        this.selectedYear = "none";
        callback()
    }.bind(this)

   yearsRequest.send()

  }.bind(this)
////////////
  this.getMakes = function (year, callback) {
    var makesUrl = this.api.url + this.api.endpoints.makes + '?param.year=' + year + "&param.shopId=" + this.shopId
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
  this.getModels = function (year, make,callback) {
    var modelsUrl = this.api.url + this.api.endpoints.models + "?param.year=" + year + "&param.makeId=" + make + "&param.shopId=" + this.shopId
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
  this.getHours = function (dateString, callback) {
    var hoursUrl = this.api.url + this.api.endpoints.hours + "?param.date=" + dateString + "&param.shopId=" + this.shopId
    var hoursRequest = new XMLHttpRequest()
    hoursRequest.open("GET",  hoursUrl)
    hoursRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    hoursRequest.onload = function() {
      this.hours = JSON.parse(hoursRequest.response)
      console.log(this.hours.AvailableIntervals);
      this.setupTable(this.hours.AvailableIntervals);
      if (callback) callback()
    }.bind(this)

    hoursRequest.send()

  }.bind(this)

  this.bookfunction =  function() {
    this.names();
    var that  = this;
    $('#success').hide();
    $('#preloader').show();
    $('#bookingform').hide();

    // validategit

    var customer = {
      Year : parseInt(this.selectedYear),
      MakeId : parseInt(this.selectedMake),
      ModelId : parseInt(this.selectedModel),
      ServiceId :parseInt(this.selectedService),
      AdditionalComment : this.comment + " " + this.extraComment,
      TimeStart : this.selectedHour.start,
      TimeEnd :this.selectedHour.end,
      FirstName : this.firstName,
      LastName : this.lastName,
      Email : this.email,
      Phone :this.phone,
      ShopId : this.shopId
    }
    console.log(customer);

    var bookRequest = new XMLHttpRequest()
    bookRequest.open("POST",  'https://api.mechanicadvisor.com/v7/schedule/Book')
    bookRequest.setRequestHeader("Authorization", "Basic " + this.api.key)
    bookRequest.setRequestHeader("Content-Type", "application/json")
    bookRequest.send(JSON.stringify(customer));
    bookRequest.onload = function() {
      console.log(bookRequest.response);
      $('#success').show();
      $('#preloader').hide();
      $('#bookingform').hide();
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
    this.sortedHours = {}
    for (i = 0; i < availableIntervals.length; i++ ) {
      var date = availableIntervals[i].start.split("T")[0];
      console.log(date);
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
    tableBodyEl.innerHTML = '';

    for (dayDate in this.sortedHours) {
      day  = this.weekday[(new Date (dayDate).getDay())  + 1 ];
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
        $('#hourtext').html('Selected time for appointment is ' + timeString.split("T")[0] + " from " + timeString.split("T")[1] + " till " + this.selectedHour.end.split("T")[1] );
        break;
      }
    }
  }

  this.next = function() {
    if (this.querydate == null) {
      this.queryDate = new Date();
      this.queryDate.setDate(this.date.getDate() + 7);
    } else {
      this.queryDate.setDate(this.queryDate.getDate() + 7);
    }
    var queryDateString = (this.queryDate.getFullYear() + "-" + (this.queryDate.getMonth() +1) + "-" + this.queryDate.getDate());
    this.getHours(queryDateString, function() {
      console.log(this.hours.AvailableIntervals);
      this.selectedHour = this.hours.AvailableIntervals[0];
    }.bind(this));

    //this.setupTable(this.nextHours.AvailableIntervals);

  }

  this.previous = function () {

      if ((this.queryDate !== null ) && (this.queryDate.getDate() - this.date.getDate() >= 7)) {
        this.queryDate.setDate(this.date.getDate() - 7);
        var queryDateString = (this.queryDate.getFullYear() + "-" + (this.queryDate.getMonth() +1) + "-" + this.queryDate.getDate());
        this.getHours(queryDateString, function() {
          console.log(this.hours.AvailableIntervals);
          this.selectedHour = this.hours.AvailableIntervals[0];
        }.bind(this));

        //this.setupTable(this.mockHours.AvailableIntervals);
      }
  }
}

var scheduler = new Scheduler(576676)
scheduler.init()

function getClickedTime (e) {
  e.preventDefault();
  scheduler.setChosenTime(e.target.id);
  $('#table').hide();
  $('#change').show();
}
