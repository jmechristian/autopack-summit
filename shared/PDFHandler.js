import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PDFHandler = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div ref={componentRef}>
        <div className='w-[210mm] h-[297mm] bg-red-500 hidden print:block'></div>
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default PDFHandler;
