const { default: fetch, Request } = require('node-fetch');

const GRAPHQL_ENDPOINT =
  'https://c6pkoby5rbgtxcum5slz7hgem4.appsync-api.us-east-1.amazonaws.com/graphql';
const GRAPHQL_API_KEY = 'da2-xwgvfy5tfjdozdwqq7ecamil2y';

const query = /* GraphQL */ `
  mutation CREATE_USER($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      createdAt
      company
      email
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
      name: 'Hello, Todo!',
      email: 'email',
      company: 'company',
      cell: 'phone',
      title: 'title',
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
