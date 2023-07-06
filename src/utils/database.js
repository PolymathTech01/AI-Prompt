import mongoose from 'mongoose';

let isConnected = false; // to track connection status

export const conecctToDB = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('MongoDB is connected');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'ai_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('MongoDB is connected');
  } catch (error) {
    console.log(error.message);
  }
};
