function creerLayerLigne(lpoly,name,rgba,width) {
		
		 var vectorSource = new ol.source.Vector({
			  //create empty vector
			});

		 lpoly.forEach (function(poly) {
				vectorSource.addFeature(new ol.Feature({
				    geometry : new ol.geom.LineString(poly).transform('EPSG:4326', 'EPSG:3857'),
				}));

		 });
		 

		var vectorLayer = new ol.layer.Vector({
		    source : vectorSource,
		    name : name,
			    style: new ol.style.Style({
		          stroke: new ol.style.Stroke({
		            color: rgba,
		            width: width
		          })
		        })
		});
		//polyLayer.set('name','rrrr');

		return vectorLayer
		//alert(polyLayer.get('name'));
	
}

function creerLayerMarqueur(lmarkers,name,icon,opacity) {
	
	 var vectorSource = new ol.source.Vector({
		  //create empty vector
		});

	 lmarkers.forEach (function(marker) {
			vectorSource.addFeature(new ol.Feature({
			    geometry : new ol.geom.Point(ol.proj.transform([marker.lon, marker.lat], 'EPSG:4326',     
		        'EPSG:3857')),
		        txt : marker.txt
			}));

	 });
	 
	 

	var vectorLayer = new ol.layer.Vector({
	    source : vectorSource,
	    name : name,
		style: new ol.style.Style({
		    	  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
		    	  	    anchor: [0.5, 32],
		    	  	    anchorXUnits: 'fraction',
		    	  	    anchorYUnits: 'pixels',
		    	  	    opacity: opacity,
		    	  	    src: icon
		    	  	  }))
		    	  	})
	});
	//polyLayer.set('name','rrrr');

	return vectorLayer;
	// map.addOverlay(vectorLayer);

	//alert(polyLayer.get('name'));
	

}


function direction(lon1,lat1,lon2,lat2) {
	// calcul de la direction en degrés d'une droite passant par 2 points

    lon1 = lon1 * (Math.PI/180); // degrés -> radians
    lat1 = lat1 * (Math.PI/180);

    lon2 = lon2 * (Math.PI/180); // degrés -> radians
    lat2 = lat2 * (Math.PI/180);

    //var y = Math.sin(λ2-λ1) * Math.cos(φ2);
    //var x = Math.cos(φ1)*Math.sin(φ2) -
    //        Math.sin(φ1)*Math.cos(φ2)*Math.cos(λ2-λ1);
    //var brng = Math.atan2(y, x).toDegrees();

   var y = Math.sin(lon2-lon1) * Math.cos(lat2);
   var x = Math.cos(lat1)*Math.sin(lat2) -
           Math.sin(lat1)*Math.cos(lat2)*Math.cos(lon2-lon1);
   var brng = Math.atan2(y, x);
   brng = brng *(180 / Math.PI);

   //alert(brng);
   return brng;
}


function destination(lon,lat,dist,bearing) {
	// En partant d'un point GPS, 
	// en avançant dans une direction donnée sur une longueur donnée,
	// on calcule la destination

    // lon, lat GPS (origine)
    // dist en mètres
    // bearing en degrés

    // http://www.movable-type.co.uk/scripts/latlong.html
    //φ2 = asin( sin φ1 ⋅ cos δ + cos φ1 ⋅ sin δ ⋅ cos θ )
    //λ2 = λ1 + atan2( sin θ ⋅ sin δ ⋅ cos φ1, cos δ − sin φ1 ⋅ sin φ2 )
    // where     φ is latitude, λ is longitude, θ is the bearing (clockwise from north)
    // δ is the angular distance d/R; d being the distance travelled, R the earth’s radius



	//console.log("direction 1")
     var lon1 = lon * (Math.PI/180); // degrés -> radians
     var lat1 = lat * (Math.PI/180);
     bearing = bearing * (Math.PI/180);
     var R = 6371000;

     var lat2 = Math.asin( Math.sin(lat1)*Math.cos(dist/R) +
            Math.cos(lat1)*Math.sin(dist/R)*Math.cos(bearing) );
    var lon2 = lon1 + Math.atan2(Math.sin(bearing)*Math.sin(dist/R)*Math.cos(lat1),
                 Math.cos(dist/R)-Math.sin(lat1)*Math.sin(lat2));


     lon2 = lon2 * (180/Math.PI); // radians -> degrés
     lat2 = lat2 * (180/Math.PI);

     //alert("lon1 = "+lon0+" lat1 = "+lat0+" lon2 = "+lon2+" lat2 = "+lat2)

 	//console.log("direction 2")

    return [lon2,lat2];

}

function toRad(x) {
	// conversion degrés -> radians
	return x * Math.PI / 180;
}


function distance(lon1, lat1, lon2, lat2) {
	// calcul de la distance en m entre 2 points
	
	 var R = 6371000; // m
	 var dLon = toRad(lon2 - lon1),
	     lat1 = toRad(lat1),
	     lat2 = toRad(lat2),
	     d = Math.acos(Math.sin(lat1)*Math.sin(lat2) + Math.cos(lat1)*Math.cos(lat2) * Math.cos(dLon)) * R;
	
	
	 return d;
}
