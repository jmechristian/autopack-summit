export const sendConfirmationEmail = async (name, email) => {
  fetch('https://www.autopacksummit.com/api/send-ticket-confirmation-email', {
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
