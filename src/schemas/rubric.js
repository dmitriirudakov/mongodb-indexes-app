import mongoose, { Schema } from 'mongoose';

import { SCHEMA_NAMES } from '../constants';

const schema = new Schema({
	authorId: { type: Schema.Types.ObjectId, required: true },
	name: { type: String, required: true },
	creationDate: { type: Number, default: Date.now },
	isPublished: { type: Boolean, default: false }
});

export default mongoose.model(SCHEMA_NAMES.RUBRICS, schema);
