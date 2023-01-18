/* Amplify Params - DO NOT EDIT
	API_PACKBRAIN_GRAPHQLAPIENDPOINTOUTPUT
	API_PACKBRAIN_GRAPHQLAPIIDOUTPUT
	API_PACKBRAIN_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const fetch = require('node-fetch');
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const mutation = /* GraphQL */ `
    mutation MyMutation {
      createUser(
        input: {
          company: "jme"
          cell: "5122893696"
          email: "jme@email.com"
          name: "JMEChristian"
          title: "Web Dev"
        }
      ) {
        id
        email
        name
        company
        title
        apss {
          items {
            aPS {
              year
            }
          }
        }
      }
    }
  `;

  const query = /* GraphQL */ `
    query MyQuery {
      usersByEmail(email: "jme@gmail.com") {
        items {
          id
          name
          email
        }
      }
    }
  `;

  const variables = {
    input: {
      name: 'Hello, Todo!',
    },
  };

  const options = {
    method: 'POST',
    headers: {
      'x-api-key': 'da2-e5j64foa3jay5kmhsj763maqla',
    },
    body: JSON.stringify({ query, variables }),
  };

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(
      'https://c6pkoby5rbgtxcum5slz7hgem4.appsync-api.us-east-1.amazonaws.com/graphql',
      options
    );
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
