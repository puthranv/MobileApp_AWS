//We will have to fill the values after aws Cognito Setup 
//Refer AWS Cognito Setup Video

var aws_cognito_identity_pool_id = ''; // Federated identity pool
//var aws_cognito_identity_pool_id ='';
var aws_cognito_region = '';
var aws_project_region = '';
var aws_user_pools = 'enable';
var aws_user_pools_id = '';
var aws_user_pools_web_client_id = '';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials(
    {
        IdentityPoolId: aws_cognito_identity_pool_id
    },
    {
        region: aws_cognito_region
    });
AWS.config.update({ customUserAgent: 'TaskApp' });
