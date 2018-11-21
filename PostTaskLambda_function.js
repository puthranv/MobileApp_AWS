const AWS = require('aws-sdk');
const uuid = require('uuid');
const dynamodb = new AWS.DynamoDB({ region: 'us-east-1', apiVersion: '2012-08-10' });

exports.handler = (event, context, callback) => {
  var params = {
    Item: {
      "id": {
        S: "" + uuid.v1()
      },
      "userId": {
        S: event.userId
      },
      "category": {
        S: event.category
      },
      "description": {
        S: event.description
      }
    },
    TableName: "task"
  };

  dynamodb.putItem(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
      callback(err);
    }
    else {
      console.log(data);
      callback(null, data);
    }
  });
};
