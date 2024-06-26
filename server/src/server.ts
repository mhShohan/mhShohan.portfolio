import { Server, createServer } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';

let server: Server = createServer(app);

async function main() {
  try {
    await mongoose.connect(config.CLOUD_MONGO_URI as string);

    server = server.listen(config.PORT, () => {
      console.log(`Server is listening on port ${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on('unhandledRejection', (err) => {
  console.log(`😈 unhandledRejection is detected , shutting down ...`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
