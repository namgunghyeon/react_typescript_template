import Router from 'koa-router';
import {
  getNetworks,
} from '../controllers/networks';

const router = new Router();

router.get('/networks', getNetworks);

export default router;