export const sendSponsorForm = (name, title, company, email, phone) => {
  // e.preventDefault();

  fetch(
    'https://4mwprd7rph.execute-api.us-east-1.amazonaws.com/default/sendSponsorForm-staging',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        title: title,
        company: company,
        email: email,
        phone: phone,
      }),
    }
  );
};
