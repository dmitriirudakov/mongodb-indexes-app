'use strict';

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
		return Promise.resolve(body);
	}
	static delete(id) {
		return Promise.resolve(id);
	}
}

module.exports = Controller;
