cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-opentokjs/src/browser/opentok.js",
        "id": "cordova-plugin-opentokjs.OpenTokClient",
        "clobbers": [
            "OT"
        ]
    },
    {
        "file": "plugins/com.eface2face.iosrtc/dist/cordova-plugin-iosrtc.js",
        "id": "com.eface2face.iosrtc.Plugin",
        "clobbers": [
            "cordova.plugins.iosrtc"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "cordova-plugin-device": "1.0.1",
    "cordova-plugin-opentokjs": "0.1.1",
    "cordova-plugin-crosswalk-webview": "1.2.0",
    "com.eface2face.iosrtc": "1.2.8"
}
// BOTTOM OF METADATA
});