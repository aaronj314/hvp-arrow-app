var Arrow = require('arrow');

var mobile_json = Arrow.Block.extend({
	name: 'mobile_json',
	description: 'will log a message after the request',

	action: function (req, resp, next) {
		req.log.info("Post Example Block executed");
		next();
	}
});

module.exports = mobile_json;
