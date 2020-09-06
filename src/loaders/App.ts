import Express from './Express';

class App {
  public async loadServer(): Promise<void> {
    Express.init();
  }
}

export default App;
