import Express from './Express';
import * as path from 'path';
import * as env from 'dotenv';
import Logger from './Logger';

class App {
  public async loadConfiguration(): Promise<void> {
    env.config({ path: path.join(__dirname, '../../.env') });
  }

  public async loadServer(): Promise<void> {
    Logger.info('App initializing started!');
    await Express.init();
    Logger.info('✌️ Express loaded');
  }
}

export default App;
