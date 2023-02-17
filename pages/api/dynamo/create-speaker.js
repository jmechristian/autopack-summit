import { API, graphqlOperation } from 'aws-amplify';
import { createAPSSpeaker } from '../../../src/graphql/mutations';

const GRAPHQL_ENDPOINT =
  'https://c6pkoby5rbgtxcum5slz7hgem4.appsync-api.us-east-1.amazonaws.com/graphql';
const GRAPHQL_API_KEY = 'da2-e5j64foa3jay5kmhsj763maqla';

export default async function handler(req, res) {
  const { fields } = req.body;

  try {
    const user = await API.graphql(
      graphqlOperation(createAPSSpeaker, { input: fields })
    );
    res.status(200).json({ user });
  } catch (err) {
    res.status(410).json({ message: err });
  }
}
