export const sendTicket = async (name, title, company, email, phone) => {
  console.log(name, title, company, email, phone);
  fetch('https://www.autopacksummit.com/api/handle-ticket-purchase', {
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
  });
};
