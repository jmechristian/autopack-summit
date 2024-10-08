export const sendEmail = async (
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
  clemsonTour,
  bmwTour
) => {
  const res = fetch(
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
        clemsonTour,
        bmwTour,
      }),
    }
  );

  return (await res).status;
};
