import mongoose, { Schema } from 'mongoose';

import { MODEL_NAMES } from '../constants';

const schema = new Schema({
	login: { type: String, required: true },
	password: { type: String, required: true },
	firstName: String,
	lastName: String,
	email: String,
	registerDate: { type: Number, default: Date.now }
});

schema.index({ login: 1 });

export default mongoose.model(MODEL_NAMES.USERS, schema);
