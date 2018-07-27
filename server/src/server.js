import Koa from 'koa';
import serverless from 'serverless-http';
import router from './routes';
import {
  accessLog,
} from './middlewares/access'

class Server {
  constructor() {
    this.app = new Koa();
    this.app.use(accessLog);
    this.app.use(router.routes())
  }

  listen(port) {
    const app = this.app;
    app.listen(port);

    console.log("Listening to prot", port);
  }

  serverless() {
   const app = this.app;

   return serverless(app);
  }
}

export default Server;