document.addEventListener("deviceready", function() {
  console.log("Cordova is ready.");

  document.write(document.getElementById("aframe").innerHTML);
});