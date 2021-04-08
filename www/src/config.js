// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "71q7b28dblpbskir46nq6fpbj4",     // CognitoClientID
  "api_base_url": "https://tmb0b6hyad.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-18991.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d284fs1hjlkx9f.amplifyapp.com"                                      // AmplifyURL
};

export default config;
