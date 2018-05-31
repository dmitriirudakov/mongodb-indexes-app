import mongoose from 'mongoose';

import { DB_NAME } from '../constants';

const DB_HOST = process.env.NODE_ENV === 'docker' ? 'database' : 'localhost';
const CONNECTION_STRING = `mongodb://${DB_HOST}:27017/${DB_NAME}`;

class Datebase {
	connectionString;

	connect(connectionString = CONNECTION_STRING) {
		this.connectionString = connectionString;
		return new Promise((resolve, reject) => {
			mongoose.connect(this.connectionString).then(() => {
				console.log(`Succesfully connected to: ${this.connectionString}`);
				this.logAvailableIndexes();
				resolve();
			}).catch(() => {
				console.log(`An error occured while connecting to: ${this.connectionString}`);
				reject();
			});
		})
	}

	disconnect() {
		const connection = mongoose.connection;
		return new Promise((resolve, reject) => {
			connection.close().then(() => {
				console.log(`Succesfully disconnected from: ${this.connectionString}`);
				resolve();
			}).catch(() => {
				console.log(`An error occured while disconnecting from: ${this.connectionString}`);
				reject();
			});
		})
	}

	logAvailableIndexes() {
		console.log('\n === Indexes in DB ===')
		const modelNames = mongoose.modelNames();
		modelNames.forEach(modelName => {
			const model = mongoose.model(modelName);
			console.log(modelName, ':\n', model.schema.indexes());
		})
		console.log('\n')
	}
}

const instance = new Datebase();

export default instance;