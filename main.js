
var url = "https://api.mechanicadvisor.com/v7/schedule/";
var key = "Zjc3Y2ZmNDUyYmI5NGZiOWE4OGI4YjgyYmNlMzE4NjI6";
var shop = "param.shopId=576676";
var year = "GetShopVehicleYears?";
var selectyear = '';
var make = "GetShopVehicleMakes?";
var model = "GetShopVehicleModels?";
var carContainer = document.getElementById("Cars-info");
var btn = document.getElementById("btn");



btn.addEventListener("click", function() {

    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', url + year + shop);
    ourRequest.setRequestHeader ('Authorization', 'Basic ' + key);
    ourRequest.onload = function() {

        var ourData =JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
      };
      ourRequest.send();
    });

function renderHTML(data) {
      var htmlString = "";

      for (i = 0; i < data.length; i++) {

         htmlString += "<button>" + data[i]; + "</button>";

  }

  carContainer.insertAdjacentHTML('beforeend', htmlString);
}
