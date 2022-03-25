import Controller from '../controllers/controller.js';

function getRouteInfo() {
  const hash = location.hash ? location.hash.slice(1) : '';
  // const [name, id] = hash.split('/');

  return hash;
}

function handleHash() {
  const hash = getRouteInfo();

  if (hash) {
    const routeName = hash + 'Route';
    console.log(routeName);
    Controller[routeName]();
  } else Controller.Route();
}

export default {
  init() {
    addEventListener('hashchange', handleHash);
    handleHash();
  },
};
