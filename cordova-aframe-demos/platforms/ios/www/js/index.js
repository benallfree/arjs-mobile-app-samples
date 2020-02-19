document.addEventListener("deviceready", function() {
  console.log("Cordova is ready.");
  if (cordova.platformId === "ios") {
    document.write(document.getElementById("aframe").innerHTML);
  }
});
