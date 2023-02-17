const { default: fetch, Request } = import('node-fetch');

const GRAPHQL_ENDPOINT =
  'https://c6pkoby5rbgtxcum5slz7hgem4.appsync-api.us-east-1.amazonaws.com/graphql';
const GRAPHQL_API_KEY = 'da2-e5j64foa3jay5kmhsj763maqla';

// export default async (req, res) => {
//   const { fields } = req.body;
//   console.log(fields);
const query = /* GraphQL */ `
  mutation CREATE_APSSPEAKER($input: CreateAPSSpeaker!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      createdAt
      company
      email
    }
  }
`;

//   const variables = {
//     input: {
//       firstName: fields.firstName,
//       lastName: fields.lastName,
//       email: fields.email,
//       company: fields.company,
//       phone: fields.phone,
//       title: fields.title,
//       bio: fields.bio,
//       headshot: 'https://apsmedia.s3.amazonaws.com/images/Mo8.jpeg',
//     },
//   };

//   const options = {
//     method: 'POST',
//     headers: {
//       'x-api-key': GRAPHQL_API_KEY,
//     },
//     body: JSON.stringify({ query, variables }),
//   };

//   //   const request = new Request(GRAPHQL_ENDPOINT, options);

//   let statusCode = 200;
//   let body;
//   let response;

//   try {
//     response = await fetch(
//       'https://c6pkoby5rbgtxcum5slz7hgem4.appsync-api.us-east-1.amazonaws.com/graphql',
//       {
//         method: 'post',
//         body: JSON.stringify({ query, variables }),
//         headers: {
//           'Content-Type': 'application/json',
//           'x-api-key': GRAPHQL_API_KEY,
//         },
//       }
//     );
//     body = await response.json();
//     if (body.errors) statusCode = 400;
//   } catch (error) {
//     statusCode = 400;
//     body = {
//       errors: [
//         {
//           status: response.status,
//           message: error.message,
//           stack: error.stack,
//         },
//       ],
//     };
//   }

//   return {
//     statusCode,
//     body: JSON.stringify(body),
//   };
// };

export default function handler(req, res) {
  const { fields } = req.body;
  res.status(200).json({ name: fields.firstName });
}
