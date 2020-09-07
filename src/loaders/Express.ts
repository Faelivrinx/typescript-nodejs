import express from 'express';
import Logger from './Logger';
import config from '../config';
import bodyParser from 'body-parser';
/*
  Class responsible for prepare express server. Load here any additional configurations, middlewares, handlers, routes.
*/
class Express {
  private server: express.Application;

  constructor() {
    this.server = express();
  }

  public init(): void {
    this.server.use(bodyParser.json());
    this.server.get('/status', (req, res) => {
      res.status(200).end();
    });
    this.server.head('/status', (req, res) => {
      res.status(200).end();
    });
    this.server
      .listen(config.port, () => {
        Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
      `);
      })
      .on('error', (err: Error) => {
        Logger.error(err);
        process.exit(1);
      });
  }
}

export default new Express();
