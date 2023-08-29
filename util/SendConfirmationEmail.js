export const sendConfirmationEmail = async (name, email) => {
  fetch('http://localhost:3001/api/send-ticket-confirmation-email', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });
};
