# Hello OpenTokJS

This is an example application which shows the use of the `cordova-plugin-opentokjs` plugin for
Cordova.

## Setup

You will need an OpenTok API Key, Session ID, and Token. If you do not already have these, you can
get these values from the [TokBox Dashboard](https://dashboard.tokbox.com).

1. Clone the repository.

2. Download dependencies `cordova prepare`.

3. Rename the `www/js/config.js.sample` file to `www/js/config.js`.

4. Insert your own values for your OpenTok API Key, Session ID, and a Token into `www/js/config.js`.

5. Build: `$ cordova build`.

## Running the application

You can run the application using the Cordova CLI. Examples:

*  `cordova emulate android` -> Runs project within Android emulator. Only recommended for AVDs
   created with x86 emulation (Intel HAXM). Also, be aware that most AVDs are setup with virtualized
   camera's and microphones by default. This can be configured when creating a new AVD.

*  `cordova run android --device` -> Runs project on an Android device.

*  `cordova run browser` -> Runs project in a new browser instance.

*  `cordova run ios --device` -> Runs project on an iOS device. Make sure you have `ios-deploy`
   installed.

*  `cordova run ios --simulator` -> Runs project on the iOS Simulator. Make sure you have `ios-sim`
   installed. Also, be aware that the iOS Simulator does not have access to your machine's camera
   or microphone.

