//ID приложения	8110701 8110864
// хелперы для handlebars, "процедуры", используемые в html
// Handlebars.registerHelper('formatTime', (time) => {});

import View from './pages/view.js';
import Route from './route/route.js';
import Controller from './controllers/controller.js';

async function start() {
  console.log('started...');
  Route.init();
}
start();
