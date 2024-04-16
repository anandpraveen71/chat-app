import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1/chat-app');
//const db = mongoose.connection;
const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
