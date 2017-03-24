var Arrow = require('arrow');

var AdiOverviewAPI = Arrow.API.extend({
	group: 'adi',
	path: '/api/adi/overview',
	method: 'GET',
	description: 'this is an api that shows how to implement an API',
	model: 'overviewStatus',
	after: 'mobile_json',
	parameters: {
	},
	action: function (req, resp, next) {
		// invoke the model find method passing the id parameter
		// stream the result back as response
		resp.stream(req.model.find, req.params.id, next);
	}
});

module.exports = AdiOverviewAPI;
