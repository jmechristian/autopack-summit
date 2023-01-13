export const sendEmail = (e, endPoint, name, title, company) => {
  e.preventDefault();

  fetch(
    `https://hcvy99mrxa.execute-api.us-east-1.amazonaws.com/staging${endPoint}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: 'jamie@packagingschool.com',
        name: name,
        company: company,
        title: title,
      }),
    }
  );
};
