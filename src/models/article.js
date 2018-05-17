import mongoose, { Schema } from 'mongoose';

import { MODEL_NAMES } from '../constants';

const schema = new Schema({
	author: { type: Schema.Types.ObjectId, required: true, ref: MODEL_NAMES.USERS },
	name: { type: String, required: true },
	creationDate: { type: Number, default: Date.now },
	content: String,
	rubrics: [{ type: Schema.Types.ObjectId, ref: MODEL_NAMES.RUBRICS }],
	tags: [{ type: Schema.Types.ObjectId, ref: MODEL_NAMES.TAGS }],
	link: String,
	location: {
		type: { type: String },
		coordinates: [Number], // [<long>, <lat>]
	}
});

schema.index({ author: 1 });
schema.index({ published: 1, name: 1 });
schema.index({ creationDate: 1 });
schema.index({ "location": "2dsphere" });

export default mongoose.model(MODEL_NAMES.ARTICLES, schema);
