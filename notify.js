const notifier = require('node-notifier');

// Configura le notifiche (ad esempio, invia una notifica al team)
notifier.notify({
  title: 'Deployment Status',
  message: 'The deployment was successful!',
  // altre configurazioni specifiche per le notifiche
});