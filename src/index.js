import Visualizer from '../src/static/js/Visualizer';

const vis = new Visualizer;

const isReady = () => {
  return new Promise(resolve => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      document.addEventListener('DOMContentLoaded', resolve);
    }
  });
};

isReady().then(() => vis.init());
