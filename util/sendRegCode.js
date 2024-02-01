export const sendRegCode = async (name, title, company, email, phone) => {
  const resp = await fetch(
    'https://4mwprd7rph.execute-api.us-east-1.amazonaws.com/default/sendRegCode-staging',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        title,
        company,
        email,
        phone,
      }),
    }
  );
};
