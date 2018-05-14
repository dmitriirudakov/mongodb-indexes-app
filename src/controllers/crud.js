'use strict';

import { Schema } from 'mongoose';

class CrudController {

	/**
	 * Returns a specific schema for CRUD
	 * @returns {Schema} Specific schema 
	 */
	getSchema() {
		throw new Error('You have to implement the method');
	}

	/**
	 * Returns a specific item by id from a collection
	 * @param {string} id 
	 * @returns {Promise} Result of execution
	 */
	get(id) {
		const Schema = this.getSchema();

		return new Promise((resolve, reject) => {
			Schema.findById(id, (error, item) => {
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
	 * Returns all items of a collection
	 * @param {Object} params
	 * @returns {Promise} Result of execution
	 */
	getAll(params) {
		const Schema = this.getSchema(params);

		// create regexp params to be able to find by regexp
		const regexpParams = {};

		if (typeof params === 'object') {
			Object.keys(params).forEach(key => {
				regexpParams[key] = new RegExp(params[key]);
			})
		}

		return new Promise((resolve, reject) => {
			Schema.find(regexpParams, function(error, docs) {
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
		const Schema = this.getSchema();

		return new Promise((resolve, reject) => {
			Schema.findByIdAndUpdate( id, body,
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
		const Schema = this.getSchema();
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
		const Schema = this.getSchema();

		return new Promise((resolve, reject) => {
			Schema.findByIdAndRemove(id, (error, item) => {
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