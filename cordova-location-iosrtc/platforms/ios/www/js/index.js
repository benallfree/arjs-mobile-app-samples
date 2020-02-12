var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener(
            "deviceready",
            this.onDeviceReady.bind(this),
            false
        );
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent("deviceready");
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector(".listening");
        var receivedElement = parentElement.querySelector(".received");

        listeningElement.setAttribute("style", "display:none;");
        receivedElement.setAttribute("style", "display:block;");

        console.log("Received Event: " + id);
    }
};

app.initialize();

document.addEventListener("deviceready", function () {
    // Just for iOS devices.
    if (cordova.platformId === "ios") {
        cordova.plugins.iosrtc.registerGlobals();

        // load adapter.js
        var adapterVersion = "latest";
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
            "https://webrtc.github.io/adapter/adapter-" + adapterVersion + ".js";
        script.async = false;
        document.getElementsByTagName("head")[0].appendChild(script);
        
        /*document.body.innerHTML = "";
        
        document.body.innerHTML = document.getElementById("aframe").innerHTML;*/
        document.write(document.getElementById("aframe").innerHTML);
        
        setTimeout(function(){ 
            
            var places = [
                {
                    name: "Your place name",
                    location: {
                        lat: 40.473288, // change here latitude if using static data
                        lng: -3.453367, // change here longitude if using static data
                    }
                },
            ];
            
            var scene = document.querySelector('a-scene');

            for(var i=0; i<places.length; i++) {
                var place = places[i];
                var latitude = place.location.lat;
                var longitude = place.location.lng;

                // add place name
                var text = document.createElement('a-link');
                //text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                text.setAttribute('gps-entity-place', "latitude: " + latitude + ";  longitude: " + longitude + ";");
                text.setAttribute('title', place.name);
                text.setAttribute('href', 'http://www.example.com/');
                text.setAttribute('scale', '15 15 15');

                text.addEventListener('loaded', function () {
                    window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                });

                scene.appendChild(text);
            }
        }, 3000);
        
    }
});