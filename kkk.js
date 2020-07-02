const AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (request, response) {
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_HdYJb7Znp",
        Limit: 10
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    response.send({ "message": "Successfully executed" });
}