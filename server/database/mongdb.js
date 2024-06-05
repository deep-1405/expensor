import mongoose from "mongoose";

async function connect() {

	await mongoose.connect(
		`mongodb://himanshu:sPa2ncQR5yzTN1i8@ac-hv6ztaq-shard-00-00.kr0vwe6.mongodb.net:27017,ac-hv6ztaq-shard-00-01.kr0vwe6.mongodb.net:27017,ac-hv6ztaq-shard-00-02.kr0vwe6.mongodb.net:27017/askaro?ssl=true&replicaSet=atlas-eic1pq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
	);
	console.log("MongoDB connection is successful");
}

export default connect;
