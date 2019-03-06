//Google Map
var latitudeTbo = $('#google-map-tbo').data('latitude')
var longitudeTbo = $('#google-map-tbo').data('longitude')
function initialize_map_tbo() {
    var myLatlngTbo = new google.maps.LatLng(latitudeTbo,longitudeTbo);
    var mapOptions = {
        zoom: 15,
        center: myLatlngTbo,
        mapTypeId: 'satellite'
    };
    var maptbo = new google.maps.Map(document.getElementById('google-map-tbo'), mapOptions);
    var tbo = {lat: 49.174450, lng: 33.489802};

    var content_tbo = '<div class="info-window" id="content"> Полигон ТБО</div>';

    var infowindow_tbo = new google.maps.InfoWindow({
        content: content_tbo
    });
    var marker_tbo = new google.maps.Marker({
        position: tbo,
        map: maptbo,
        title: 'Полигон ТБО'
    });
    google.maps.event.addListener(marker_tbo, 'click', function() {
        infowindow_tbo.open(maptbo,marker_tbo);
    });

}
initialize_map_tbo();
$('#map-tbo').on('hidden.bs.collapse', function () {
    initialize_map_tbo();
})
$('#map-tbo').on('shown.bs.collapse', function () {
    initialize_map_tbo();
})

google.maps.event.addDomListener(window, 'resize', function() {

});