(function () {
  'use strict';

  document.addEventListener("deviceready", function() {
    console.log("Cordova is ready.");

    document.getElementById("aframe_root").innerHTML = document.getElementById(
      "aframe_init"
    ).innerHTML;
  });

}());
//# sourceMappingURL=index.js.map
