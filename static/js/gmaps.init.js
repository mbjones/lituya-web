$(document).ready(function () {
  initMap();
});

function initMap() {
        var aukebay = {lat: 58.382433, lng: -134.648417};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: aukebay
        });
        var marker = new google.maps.Marker({
          position: aukebay,
          map: map
        });
}
