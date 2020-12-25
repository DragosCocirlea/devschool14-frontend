import {Router} from '@vaadin/router';
import "./app-main"
import "./main-destinations"
import "./destination-page"

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/', component: 'app-main'},
  {path: '/destinations/:id', component: 'destination-page'},
  {path: '/destinations', component: 'main-destinations'}
]);

