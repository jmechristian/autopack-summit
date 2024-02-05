export const sendConfirmationEmail = async (name, email) => {
  const res = fetch(
    'http://localhost:3000/api/send-ticket-confirmation-email',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }
  );

  return (await res).status;
};
