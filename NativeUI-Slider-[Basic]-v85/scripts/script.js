// NativeUI Slider using the Patch Editor example v85
// by Luke Hurd :: @lukehurd

// WHAT HAS CHANGED FROM PREVIOUS VERSIONS//

// In order to load Textures, Materials, and Objects, we must 
// now use something in Javascript called "Promises". The basic
// concept is Spark AR now wants to make sure these assets are 
// available to the script to manipulate before executing any code.

// When loading assets, find() has been changed to findFirst() and findAll()

// Load the modules
const Scene = require('Scene');
const NativeUI = require('NativeUI');

Promise.all([

    // Load the plane
    Scene.root.findFirst('plane0')

// Now, we wait for a "go ahead" from the script to let us know when
// we can start using our assets and creating the NativeUI Slider

]).then(function(results){

    // Assets are loaded, so let's set them all so we can use them later in the script.
    // The assets are all returned in an object called "results" in the order that we 
    // loaded them. Remember, the index starts at 0 so the first asset is always results[0],
    // the next is results[1], etc.

    // First, we set the buttons for the NativeUI Picker
    const plane = results[0];

    // Create the NativeUI Slider
    var slider = NativeUI.slider;

    // Show the Slider
    slider.visible = true;

    // When the slider is used, scale the plane
    slider.value.monitor().subscribe(function(val) {
        
        plane.transform.scaleX = val.newValue;
        plane.transform.scaleY = val.newValue;
        plane.transform.scaleZ = val.newValue;
    
    });

});