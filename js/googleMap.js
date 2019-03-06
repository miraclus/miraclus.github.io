// ----------------first map--------------------------
var latitude = $('#google-map').data('latitude');
var longitude = $('#google-map').data('longitude');

function initialize_map() {
    var myLatlng = new google.maps.LatLng(latitude,longitude);
    var mapOptions = {
        zoom: 12,
        center: myLatlng,
    mapTypeId: 'satellite'

    };
    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var t6 = {lat: 49.197271, lng: 33.459885};
    var t10 = {lat: 49.161445, lng: 33.436901};
    var t11 = {lat: 49.142189, lng: 33.437198};
    var t8 = {lat: 49.152896, lng: 33.485854};
    var t9 = {lat: 49.155781, lng: 33.517553};
    var t7 = {lat: 49.173982, lng: 33.516913};

    var contentT6 = '<div  class="info-window" id="content"><p><b>T6</b>    <a href="ecofiles/air_2016.xls" class="mhot">Информация о результатах измерений (2016)</a></p><p> <a href="ecofiles/air_2017.xls" class="mhot">Информация о результатах измерений (2017)</a></p><p> <a href="ecofiles/air_2018.xls" class="mhot">Информация о результатах измерений (2018)</a></p>' +
        '</div>';
    var contentT10 = '<div  class="info-window" id="content"><p><b>T10</b>  <a href="ecofiles/air_2016.xls" class="mhot">Информация о результатах измерений (2016)</a></p><p> <a href="ecofiles/air_2017.xls" class="mhot">Информация о результатах измерений (2017)</a></p><p> <a href="ecofiles/air_2018.xls" class="mhot">Информация о результатах измерений (2018)</a></p>' +
        '</div>';
    var contentT11 = '<div  class="info-window" id="content"><p><b>T11</b>  <a href="ecofiles/air_2016.xls" class="mhot">Информация о результатах измерений (2016)</a></p><p> <a href="ecofiles/air_2017.xls" class="mhot">Информация о результатах измерений (2017)</a></p><p> <a href="ecofiles/air_2018.xls" class="mhot">Информация о результатах измерений (2018)</a></p>' +
        '</div>';
    var contentT8 = '<div  class="info-window" id="content"><p><b>T8</b>    <a href="ecofiles/air_2016.xls" class="mhot">Информация о результатах измерений (2016)</a></p><p> <a href="ecofiles/air_2017.xls" class="mhot">Информация о результатах измерений (2017)</a></p><p> <a href="ecofiles/air_2018.xls" class="mhot">Информация о результатах измерений (2018)</a></p>' +
        '</div>';
    var contentT9 = '<div  class="info-window" id="content"><p><b>T9</b>    <a href="ecofiles/air_2016.xls" class="mhot">Информация о результатах измерений (2016)</a></p><p> <a href="ecofiles/air_2017.xls" class="mhot">Информация о результатах измерений (2017)</a></p><p> <a href="ecofiles/air_2018.xls" class="mhot">Информация о результатах измерений (2018)</a></p>' +
        '</div>';
    var contentT7 = '<div  class="info-window" id="content"><p><b>T7</b>    <a href="ecofiles/air_2016.xls" class="mhot">Информация о результатах измерений (2016)</a></p><p> <a href="ecofiles/air_2017.xls" class="mhot">Информация о результатах измерений (2017)</a></p><p> <a href="ecofiles/air_2018.xls" class="mhot">Информация о результатах измерений (2018)</a></p>' +
        '</div>';

    var infowindowT6 = new google.maps.InfoWindow({
        content: contentT6
    });
    var markerT6 = new google.maps.Marker({
        position: t6,
        map: map,
        title: 'T6'
    });
    google.maps.event.addListener(markerT6, 'click', function() {
        infowindowT6.open(map,markerT6);
    });

    var infowindowT10 = new google.maps.InfoWindow({
        content: contentT10
    });
    var markerT10 = new google.maps.Marker({
        position: t10,
        map: map,
        title: 'T10'
    });
    google.maps.event.addListener(markerT10, 'click', function() {
        infowindowT10.open(map,markerT10);
    });

    var infowindowT11 = new google.maps.InfoWindow({
        content: contentT11
    });
    var markerT11 = new google.maps.Marker({
        position: t11,
        map: map,
        title: 'T11'
    });
    google.maps.event.addListener(markerT11, 'click', function() {
        infowindowT11.open(map,markerT11);
    });

    var infowindowT8 = new google.maps.InfoWindow({
        content: contentT8
    });
    var markerT8 = new google.maps.Marker({
        position: t8,
        map: map,
        title: 'T8'
    });
    google.maps.event.addListener(markerT8, 'click', function() {
        infowindowT8.open(map,markerT8);
    });

    var infowindowT9 = new google.maps.InfoWindow({
        content: contentT9
    });
    var markerT9 = new google.maps.Marker({
        position: t9,
        map: map,
        title: 'T9'
    });
    google.maps.event.addListener(markerT9, 'click', function() {
        infowindowT9.open(map,markerT9);
    });

    var infowindowT7 = new google.maps.InfoWindow({
        content: contentT7
    });
    var markerT7 = new google.maps.Marker({
        position: t7,
        map: map,
        title: 'T7'
    });
    google.maps.event.addListener(markerT7, 'click', function() {
        infowindowT7.open(map,markerT7);
    });
}

initialize_map();
$('#map').on('hidden.bs.collapse', function () {
    initialize_map();
})
$('#map').on('shown.bs.collapse', function () {
    initialize_map();
})

google.maps.event.addDomListener(window, 'resize', function() {

});
//------------- Second map--------------------
