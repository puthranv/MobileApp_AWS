const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ region: 'us-east-1', apiVersion: '2012-08-10' });

exports.handler = (event, context, callback) => {
    const userId = event.userId;
    var params = {
        ExpressionAttributeValues: {
            ":userId": {
                S: userId
            }
        },
        FilterExpression: "userId = :userId",
        TableName: "task"
    };

    dynamodb.scan(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(err);
        }
        else {
            const item = data.Items.map((field) => {
                return {
                    id: field.id.S, userId: field.userId.S,
                    category: field.category.S, description: field.description.S

                }
            })
            callback(null, item);
        }
    });
};
