import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createAPSSpeaker } from '../../../src/graphql/mutations';
import awsExports from '../../../src/aws-exports';
Amplify.configure(awsExports);

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

export default async function handler(req, res) {
  const { fields } = req.body;

  try {
    const user = await API.graphql(
      graphqlOperation(createAPSSpeaker, { input: fields })
    );
    res.status(200).json({ user });
  } catch (error) {
    res.status(410).json({ message: error });
  }
}
