import mongoose, { Schema } from 'mongoose';

import { SCHEMA_NAMES } from '../constants';

const schema = new Schema({
	login: { type: String, required: true },
	password: { type: String, required: true },
	firstName: String,
	lastName: String,
	email: String,
	registerDate: { type: Number, default: Date.now() }
});

export default mongoose.model(SCHEMA_NAMES.USERS, schema);
