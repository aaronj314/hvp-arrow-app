var Arrow = require('arrow');
var Model = Arrow.createModel('pilingUP', {
    "fields": {
        "stepName": {
            "type": "string",
            "description": "Key for this model",
            "required": true
        },
        "stepType": {
            "type": "string"
        },
        "queueSize": {
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
    "singular": "pilingup",
    "plural": "pilingups"
});
module.exports = Model;