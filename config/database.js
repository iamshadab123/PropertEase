// import mongoose from 'mongoose';

// let connected = false;

// const connectDB = async () => {
//   mongoose.set('strictQuery', true);

//   // If the database is already connected, don't connect again
//   if (connected) {
//     console.log('MongoDB is already connected...');
//     return;
//   }

//   // Connect to MongoDB
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     connected = true;
//     console.log('MongoDB connected...');
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;

