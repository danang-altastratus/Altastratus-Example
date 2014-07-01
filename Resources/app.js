var win = Ti.UI.createWindow({
    backgroundColor: 'white',
    layout: 'vertical',
    navBarHidden: true
});

var Title = Ti.UI.createLabel({
    top: 20,
    height: 44,
    width: Ti.UI.FILL,
    backgroundColor: 'white',
    text: 'Vertical layout view',
    color: 'black',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});

var view1 = Ti.UI.createView({
    backgroundColor: 'red',       
    height: 80,
    width: 80,
    top: 0
});

var view2 = Ti.UI.createView({
    backgroundImage: '/images/appcelerator.png',
    height: 80,
    width: 80,
    top: 0
});

var view3 = Ti.UI.createView({
    backgroundColor: 'green',    
    height: 80,
    width: 80,
    top: 0
});

var view4 = Ti.UI.createView({
    backgroundImage: '/images/alloy.png',
    height: 80,
    width: 80,
    top: 0
});

var view5 = Ti.UI.createView({
    backgroundColor: 'blue',
    height: 80,
    width: 80,
    top: 0
});

win.add(Title);
win.add(view1);
win.add(view2);
win.add(view3);
win.add(view4);
win.add(view5);

win.open();