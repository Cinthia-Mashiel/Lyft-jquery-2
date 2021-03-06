function init(){
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(centrarMapa);
        initMap();
    }
}
//------------------posicionamiento de los carros-----------------
function initMap(){
    var myLatLng = {lat: -16.457148 , lng: -71.530759};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng,
    disableDefaultUI: true
  });
    var myLatLng = {lat: -16.457148 , lng: -71.530759};
    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Aqui estoy',
  });
    var myLatLng1 = {lat: -16.455648 , lng: -71.535870};
    var marker = new google.maps.Marker({
    position: myLatLng1,
    map: map,
    title: 'Lucas',
    icon: "images/carro1.jpg"
  });
    var myLatLng2 = {lat: -16.459128, lng: -71.525970};
    var marker = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'Diego',
    icon: "images/carro1.jpg"
  });
    var myLatLng3 = {lat: -16.455101 , lng: -71.529467};
    var marker = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    title: 'Camila',
    icon: "images/carro1.jpg"
  });
    var myLatLng4 = {lat: -16.455688 , lng: -71.525989};
    var marker = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    title: 'Steve',
    icon: "images/carro1.jpg"
  });
    var myLatLng5 = {lat: -16.453228, lng: 71.52702};
    var marker = new google.maps.Marker({
    position: myLatLng5,
    map: map,
    title: 'Angui',
    icon: "images/carro2.jpg"
  });
    var myLatLng6 = {lat: -16.459128, lng: -71.529870};
    var marker = new google.maps.Marker({
    position: myLatLng6,
    map: map,
    title: 'Maycol',
    icon: "images/carro2.jpg"
  });
    var myLatLng7 = {lat: -16.455348 , lng: -71.532789};
    var marker = new google.maps.Marker({
    position: myLatLng7,
    map: map,
    title: 'Franklin',
    icon: "images/carro2.jpg"
  });
}
function centrarMapa(position){
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        title:"Mi posición actual"
    });
};