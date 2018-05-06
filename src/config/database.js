import mongoose from 'mongoose';

import { DB_NAME } from '../constants';
import TagSchema from '../schemas/tag';

const CONNECTION_STRING = `mongodb://localhost:27017/${DB_NAME}`;

class Datebase {
	
	connect(connectionString = CONNECTION_STRING) {
		console.log('connect');
		mongoose.connect(connectionString)
	}

	disconnect() {
		console.log('disconnect');
		const connection = mongoose.connection;
		connection.close();
	}
}

const instance = new Datebase();

export default instance;