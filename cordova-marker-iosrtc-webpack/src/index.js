document.addEventListener("deviceready", function() {
  // Just for iOS devices.
  if (cordova.platformId === "ios") {
    cordova.plugins.iosrtc.registerGlobals();

    // load adapter.js
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "./js/adapter-latest.js";
    script.async = false;
    document.getElementsByTagName("head")[0].appendChild(script);
    document.write(document.getElementById("aframe").innerHTML);
  }
});
