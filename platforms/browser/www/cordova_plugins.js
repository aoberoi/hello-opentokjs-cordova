cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-opentokjs/src/browser/opentok.js",
        "id": "cordova-plugin-opentokjs.OpenTokClient",
        "clobbers": [
            "OT"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "cordova-plugin-opentokjs": "0.1.0",
    "cordova-plugin-crosswalk-webview": "1.2.0"
}
// BOTTOM OF METADATA
});