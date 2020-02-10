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
        document.write(document.getElementById("aframe").innerHTML);
    }
});