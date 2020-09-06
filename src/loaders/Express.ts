import express from 'express';
/*
  Class responsible for prepare express server. Load here any additional configurations, middlewares, handlers, routes.
*/
class Express {
  private server: express.Application;

  constructor() {
    this.server = express();
  }

  public init(): void {
    this.server
      .listen(3000, () => {
        console.log('server started!');
      })
      .on('error', (err: Error) => {
        console.log(err);
        process.exit(1);
      });
  }
}

export default new Express();
