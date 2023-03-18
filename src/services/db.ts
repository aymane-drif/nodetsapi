import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

export const connectDB = async ()=> {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('🟢 MongoDb Connected');
}