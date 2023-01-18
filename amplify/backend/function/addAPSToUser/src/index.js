const { default: fetch, Request } = require('node-fetch');

const GRAPHQL_ENDPOINT =
  'https://c6pkoby5rbgtxcum5slz7hgem4.appsync-api.us-east-1.amazonaws.com/graphql';
const GRAPHQL_API_KEY = 'da2-e5j64foa3jay5kmhsj763maqla';

const query = /* GraphQL */ `
  mutation CreateAPSUser($input: CreateAPSUserInput!) {
    createAPSUser(input: $input) {
      id
      aPSId
      userId
    }
  }
`;

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const variables = {
    input: {
      aPSId: '76fe4980-a8d8-485c-9747-93b20cb08bfd',
      userId: '7c5a69a0-c5e1-4475-9141-56e8200dd7e0',
    },
  };

  // /** @type {import('node-fetch').RequestInit} */
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
    },
    body: JSON.stringify({ query, variables }),
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 400;
    body = {
      errors: [
        {
          status: response.status,
          message: error.message,
          stack: error.stack,
        },
      ],
    };
  }

  return {
    statusCode,
    body: JSON.stringify(body),
  };
};
