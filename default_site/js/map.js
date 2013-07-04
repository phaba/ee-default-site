$(document).ready(function() {
	
	// MAPA 
	function mapaStart(pozycja) {
			if(arguments.length) {
            var wspolrzedne = new google.maps.LatLng(pozycja[0],pozycja[1]);
		} else {
            var wspolrzedne = new google.maps.LatLng("53.442636","14.529084");
		}
            var opcjeMapy = {
              zoom: 15,
              center: wspolrzedne,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            window.mapa = new google.maps.Map(document.getElementById("mapa"), opcjeMapy);

			if(arguments.length) {
            var punkt = new google.maps.LatLng(pozycja[0],pozycja[1]);
        } else {
            var punkt = new google.maps.LatLng("53.442636","14.529084");
        }
            var opcjeMarkera = 
				{
   					 position: punkt,
   					 map: mapa,
   					 title: ''
				};

			var marker = new google.maps.Marker(opcjeMarkera);
    }

    // var pozycja_mapy = $('#pozycja-mapy').text().split(',');
    // mapaStart(pozycja_mapy);
    mapaStart();

    function resize() {
    	var center = mapa.getCenter();
			google.maps.event.trigger(mapa, 'resize');
			mapa.setCenter(center);  
    }
});