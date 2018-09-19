const AWS = require('aws-sdk');

let support = new AWS.Support();

var params = {
    language: 'en'
  };
  support.describeTrustedAdvisorChecks(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });