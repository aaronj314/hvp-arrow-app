var Arrow = require('arrow');
var Model = Arrow.createModel('lowRate', {
    "fields": {
        "stepName": {
            "type": "string",
            "default": "key for this model",
            "required": true
        },
        "stepType": {
            "type": "string"
        },
        "throughput": {
            "type": "number"
        },
        "transitTime": {
            "type": "date"
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
    "singular": "lowrate",
    "plural": "lowrates"
});
module.exports = Model;