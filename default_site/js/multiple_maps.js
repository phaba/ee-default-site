$(document).ready(function() {
	
	// MAPA 
	var mapa_id = [];

    $('.mapa-id').each(function(){
      var id = $(this).attr('id');
      id = id.substr(4);
      mapa_id.push(id);
    });

function mapaStart(pozycja,id) {
            var wspolrzedne = new google.maps.LatLng(pozycja[0],pozycja[1]);
            var opcjeMapy = {
              zoom: 15,
              center: wspolrzedne,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            window.mapa = new google.maps.Map(document.getElementById("mapa"+id), opcjeMapy);

            var punkt = new google.maps.LatLng(pozycja[0],pozycja[1]);
             opcjeMarkera = 
        {
             position: punkt,
             map: mapa,
             title: ''
        };

      var marker = new google.maps.Marker(opcjeMarkera);
    }

    for(var i = 0; i < mapa_id.length; i++) {
    var pozycja_mapy = $('#pozycja-mapy'+mapa_id[i]).eq(0).text().split(',');
    mapaStart(pozycja_mapy,mapa_id[i]);
  }

    function resize() {
      var center = mapa.getCenter();
      google.maps.event.trigger(mapa, 'resize');
      mapa.setCenter(center);  
    }

});