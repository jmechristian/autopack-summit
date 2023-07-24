import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createTourist } from '../../../src/graphql/mutations';
import awsExports from '../../../src/aws-exports';
Amplify.configure(awsExports);

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

export default async function handler(req, res) {
  const { fullName, email, phone, tour } = req.query;

  try {
    const tourist = await API.graphql({
      query: createTourist,
      variables: {
        input: {
          name: fullName,
          email: email,
          phone: phone,
          tour: tour,
        },
      },
    });
    res.status(200).json({ tourist });
  } catch (error) {
    res.status(410).json({ message: error });
  }
}
