//Google Map
var latitudePt = $('#google-map-pt').data('latitude')
var longitudePt = $('#google-map-pt').data('longitude')
function initialize_map_pt() {
    var myLatlng = new google.maps.LatLng(latitudePt,longitudePt);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: 'satellite'

    };
    var mappt = new google.maps.Map(document.getElementById('google-map-pt'), mapOptions);
    var pt1 = {lat: 49.169133, lng: 33.500563};

    var content_pt1 = '<div class="info-window" id="content"> Полигон промотходов</div>';

    var infowindow_pt1 = new google.maps.InfoWindow({
        content: content_pt1
    });
    var marker_pt1 = new google.maps.Marker({
        position: pt1,
        map: mappt,
        title: 'Полигон'
    });
    google.maps.event.addListener(marker_pt1, 'click', function() {
        infowindow_pt1.open(mappt,marker_pt1);
    });

}
initialize_map_pt();
$('#map-pt').on('hidden.bs.collapse', function () {
    initialize_map_pt();
})
$('#map-pt').on('shown.bs.collapse', function () {
    initialize_map_pt();
})

google.maps.event.addDomListener(window, 'resize', function() {

});