'use client';
import { useState, useEffect } from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import { MdDownload } from 'react-icons/md';

const PDFDownloadButton = ({ registrant, totalAmount, addOnsSelected }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Move styles inside the component
  const styles = StyleSheet.create({
    page: {
      padding: 40,
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: '#1e3a8a',
      padding: 20,
      marginBottom: 20,
    },
    headerText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    // ... rest of your styles
  });

  // Define the PDF component inside where styles are available
  const RegistrationPDF = () => (
    <Document>
      <Page size='A4' style={styles.page}>
        {/* Your PDF content using the styles */}
      </Page>
    </Document>
  );

  if (!isClient) {
    return (
      <div className='w-fit gap-1 bg-gray-900 hover:bg-gray-700 flex items-center justify-center cursor-pointer mt-2 border border-black px-2 py-1 rounded-lg'>
        <MdDownload color='white' size={18} />
        <div className='text-xs font-medium text-white'>Loading...</div>
      </div>
    );
  }

  return (
    <PDFDownloadLink
      document={<RegistrationPDF />}
      fileName={`APS25-Registration-${registrant.lastName}.pdf`}
      className='w-fit gap-1 bg-gray-900 hover:bg-gray-700 flex items-center justify-center cursor-pointer mt-2 border border-black px-2 py-1 rounded-lg'
    >
      {({ loading }) => (
        <>
          <MdDownload color='white' size={18} />
          <div className='text-xs font-medium text-white'>
            {loading ? 'Generating PDF...' : 'Download Invoice'}
          </div>
        </>
      )}
    </PDFDownloadLink>
  );
};

export { PDFDownloadButton };
