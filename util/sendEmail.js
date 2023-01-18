export const sendEmail = (e, endPoint, name, title, company, email, phone) => {
  e.preventDefault();

  fetch(
    'https://9i9gb4ccxe.execute-api.us-east-1.amazonaws.com/default/sendEmailFn-staging',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: 'jamie@packagingschool.com',
        name,
        title,
        company,
        email,
        phone,
      }),
    }
  );
};
