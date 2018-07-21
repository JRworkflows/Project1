var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 38.575764, lng: -121.478851 },
        zoom: 8
    })
}