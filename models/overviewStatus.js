var Arrow = require('arrow');
var Model = Arrow.createModel('overviewStatus', {
    "fields": {
        "aboveProfileStatus": {
            "type": "string",
            "required": true
        },
        "cutoffSuccessRate": {
            "type": "number"
        },
        "cutoffSuccessStatus": {
            "type": "string"
        },
        "deadlineStatus": {
            "type": "string"
        },
        "lostStuckStatus": {
            "type": "string"
        },
        "lowRateStatus": {
            "type": "string"
        },
        "missingWorkStatus": {
            "type": "string"
        },
        "nonSTPTransStatus": {
            "type": "string"
        },
        "nonSTPTransTime": {
            "type": "date"
        },
        "numAcquired": {
            "type": "number"
        },
        "numInProcess": {
            "type": "number"
        },
        "paymentFailureCount": {
            "type": "number"
        },
        "paymentFailureStatus": {
            "type": "string"
        },
        "pilingUpStatus": {
            "type": "string"
        },
        "stpRate": {
            "type": "number"
        },
        "stpRateStatus": {
            "type": "string"
        },
        "lastupdated": {
            "type": "date"
        },
        "json": {
            "type": "object"
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
    "singular": "overviewstatus",
    "plural": "overviewstatuses",
    "description": "Overview Status"
});
module.exports = Model;