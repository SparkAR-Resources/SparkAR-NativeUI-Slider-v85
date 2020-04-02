// NativeUI Slider using the Patch Editor example v85
// by Luke Hurd :: @lukehurd

// Load the modules
const NativeUI = require('NativeUI');
const Patches = require('Patches');

// Create the NativeUI Slider
var slider = NativeUI.slider;

// Show the Slider
slider.visible = true;

// When the slider is used, send the value to the Patch Editor
slider.value.monitor().subscribe(function(val) {
    Patches.setScalarValue("sliderValue", val.newValue);
});