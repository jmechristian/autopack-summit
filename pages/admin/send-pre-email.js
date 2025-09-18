import React, { useState, useEffect } from 'react';
import {
  listApprovedAPS25Registrants,
  sendPreEmail,
  logEmailResponse,
} from '../../util/api';

const Page = () => {
  const [registrants, setRegistrants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [sendingEmails, setSendingEmails] = useState({});
  const [emailStatuses, setEmailStatuses] = useState({});
  const [isSendingAll, setIsSendingAll] = useState(false);
  const [isTestRun, setIsTestRun] = useState(false);
  const [bulkProgress, setBulkProgress] = useState({ sent: 0, total: 0 });

  useEffect(() => {
    const getRegistrants = async () => {
      setIsLoading(true);
      try {
        const registrants = await listApprovedAPS25Registrants();
        setRegistrants(registrants);
      } catch (error) {
        setIsError(error.message);
      }
      setIsLoading(false);
    };
    getRegistrants();
  }, []);

  const handleSendEmail = async (registrant) => {
    setSendingEmails((prev) => ({ ...prev, [registrant.id]: true }));

    try {
      const result = await sendPreEmail(registrant.id, registrant.email);
      const status = result.message === 'success' ? 'sent' : 'error';

      if (result.message === 'success') {
        setEmailStatuses((prev) => ({ ...prev, [registrant.id]: 'sent' }));
      } else {
        setEmailStatuses((prev) => ({ ...prev, [registrant.id]: 'error' }));
      }

      // Log the response to JSON file
      await logEmailResponse(registrant, result, status);
    } catch (error) {
      setEmailStatuses((prev) => ({ ...prev, [registrant.id]: 'error' }));

      // Log error to JSON file
      await logEmailResponse(registrant, { message: error.message }, 'error');
    } finally {
      setSendingEmails((prev) => ({ ...prev, [registrant.id]: false }));
    }
  };

  const handleSendAllEmails = async () => {
    // Filter out emails that have already been sent successfully
    const emailsToSend = registrants.filter(
      (registrant) => emailStatuses[registrant.id] !== 'sent'
    );

    if (emailsToSend.length === 0) {
      alert('All emails have already been sent successfully!');
      return;
    }

    setIsSendingAll(true);
    setBulkProgress({ sent: 0, total: emailsToSend.length });

    // Rate limiting: send emails with a 2-second delay between each
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    for (let i = 0; i < emailsToSend.length; i++) {
      const registrant = emailsToSend[i];

      // Set individual sending state
      setSendingEmails((prev) => ({ ...prev, [registrant.id]: true }));

      try {
        const result = await sendPreEmail(registrant.id, registrant.email);
        const status = result.message === 'success' ? 'sent' : 'error';

        if (result.message === 'success') {
          setEmailStatuses((prev) => ({ ...prev, [registrant.id]: 'sent' }));
        } else {
          setEmailStatuses((prev) => ({ ...prev, [registrant.id]: 'error' }));
        }

        // Log the response to JSON file
        await logEmailResponse(registrant, result, status);
      } catch (error) {
        console.error(`Error sending email to ${registrant.email}:`, error);
        setEmailStatuses((prev) => ({ ...prev, [registrant.id]: 'error' }));

        // Log error to JSON file
        await logEmailResponse(registrant, { message: error.message }, 'error');
      } finally {
        setSendingEmails((prev) => ({ ...prev, [registrant.id]: false }));
        setBulkProgress((prev) => ({ ...prev, sent: prev.sent + 1 }));
      }

      // Wait 2 seconds before sending the next email (except for the last one)
      if (i < emailsToSend.length - 1) {
        await delay(2000);
      }
    }

    setIsSendingAll(false);
    setBulkProgress({ sent: 0, total: 0 });
  };

  const handleTestRun = async () => {
    // Filter out emails that have already been sent successfully
    const emailsToSend = registrants.filter(
      (registrant) => emailStatuses[registrant.id] !== 'sent'
    );

    if (emailsToSend.length === 0) {
      alert('All emails have already been sent successfully!');
      return;
    }

    setIsTestRun(true);
    setBulkProgress({ sent: 0, total: emailsToSend.length });

    // Rate limiting: simulate emails with a 1-second delay between each (faster for testing)
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Simulate realistic success/failure rates (90% success, 10% failure)
    const simulateResponse = () => {
      const success = Math.random() > 0.1; // 90% success rate
      return {
        message: success ? 'success' : 'error',
        simulated: true,
        error: success ? null : 'Simulated API error for testing',
      };
    };

    for (let i = 0; i < emailsToSend.length; i++) {
      const registrant = emailsToSend[i];

      // Set individual sending state
      setSendingEmails((prev) => ({ ...prev, [registrant.id]: true }));

      try {
        // Simulate API delay
        await delay(500);

        const result = simulateResponse();
        const status = result.message === 'success' ? 'sent' : 'error';

        if (result.message === 'success') {
          setEmailStatuses((prev) => ({ ...prev, [registrant.id]: 'sent' }));
        } else {
          setEmailStatuses((prev) => ({ ...prev, [registrant.id]: 'error' }));
        }

        // Log the simulated response to JSON file
        await logEmailResponse(registrant, result, status);

        console.log(`Test run: ${result.message} for ${registrant.email}`);
      } catch (error) {
        console.error(`Test run error for ${registrant.email}:`, error);
        setEmailStatuses((prev) => ({ ...prev, [registrant.id]: 'error' }));

        // Log error to JSON file
        await logEmailResponse(
          registrant,
          { message: error.message, simulated: true },
          'error'
        );
      } finally {
        setSendingEmails((prev) => ({ ...prev, [registrant.id]: false }));
        setBulkProgress((prev) => ({ ...prev, sent: prev.sent + 1 }));
      }

      // Wait 1 second before sending the next email (except for the last one)
      if (i < emailsToSend.length - 1) {
        await delay(1000);
      }
    }

    // Calculate summary before resetting state
    const successCount = emailsToSend.filter(
      (r) => emailStatuses[r.id] === 'sent'
    ).length;
    const errorCount = emailsToSend.filter(
      (r) => emailStatuses[r.id] === 'error'
    ).length;

    setIsTestRun(false);
    setBulkProgress({ sent: 0, total: 0 });

    // Show test run summary
    alert(
      `Test run completed!\nSuccess: ${successCount}\nErrors: ${errorCount}\nTotal: ${emailsToSend.length}`
    );
  };

  if (isLoading) {
    return <div className='p-8'>Loading...</div>;
  }

  if (isError) {
    return <div className='p-8 text-red-600'>Error: {isError}</div>;
  }

  return (
    <div className='p-8'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>
          Approved Registrants ({registrants.length})
        </h1>
        <div className='flex items-center space-x-4'>
          {(isSendingAll || isTestRun) && (
            <div className='text-sm text-gray-600'>
              {isTestRun ? 'Test Run: ' : 'Sending: '}
              {bulkProgress.sent} / {bulkProgress.total}
            </div>
          )}
          <button
            onClick={handleTestRun}
            disabled={isSendingAll || isTestRun || isLoading}
            className={`px-4 py-2 rounded font-medium ${
              isSendingAll || isTestRun || isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-yellow-600 text-white hover:bg-yellow-700'
            }`}
          >
            {isTestRun ? 'Test Running...' : 'Test Run'}
          </button>
          <button
            onClick={handleSendAllEmails}
            disabled={isSendingAll || isTestRun || isLoading}
            className={`px-6 py-2 rounded font-medium ${
              isSendingAll || isTestRun || isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isSendingAll ? 'Sending All...' : 'Send All Emails'}
          </button>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b'>
                First Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b'>
                Last Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b'>
                Email
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b'>
                Company
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b'>
                Send Test Email
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b'>
                Email Status
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {registrants.map((registrant) => (
              <tr key={registrant.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b'>
                  {registrant.firstName}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b'>
                  {registrant.lastName}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b'>
                  {registrant.email}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b'>
                  {registrant.company?.name || 'N/A'}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b'>
                  <button
                    onClick={() => handleSendEmail(registrant)}
                    disabled={
                      sendingEmails[registrant.id] ||
                      isSendingAll ||
                      isTestRun ||
                      emailStatuses[registrant.id] === 'sent'
                    }
                    className={`px-4 py-2 rounded text-sm font-medium ${
                      sendingEmails[registrant.id] ||
                      isSendingAll ||
                      isTestRun ||
                      emailStatuses[registrant.id] === 'sent'
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {sendingEmails[registrant.id]
                      ? isTestRun
                        ? 'Testing...'
                        : 'Sending...'
                      : emailStatuses[registrant.id] === 'sent'
                      ? 'Already Sent'
                      : 'Send Email'}
                  </button>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm border-b'>
                  {emailStatuses[registrant.id] === 'sent' && (
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                      Sent
                    </span>
                  )}
                  {emailStatuses[registrant.id] === 'error' && (
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800'>
                      Error
                    </span>
                  )}
                  {!emailStatuses[registrant.id] && (
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
                      Not Sent
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
