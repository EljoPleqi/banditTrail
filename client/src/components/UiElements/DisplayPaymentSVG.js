import React, { useEffect, useState } from 'react';
import PaymentSVG from './PaymentSVG';

const DisplayPaymentSVG = ({ ccFirst }) => {
  const [svg, setSVG] = useState();

  useEffect(() => {
    console.log('inside useEffect');
    console.log(ccFirst);
    switch (ccFirst) {
      case 3:
        setSVG(PaymentSVG.amex);
        break;

      case 4:
        setSVG(PaymentSVG.visa);
        break;

      case 5:
        setSVG(PaymentSVG.mastercard);
        break;

      default:
        break;
    }
  }, [ccFirst]);

  console.log(svg);

  return <>{svg}</>;
};

export default DisplayPaymentSVG;
