var app = {

  // State
  config: undefined,
  session: undefined,
  publisher: undefined,
  subscriber: undefined,
  isSubscribing: false,

  // Application Constructor
  initialize: function() {
    this.config = cordova.require('config');
    this.bindEvents();
  },

  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    // Just for iOS devices.
    if (window.device.platform === 'iOS') {
      cordova.plugins.iosrtc.debug.enable('iosrtc*');
      cordova.plugins.iosrtc.registerGlobals();
      window.OT = cordova.require('cordova-plugin-opentokjs.OpenTokClient');
    }

    OT.setLogLevel(OT.DEBUG);
    app.initializePublisher();
    app.initializeSession();
  },

  initializePublisher: function() {
    app.publisher = OT.initPublisher('publisher');
  },

  initializeSession: function() {
    app.session = OT.initSession(app.config.apiKey, app.config.sessionId);
    app.session.on('streamCreated', app.onStreamCreated);
    app.session.on('streamDestroyed', app.onStreamDestroyed);
    app.session.connect(app.config.token, app.onSessionConnected);
  },

  onSessionConnected: function(event) {
    app.session.publish(app.publisher);
  },

  onStreamCreated: function(event) {
    if (!app.isSubscribing) {
      app.subscriber = app.session.subscribe(event.stream, 'subscriber');
      app.isSubscribing = true;
    }
  },

  onStreamDestroyed: function(event) {
    if (app.isSubscribing && event.stream.streamId === app.subscriber.stream.streamId) {
      app.session.unsubscribe(app.subscriber);
      app.isSubscribing = false;
      app.subscriber = undefined;
    }
  }
};

app.initialize();
