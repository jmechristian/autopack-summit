export const sendTicket = async (name, title, company, email, phone) => {
  console.log(name, title, company, email, phone);
  fetch('http://localhost:3001/api/handle-ticket-purchase', {
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
