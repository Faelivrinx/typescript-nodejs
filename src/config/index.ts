import dotenv from 'dotenv';
const envFound = dotenv.config();
console.log('config load');
if (!envFound) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: process.env.PORT || 3000,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
};
