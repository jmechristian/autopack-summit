export const sendEmail = (
  e,
  name,
  title,
  company,
  email,
  phone,
  regCode,
  worksWith,
  speedNetworking,
  innovationWorkshop,
  plantTour
) => {
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
        name,
        title,
        company,
        email,
        phone,
        regCode,
        worksWith,
        speedNetworking,
        innovationWorkshop,
        plantTour,
      }),
    }
  );
};
