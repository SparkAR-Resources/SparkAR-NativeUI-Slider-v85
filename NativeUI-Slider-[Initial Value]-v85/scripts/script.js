// NativeUI Slider using the Patch Editor example v85
// by Luke Hurd :: @lukehurd

// Load the modules
const NativeUI = require('NativeUI');
const Patches = require('Patches');

// Create the NativeUI Slider
var slider = NativeUI.slider;

//Set value to 50%
slider.value = 0.5;

// Show the Slider
slider.visible = true;

// When the slider is used, send the value to the Patch Editor
// This is also where the magic happens for the initial selected value.
// Notice the "fireOnInitialValue" attribute we are passing - this lets Spark know
// to fire this monitor and pass the value right when the filter loads
slider.value.monitor({fireOnInitialValue: true}).subscribe(function(val) {
    Patches.inputs.setScalar('sliderValue', val.newValue);
});