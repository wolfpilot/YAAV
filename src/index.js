import App from './static/js/App';

const app = new App();

const isReady = () => {
  return new Promise(resolve => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      document.addEventListener('DOMContentLoaded', resolve);
    }
  });
};

isReady().then(() => app.init());
