const GRAPHQL_ENDPOINT =
  'https://c6pkoby5rbgtxcum5slz7hgem4.appsync-api.us-east-1.amazonaws.com/graphql';
const GRAPHQL_API_KEY = 'da2-e5j64foa3jay5kmhsj763maqla';

const query = /* GraphQL */ `
  mutation CREATE_APSSPEAKER($input: CreateAPSSpeakerInput!) {
    createAPSSpeaker(input: $input) {
      id
      name
      createdAt
      company
      email
    }
  }
`;

export default async (req, res) => {
  const { data } = req.body;

  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
    },
    body: JSON.stringify({ query, data }),
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  try {
    const response = await fetch(request);
    // body = await response.json();
    // if (body.errors) statusCode = 400;
    res.status(200).json({ response });
  } catch (error) {
    statusCode = 400;
    console.log(err);
    res.status(400).json({ message: err });
  }
};
