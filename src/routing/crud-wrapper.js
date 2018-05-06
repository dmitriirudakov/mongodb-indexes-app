/**
 * Creates mapping between router and controller methods
 * @param {*} router 
 * @param {CrudController} controller 
 */
module.exports.wrap = (router, controller) => {
	router.get('/', function(req, res) {
		controller.getAll()
			.then(data => res.send(data));
	});
	
	router.get('/:id', function(req, res) {
		controller.get(req.params.id)
			.then(data => res.send(data));
	});
	
	router.put('/', function(req, res) {
		controller.create(req.body)
			.then(data => res.send(data));
	});

	
	router.post('/:id', function(req, res) {
		controller.update(req.params.id, req.body)
			.then(data => res.send(data));
	});
	
	router.delete('/:id', function(req, res) {
		controller.delete(req.params.id)
			.then(data => res.send(data));
	});
}