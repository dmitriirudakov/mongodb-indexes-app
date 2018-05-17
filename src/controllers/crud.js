'use strict';

class CrudController {

	/**
	 * Returns a specific model for CRUD
	 * @returns {Object} Specific model
	 */
	getModel() {
		throw new Error('You have to implement the method');
	}

	/**
	 * Returns a specific item by id from a collection
	 * @param {string} id 
	 * @param {Object} query 
	 * @returns {Promise} Result of execution
	 */
	get(id, query) {
		const Model = this.getModel()
		let populate = [];

		if (typeof query === 'object' && query.populate) {
			if (typeof query.populate.split === 'function') {
				populate = query.populate.split(',');
			}
			delete query.populate;
		}

		return new Promise((resolve, reject) => {
			const request = Model.findById(id);
			populate.forEach(key => {
				request.populate(key);
			})
			request.exec((error, item) => {
					if (error) {
						console.log(error);
						reject(error);
					} else {
						console.log(item);
						resolve(item);
					}
				}
			);
		})
	}
	/**
	 * Returns all items of a collection
	 * @param {Object} query
	 * @returns {Promise} Result of execution
	 */
	getAll(query) {
		const Model = this.getModel()

		// create regexp params to be able to find by regexp
		const regexpParams = {};
		let populate = [];

		if (typeof query === 'object') {
			if (query.populate) {
				if (typeof query.populate.split === 'function') {
					populate = query.populate.split(',');
				}
				delete query.populate;
			}

			Object.keys(query).forEach(key => {
				regexpParams[key] = new RegExp(query[key]);
			})
		}

		return new Promise((resolve, reject) => {
			const request = Model.find(regexpParams);
			populate.forEach(key => {
				request.populate(key);
			})
			request.exec(function(error, docs) {
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
	/**
	 * Updates a specific item by id in a collection
	 * @param {string} id 
	 * @param {Object} body
	 * @returns {Promise} Result of execution
	 */
	update(id, body) {
		const Model = this.getModel()

		return new Promise((resolve, reject) => {
			Model.findByIdAndUpdate( id, body,
				// an option that asks mongoose to return the updated version 
				// of the document instead of the pre-updated one.
				{ new: true },
			
				(error, item) => {
					if (error) {
						console.log(error);
						reject(error);
					} else {
						console.log(item);
						resolve(item);
					}
				}
			)
		})
	}
	/**
	 * Creates an item of a collection
	 * @param {Object} body
	 * @returns {Promise} Result of execution
	 */
	create(body) {
		const Model = this.getModel()
		const doc = new Schema(body);

		console.log(body);

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
	/**
	 * Deletes an item from a collection by id
	 * @param {string} id 
	 * @returns {Promise} Result of execution
	 */
	delete(id) {
		const Model = this.getModel()

		return new Promise((resolve, reject) => {
			Model.findByIdAndRemove(id, (error, item) => {
					if (error) {
						console.log(error);
						reject(error);
					} else {
						console.log(item);
						resolve(item);
					}
				}
			)
		})
	}
}

module.exports = CrudController;