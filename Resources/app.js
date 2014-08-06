/**
 * Map view with annotation
 * @author Danang Iswadi
 * 
 */

var MapModule = require('ti.map');
var win = Ti.UI.createWindow({backgroundColor: 'white', navBarHidden: true});

var rc = MapModule.isGooglePlayServicesAvailable();
switch (rc) {
    case MapModule.SUCCESS:
        Ti.API.info('Google Play services is installed.');
        break;
    case MapModule.SERVICE_MISSING:
        alert('Google Play services is missing. Please install Google Play services from the Google Play store.');
        break;
    case MapModule.SERVICE_VERSION_UPDATE_REQUIRED:
        alert('Google Play services is out of date. Please update Google Play services.');
        break;
    case MapModule.SERVICE_DISABLED:
        alert('Google Play services is disabled. Please enable Google Play services.');
        break;
    case MapModule.SERVICE_INVALID:
        alert('Google Play services cannot be authenticated. Reinstall Google Play services.');
        break;
    default:
        alert('Unknown error.');
        break;
}

var modernlandView = MapModule.createAnnotation({
    latitude: -6.197766,
    longitude: 106.647146,
    title: "Padang Golf Modernland",
    subtitle: 'Jl. Modern Golf Raya no.1, Tangerang',
    pincolor: MapModule.ANNOTATION_RED,
    myid: 1
});

var mapView = MapModule.createView({
    mapType: MapModule.NORMAL_TYPE,
    region: {latitude:-6.197766, longitude:106.647146,
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate: true,
    regionFit: true,
    userLocation: true,
    annotations: [modernlandView]
});

win.add(mapView);

mapView.addEventListener('click', function(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
});

win.open();
