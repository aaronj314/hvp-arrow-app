var Arrow = require('arrow');
var Model = Arrow.createModel('currentActivity', {
    "fields": {
        "numberAcquired": {
            "type": "string"
        },
        "numberInProcess": {
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
    "singular": "currentactivity",
    "plural": "currentactivities",
    "description": "Current Activity"
});
module.exports = Model;