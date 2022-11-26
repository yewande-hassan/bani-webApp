import React from 'react';
import "../../styles/page/dashboard.scss"

const Section1 = () => {
  return (
    <div className="section1">
    <span>
      <p className="text">Total Credits</p>
      <p className="bold_text">NGN 3,287,902.00</p>
    </span>
    <span>
      <p className="text">Total Trasfer Settlements</p>
      <p className="bold_text">81 Settlement</p>
    </span>
    <span>
      <p className="text">Generated Accounts</p>
      <p className="bold_text">12 Accounts</p>
    </span>
  </div>
  );
};

export default Section1;