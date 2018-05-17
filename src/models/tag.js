import mongoose, { Schema } from 'mongoose';

import { MODEL_NAMES } from '../constants';

const schema = new Schema({
	author: { type: Schema.Types.ObjectId, required: true, ref: MODEL_NAMES.USERS },
	name: { type: String, required: true },
	creationDate: { type: Number, default: Date.now },
	isPublished: { type: Boolean, default: false }
});

schema.index({ published: 1, name: 1 });

export default mongoose.model(MODEL_NAMES.TAGS, schema);
