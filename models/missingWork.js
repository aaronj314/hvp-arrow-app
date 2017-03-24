var Arrow = require('arrow');
var Model = Arrow.createModel('missingWork', {
    "fields": {
        "customerName": {
            "type": "string",
            "description": "key for this model",
            "required": true
        },
        "activityToday": {
            "type": "string"
        },
        "status": {
            "type": "string"
        },
        "lastupdated": {
            "type": "date"
        }
    },
    "connector": "appc.arrowdb",
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ],
    "singular": "missingwork",
    "plural": "missingworks"
});
module.exports = Model;