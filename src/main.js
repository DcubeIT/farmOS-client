import 'farmOS-map/src/main';
import app from '@/client/app';
import weather from '@/vue-plugins/weather';

app('#app', [
  weather,
]);

// Check that service workers are registered (for production environment only)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
