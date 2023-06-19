export const sendSpeakerUpdate = ({ ...fields }) => {
  fetch('/api/send-speaker', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...fields,
    }),
  });
};
