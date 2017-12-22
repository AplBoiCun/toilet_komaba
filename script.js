function initMap() {
  var place = {lat: 35.6598964, lng: 139.6835137};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: place
  });
  var marker = new google.maps.Marker({
    position: place,
    map: map
  });
}
