import {Router} from '@vaadin/router';
import "./app-body-articles"
import "./app-body-destinations"
import "./destination-page"

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/', component: 'app-body-articles'},
  {path: '/destinations/:id', component: 'destination-page'},
  {path: '/destinations', component: 'main-destinations'}
]);

