import { API, Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import {
  createAPSRegistrant,
  createAPSTicketRegistrant,
  updateAPSRegistrant,
  updateAPSTicketRegistrant,
} from '../src/graphql/mutations';
import {
  aPSRegistrantsByEmail,
  aPSTicketRegistrantsByEmail,
} from '../src/graphql/queries';

Amplify.configure({ ...awsExports, ssr: true });

export const getRegistrantByEmail = async (email) => {
  const reg = await API.graphql({
    query: aPSRegistrantsByEmail,
    variables: { email: email },
  });

  if (reg.data.aPSRegistrantsByEmail.items.length > 0) {
    return { registrant: reg.data.aPSRegistrantsByEmail.items };
  } else {
    return { error: 'Error Finding Registrant' };
  }
};

export const createAPSUserFromCodeRequest = async (
  name,
  title,
  company,
  email,
  phone
) => {
  const res = await API.graphql({
    query: createAPSRegistrant,
    variables: {
      input: {
        name,
        title,
        company,
        email,
        phone,
        codeRequested: true,
        codeSent: false,
        registrationReceived: false,
        welcomeEmailSent: false,
      },
    },
  });

  return res.data;
};

export const ApproveRegistrantCode = async (id) => {
  const updated = await API.graphql({
    query: updateAPSRegistrant,
    variables: { input: { id: id, codeSent: true } },
  });

  return updated.data;
};

export const sendRegCode = async (name, email, company, title, phone) => {
  const res = fetch('/api/send-registration-code', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      company,
      title,
      phone,
    }),
  });

  return (await res).status;
};

export const handleRegInit = async (
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
  // Check for existing registrant
  const isRegistrant = await API.graphql({
    query: aPSRegistrantsByEmail,
    variables: { email: email },
  });

  if (isRegistrant.data.aPSRegistrantsByEmail.items.length === 0) {
    //Create New Registrant
    const newReg = await API.graphql({
      query: createAPSRegistrant,
      variables: {
        input: {
          name,
          title,
          company,
          email,
          phone,
          code: regCode ? regCode : 'TICKET',
          worksWith,
          speedNetworking,
          innovationWorkshop,
          plantTour,
          codeRequested: false,
          codeSent: false,
          registrationReceived: true,
          welcomeEmailSent: false,
        },
      },
    });

    return newReg.data;
  }

  // If there is a reg, update data, otherwise...
  if (isRegistrant.data.aPSRegistrantsByEmail.items.length > 0) {
    const updated = await API.graphql({
      query: updateAPSRegistrant,
      variables: {
        input: {
          id: isRegistrant.data.aPSRegistrantsByEmail.items[0].id,
          name,
          title,
          company,
          email,
          phone,
          worksWith,
          speedNetworking,
          innovationWorkshop,
          plantTour,
          registrationReceived: true,
        },
      },
    });

    return updated.data;
  }
};

export const handleTicketRegInit = async (
  name,
  title,
  company,
  email,
  phone,
  worksWith,
  speedNetworking,
  innovationWorkshop,
  plantTour
) => {
  // Check for existing registrant
  const isRegistrant = await API.graphql({
    query: aPSTicketRegistrantsByEmail,
    variables: { email: email },
  });

  if (isRegistrant.data.aPSTicketRegistrantsByEmail.items.length === 0) {
    //Create New Registrant
    const newReg = await API.graphql({
      query: createAPSTicketRegistrant,
      variables: {
        input: {
          name,
          title,
          company,
          email,
          phone,
          worksWith,
          speedNetworking,
          innovationWorkshop,
          plantTour,
          registrationReceived: true,
          welcomeEmailSent: false,
        },
      },
    });

    return newReg.data;
  }

  // If there is a reg, update data, otherwise...
  if (isRegistrant.data.aPSTicketRegistrantsByEmail.items.length > 0) {
    const updated = await API.graphql({
      query: updateAPSTicketRegistrant,
      variables: {
        input: {
          id: isRegistrant.data.aPSTicketRegistrantsByEmail.items[0].id,
          name,
          title,
          company,
          email,
          phone,
          worksWith,
          speedNetworking,
          innovationWorkshop,
          plantTour,
          registrationReceived: true,
        },
      },
    });

    return updated.data;
  }
};

export const approveRegistrant = async (id) => {
  const updated = await API.graphql({
    query: updateAPSRegistrant,
    variables: { input: { id: id, welcomeEmailSent: true } },
  });

  return updated.data;
};

export const sendWelcomeEmail = async (name, email) => {
  const res = fetch('/api/send-welcome-email', {
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

  return (await res).status;
};

export const sendSpeakerInterest = async (data) => {
  const res = fetch('/api/send-speaker-interest', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });

  return (await res).status;
};

export const sendMorrisette = async (data) => {
  const res = fetch('/api/send-morrisette', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });

  return (await res).status;
};

export const sendMorrisetteWelcome = async (email) => {
  const res = fetch('/api/send-morrisette-approval', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  return (await res).status;
};

export const sendGuardian = async (data) => {
  const res = fetch('/api/send-guardian', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });

  return (await res).status;
};

export const sendGuardianWelcome = async (email) => {
  const res = fetch('/api/send-morrisette-approval', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  return (await res).status;
};

export const sendSurgere = async (data) => {
  const res = fetch('/api/send-surgere', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });

  return (await res).status;
};

export const sendSurgereWelcome = async (email) => {
  const res = fetch('/api/send-surgere-approval', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  return (await res).status;
};
