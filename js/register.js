// Set up my service worker

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
    scope: ''
  })
  .then(reg => {
    console.log("Service Worker Registered succesful");
  })
  .catch(error => {
    console.log("Service Worker Registration Failed with " + error);
  });
}
