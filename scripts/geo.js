
// Adaptado de: https://developers.google.com/maps/documentation/javascript/examples/map-geolocation?hl=pt-br
var map;

function initialize() {
  
  var mapOptions = {
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById('mapa'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Você está aqui!'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser não suporta geolocalização
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Erro: O serviço de Geolocalização falhou.';
  } else {
    var content = 'Erro: Seu navegador não suporta Geolocalização.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);