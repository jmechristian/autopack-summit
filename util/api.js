import { API, Amplify, Storage } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import {
  createAPSRegistrant,
  createAPSTicketRegistrant,
  updateAPSRegistrant,
  updateAPSTicketRegistrant,
  createEmailTracking,
  updateEmailTracking,
  createAPSCompany,
  createAPSRegistrant2025,
  createAPSActivity2025,
  updateAPSRegistrant2025,
  updateAPSCode2025,
  createAPSCodeRequest25,
} from '../src/graphql/mutations';
import {
  aPSRegistrantsByEmail,
  aPSTicketRegistrantsByEmail,
  listEmailTrackings,
  listAPSBoards,
  listAPSCompanies,
  listAPSAddOn2025s,
  getAPSRegistrant2025,
  listAPSCode2025s,
  aPSCodeRequest25sByEmail,
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

export const sendRegCode = async (firstName, lastName, email, company) => {
  const res = fetch('/api/send-registration-code', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      company,
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

export const sendMorrisetteWelcome = async (email, preference) => {
  const res = fetch('/api/send-morrisette-approval', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      preference,
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
  const res = fetch('/api/send-guardian-approval', {
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

export const sendClemson = async (data) => {
  const res = fetch('/api/send-clemson', {
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

export const sendClemsonWelcome = async (email) => {
  const res = fetch('/api/send-clemson-approval', {
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

export const sendBosch = async (data) => {
  const res = fetch('/api/send-bosch', {
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

export const sendBoschWelcome = async (email, topics) => {
  const res = fetch('/api/send-bosch-approval', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      topics,
    }),
  });
};

export const sendAgenda = async (registrant, id) => {
  const res = fetch('/api/send-agenda', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      registrant,
      id,
    }),
  });

  return (await res).status;
};

export const trackEmail = async (email) => {
  const res = await API.graphql({
    query: createEmailTracking,
    variables: {
      input: {
        email: email,
        opened: false,
        sent: new Date().toISOString(),
      },
    },
  });

  return res.data;
};

export const getEmailTracking = async () => {
  const res = await API.graphql({
    query: listEmailTrackings,
    variables: {
      limit: 1000,
    },
  });

  return res.data;
};

export const trackEmailOpen = async (id) => {
  const res = await API.graphql({
    query: updateEmailTracking,
    variables: {
      input: { id: id, opened: true, openedDate: new Date().toISOString() },
    },
  });

  return res.data;
};

export const getBoardMembers = async () => {
  const res = await API.graphql({
    query: listAPSBoards,
  });

  return res.data.listAPSBoards.items;
};

export const getAPSCompanies = async () => {
  const res = await API.graphql({
    query: listAPSCompanies,
    variables: {
      limit: 1000,
    },
  });

  return res.data.listAPSCompanies.items;
};

export const createCompany = async (data) => {
  const res = await API.graphql({
    query: createAPSCompany,
    variables: { input: data },
  });

  return res.data.createAPSCompany;
};

export const getAPS25AddOns = async () => {
  const res = await API.graphql({
    query: listAPSAddOn2025s,
  });

  return res.data.listAPSAddOn2025s.items;
};

export const createNewAPS25Registrant = async (data) => {
  const res = await API.graphql({
    query: createAPSRegistrant2025,
    variables: {
      input: {
        email: data.email,
        aPSCompanyApsRegistrantsId: data.aPSRegistrant2025CompanyNameId,
        attendeeType: data.attendeeType,
        billingAddressCity: data.billingAddress.city,
        billingAddressEmail: data.billingAddress.email,
        billingAddressFirstName: data.billingAddress.firstName,
        billingAddressLastName: data.billingAddress.lastName,
        billingAddressPhone: data.billingAddress.phone,
        billingAddressState: data.billingAddress.state,
        billingAddressStreet: data.billingAddress.street,
        billingAddressZip: data.billingAddress.zip,
        discountCode: data.discountCode,
        firstName: data.firstName,
        interests: data.interests,
        jobTitle: data.jobTitle,
        lastName: data.lastName,
        learningObjectives: data.learningObjectives,
        otherInterest: data.otherInterest,
        paymentConfirmation: data.paymentConfirmation,
        phone: data.phone,
        sameAsAttendee: data.sameAsAttendee,
        speakerTopic: data.speakerTopic,
        speedNetworking: data.speedNetworking,
        status: 'PENDING',
        termsAccepted: data.termsAccepted,
        totalAmount: data.totalAmount,
        welcomeEmailSent: false,
        registrationEmailReceived: false,
        morrisetteStatus: data.morrisetteStatus,
        morrisetteTransportation: data.morrisetteTransportation,
        magnaStatus: data.magnaStatus,
        magnaTransportation: data.magnaTransportation,
        aristoStatus: data.aristoStatus,
        aristoTransportation: data.aristoTransportation,
      },
    },
  });

  return res.data;
};

export const getCurrentAPS25Registrant = async (id) => {
  const res = await API.graphql({
    query: getAPSRegistrant2025,
    variables: { id: id },
  });

  return res.data.getAPSRegistrant2025;
};

export const getAPS25Codes = async () => {
  const res = await API.graphql({
    query: listAPSCode2025s,
    variables: {
      limit: 1000,
    },
  });

  return res.data.listAPSCode2025s.items;
};

export const createAPS25Notification = async (data) => {
  const res = await API.graphql({
    query: createAPSActivity2025,
    variables: { input: data },
  });

  return res.data;
};

export const trackRegistrationEmailOpen = async (id, email) => {
  const date = new Date();
  const estDate = new Date(
    date.toLocaleString('en-US', { timeZone: 'America/New_York' })
  );

  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: {
      input: {
        id: id,
        registrationEmailReceived: true,
        registrationEmailReceivedDate: estDate.toISOString(),
      },
    },
  });

  await createAPS25Notification({
    type: 'REGISTRATION_EMAIL_OPENED',
    activity: 'Registration email opened from ' + email,
  });

  return res.data;
};

export const sendRegistrationConfirmation = async (data) => {
  const date = new Date();
  const estDate = new Date(
    date.toLocaleString('en-US', { timeZone: 'America/New_York' })
  );

  const res = await fetch('/api/send-registration-confirmation', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const updateRes = await API.graphql({
      query: updateAPSRegistrant2025,
      variables: {
        input: {
          id: data.formDataId,
          registrationEmailSent: true,
          registrationEmailSentDate: estDate.toISOString(),
        },
      },
    });
    return updateRes.data;
  }

  return null;
};

export const sendStaffRegistrationConfirmation = async (data) => {
  const res = await fetch('/api/send-staff-reg-confirmation', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res.data;
};

export const addCodeUsage = async (code) => {
  const res = await API.graphql({
    query: updateAPSCode2025,
    variables: { input: { id: code.id, used: code.used + 1 } },
  });
  return res.data;
};

export const registerSpeedNetworking = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: {
      input: {
        id: id,
        speedNetworkingStatus: 'PENDING',
      },
    },
  });

  return res.data;
};

export const unregisterSpeedNetworking = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, speedNetworkingStatus: null } },
  });
  return res.data;
};

export const sendActivity = async (data) => {
  const res = await API.graphql({
    query: createAPSActivity2025,
    variables: { input: data },
  });
  return res.data;
};

export const registerMorrisette = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, morrisetteStatus: 'PENDING' } },
  });
  return res.data;
};

export const registerMagna = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, magnaStatus: 'PENDING' } },
  });
  return res.data;
};

export const registerAristo = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, aristoStatus: 'PENDING' } },
  });
  return res.data;
};

export const unregisterMorrisette = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, morrisetteStatus: null } },
  });
  return res.data;
};

export const unregisterMagna = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, magnaStatus: null } },
  });
  return res.data;
};

export const unregisterAristo = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, aristoStatus: null } },
  });
  return res.data;
};

export const uploadToAPS3 = async (file) => {
  if (!file) return;

  try {
    // Replace spaces with hyphens in the filename
    const fileName = `speakers/${file.name.replace(/\s+/g, '-')}`;

    const res = await Storage.put(fileName, file, {
      contentType: file.type,
      resumable: true,
    });

    console.log(res);

    const photoUrl = `https://packmedia54032-staging.s3.us-east-1.amazonaws.com/public/${res.params.Key}`;

    return photoUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

export const updateSpeakerProfile = async (id, data) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, ...data } },
  });
  return res.data;
};

export const sendCodeRequest = async (email, company, firstName, lastName) => {
  const res = await fetch('/api/send-code-request', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, company, firstName, lastName }),
  });

  if (res.ok) {
    const createItem = await API.graphql({
      query: createAPSCodeRequest25,
      variables: {
        input: {
          email: email,
          company: company,
          firstName: firstName,
          lastName: lastName,
        },
      },
    });
    return createItem.data;
  }
  return res.status;
};

export const updateSentRegistrantCode = async (email) => {
  const id = await API.graphql({
    query: aPSCodeRequest25sByEmail,
    variables: { email: email },
  });

  const res = await API.graphql({
    query: updateAPSCode2025,
    variables: { input: { id: id, status: 'SENT' } },
  });
  return res.data;
};
