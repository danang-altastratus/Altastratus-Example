/**
 * Implementation of the window layout vertical & horizontal
 * @author Danang Iswadi
 */

var win = Ti.UI.createWindow({
    backgroundColor: 'black',
    layout: 'vertical'
});

if (Ti.Platform.Android) {
    win.setNavBarHidden(true);
} else {
    win.setNavBarHidden(false);
};

var Title = Ti.UI.createLabel({
    top: 0,
    height: 64,
    width: Ti.UI.FILL,
    backgroundColor: 'white',
    text: 'Horizontal layout view',
    color: 'black',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});

var view1 = Ti.UI.createView({
    backgroundColor: 'red',
    left: 4,           
    height: 75,
    width: 75,
    top: 4
});

var view2 = Ti.UI.createView({
    backgroundColor: 'white',
    backgroundImage: '/images/appcelerator.png',
    left: 4,
    height: 75,
    width: 75,
    top: 4
});

var view3 = Ti.UI.createView({
    backgroundColor: 'green',  
    left: 4,  
    height: 75,
    width: 75,
    top: 4
});

var view4 = Ti.UI.createView({
    backgroundColor: 'white',
    backgroundImage: '/images/alloy.png',
    left: 4,
    height: 75,
    width: 75,
    top: 4
});

var view5 = Ti.UI.createView({
    backgroundColor: 'blue',
    left: 4,
    height: 75,
    width: 75,
    top: 4
});

var view6 = Ti.UI.createView({
    backgroundColor: 'white',
    backgroundImage: '/images/appcelerator-titanium.png',
    left: 4,
    height: 75,
    width: 75,
    top: 4
});

win.add(Title);
win.add(view1);
win.add(view2);
win.add(view3);
win.add(view4);
win.add(view5);
win.add(view6);

win.open();