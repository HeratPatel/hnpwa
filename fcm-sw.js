importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: '1065550303539'
});

const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    var notificationTitle = 'Lit-Element';
    var notificationOptions = {
        body: 'Lit-Element is awesome',
        icon: '/src/images/manifest/icon-96x96.png'
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
// [END background_handler]
