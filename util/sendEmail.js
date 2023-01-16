export const sendEmail = (e, endPoint, name, title, company, email, phone) => {
  e.preventDefault();

  fetch(
    'https://g1v98zrm4f.execute-api.us-east-1.amazonaws.com/sendEmailtoLambda',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: 'jamie@packagingschool.com',
        name: name,
        title: title,
        company: company,
        email: email,
        phone: phone,
      }),
    }
  );
};
