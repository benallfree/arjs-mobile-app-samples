# Cordova + AR.js Marker Mode + iosrtc polyfill

This demo shows AR.js Marker Mode in a Cordova-based app using iosrtc polyfills.

Status: not working

## Notes

- MUST be run from a physical device. Simulator does not support camera.
- The following domains must be added to Cordova's Content-Security-Policy: https://cdn.jsdelivr.net https://webrtc.github.io https://dpdb.webvr.rocks https://jeromeetienne.github.io
- The aframe markup should be loaded after Cordova's `ondeviceready` event. See JS for implementation.
- Aframe complains about being run from the `file://` protocol. Worth fixing?
- These files are dynamically loaded by Aframe or AR.js, and should be loaded locally instead:
  ** https://webrtc.github.io/adapter/adapter-latest.js
  ** https://dpdb.webvr.rocks/dpdb.json
  ** https://jeromeetienne.github.io/AR.js/data/data/camera_para.dat
  ** https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/pattern-files/pattern-hiro.patt
- No DPDB device match
- AR.js needs a way to console.log when it gets a Hiro hit, so we can determine whether that event is coming through to Cordova
- iosrtc: does it send video frames?
- Camera should fill whole screen
