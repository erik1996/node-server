import mongoose from 'mongoose';

// Connect to MongoDB
export const connectDb = () => {
	// mongodb://mongo:27017/node-api
	// mongodb://root:rootpassword@localhost:27017
	return mongoose.connect("mongodb://localhost:27017", {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
};
