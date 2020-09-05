import express from 'express';

async function startServer() {
  const app = express();
  app
    .listen(3000, () => {
      console.log('Server Started!');
    })
    .on('error', (err: Error) => {
      if (err) {
        console.log('Failed to start server');
        process.exit(1);
      }
    });
}

startServer();
