'use strict';

import mongoose from 'mongoose';
import TagSchema from '../schemas/tag';
import CrudController from './crud';

/* eslint-disable no-unused-vars */
class Controller extends CrudController {
	static get(id) {
		return Promise.resolve(id);
	}
	static getAll() {
		return Promise.resolve([]);
	}
	static update(id, body) {
		return Promise.resolve(id);
	}
	static create(body) {
		const doc = new TagSchema({ body });
		// const doc = new TagSchema({
		// 	authorId: new mongoose.Types.ObjectId(),
		// 	name: 23,
		// 	isPublished: true
		// })

		return new Promise((resolve, reject) => {
			doc.save(function(error, docs) {
				if (error) {
					console.log(error);
					reject(error);
				} else {
					console.log(docs);
					resolve(docs);
				}
			});

		});
	}
	static delete(id) {
		return Promise.resolve(id);
	}
}

module.exports = Controller;
