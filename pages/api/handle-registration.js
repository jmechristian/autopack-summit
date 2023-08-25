import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { usersByEmail } from '../../src/graphql/queries';
import { createUser } from '../../src/graphql/mutations';
import awsExports from '../../src/aws-exports';
Amplify.configure(awsExports);

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

export default async function handler(req, res) {
  const { email, name, company, title, phone } = req.query;

  try {
    const isUser = await API.graphql({
      query: usersByEmail,
      variables: { email: email },
    });

    if (isUser.data.usersByEmail.items.length != 0) {
      //
      try {
        fetch(
          `https://autopacksummit.com/api/send-welcome-email?email=${email}&name=${name}`,
          options
        );
      } catch (err) {
        console.log(err);
      }
      return res.status(200).json({
        message: `Welcome Email sent to ${email}`,
      });
    } else {
      await API.graphql({
        query: createUser,
        variables: {
          input: {
            email: email,
            name: name,
            company: company,
            title: title,
            cell: phone,
            source: 'APS',
          },
        },
      }).then((response) => {
        try {
          fetch(
            `http://localhost:3000/api/send-welcome-email?email=${response.data.createUser.email}&name=${response.data.createUser.name}`,
            options
          );
        } catch (err) {
          console.log(err);
        }
        return res.status(200).json({
          message: `${email} sent`,
        });
      });
      return res.status(200).json({
        message: `User ${email} created`,
      });
    }
  } catch (err) {
    return res.status(200).json({
      message: 'Something Broke' + JSON.stringify(err),
    });
  }
}
