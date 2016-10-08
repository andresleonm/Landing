$(document).ready(function() {

  /* -------- One page Navigation ----------*/
  $('#main-menu #menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 1500,
    scrollThreshold: 0.5,
    scrollOffset: 95,
    filter: ':not(.sub-menu a, .not-in-home)',
    easing: 'swing'
  }); 


  /*----------- Google Map - with support of gmaps.js ----------------*/

  function isMobile() { 
   return ('ontouchstart' in document.documentElement);
 }
     
 function init_gmap() {
    if ( typeof google == 'undefined' ) return;
    var peru = {lat: -10.5049722, lng: -77.0641579}; 
    var map = new google.maps.Map(document.getElementById('googleMaps'), {
    zoom: 5,
    center: peru,
    minzoom: 5,   
    mapTypeControl: true,    
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    navigationControl: true,
    scrollwheel: false,
    streetViewControl: true
  })
     
  var contentString = 'Detalles del caso';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
     
  var icons = {
          Atendido: {
            name: 'green',
            icon: 'images/map-pin-green-th.png'
          },
          Abierto: {
            name: 'red',
            icon: 'images/map-pin-red-th.png'
          },
          Tramitando: {
            name: 'yellow',
            icon: 'images/map-pin-yellow-th.png'
          }
        };

 function addMarker(feature) {
    var marker;
    marker = new google.maps.Marker({
    position: feature.position,
    icon: icons[feature.type].icon,
    map: map
    });
    marker.addListener('click',function(){
        //infowindow.open(map,marker);
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal         
        modal.style.display = "block";        

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
            })    
 }

/* Se añaden la posición y el tipo por cada pin en el mapa */
 var features = [
    {
        position: new google.maps.LatLng(-10.5049722, -77.0641579),
        type: 'Abierto'
    },{
        position: new google.maps.LatLng(-11.5049722, -77.0641579),
        type: 'Abierto'
    },{
        position: new google.maps.LatLng(-11.5049722, -74.0641579),
        type: 'Atendido'
    },{
        position: new google.maps.LatLng(-7.5049722, -75.0641579),
        type: 'Tramitando'
    },{
        position: new google.maps.LatLng(-9.5049722, -77.0641579),
        type: 'Atendido'
    } 
 ];
 for(var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
 }
     
 var legend = document.getElementById('legend');
        for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + type.icon + '">'+'<span><b>'+key.toString()+'</b></span>';              
          legend.appendChild(div);
        }

 map.controls[google.maps.ControlPosition.LEFT_CENTER].push(legend);
     

}
init_gmap();
})