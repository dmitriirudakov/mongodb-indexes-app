/**
 * Creates mapping between router and controller methods
 * @param {*} router 
 * @param {CrudController} controller 
 */
module.exports.wrap = (router, controller) => {
	router.get('/', function(req, res) {
		controller.getAll(req.query)
			.then(data => res.send(data))
			.catch(err => res.status(500).send(err));
	});
	
	router.get('/:id', function(req, res) {
		controller.get(req.params.id)
			.then(data => res.send(data))
			.catch(err => res.status(500).send(err));
	});
	
	router.put('/', function(req, res) {
		controller.create(req.body)
			.then(data => res.send(data))
			.catch(err => res.status(500).send(err));
	});
	
	router.post('/:id', function(req, res) {
		controller.update(req.params.id, req.body)
			.then(data => res.send(data))
			.catch(err => res.status(500).send(err));
	});
	
	router.delete('/:id', function(req, res) {
		controller.delete(req.params.id)
			.then(data => res.send(data))
			.catch(err => res.status(500).send(err));
	});
}