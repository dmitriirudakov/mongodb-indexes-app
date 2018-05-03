'use strict';

class CrudController {
	/**
	 * Returns a specific item by id from a collection
	 * @param {string} id 
	 * @returns {Promise} Result of execution
	 */
	/* eslint-disable-next-line no-unused-vars */
	get(id) {
		throw new Error('You have to implement the method');
	}
	/**
	 * Returns all items of a collection
	 * @returns {Promise} Result of execution
	 */
	getAll() {
		throw new Error('You have to implement the method');
	}
	/**
	 * Updates a specific item by id in a collection
	 * @param {string} id 
	 * @param {Object} body
	 * @returns {Promise} Result of execution
	 */
	/* eslint-disable-next-line no-unused-vars */
	update(id, body) {
		throw new Error('You have to implement the method');
	}
	/**
	 * Creates an item of a collection
	 * @param {Object} body
	 * @returns {Promise} Result of execution
	 */
	/* eslint-disable-next-line no-unused-vars */
	create(body) {
		throw new Error('You have to implement the method');
	}
	/**
	 * Deletes an item from a collection by id
	 * @param {string} id 
	 * @returns {Promise} Result of execution
	 */
	/* eslint-disable-next-line no-unused-vars */
	delete(id) {
		throw new Error('You have to implement the method');
	}
}

module.exports = CrudController;