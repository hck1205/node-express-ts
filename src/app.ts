import express, { Application } from 'express';
import morgan from 'morgan';

// Routes
import IndexRoutes from './routes/index';
import PostRoutes from './routes/post';

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use('/posts', PostRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server on Port', this.app.get('port'));
  }
}
