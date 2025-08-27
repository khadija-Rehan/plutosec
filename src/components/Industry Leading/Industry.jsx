import React, { useEffect, useState } from "react";
import "./Industry.css";
import Terminal from "../Terminal/Terminal";
const Industry = () => {
  const namesarray = ["IAM","PENTEST","XDR","MDR","VA"];
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(namesarray[0]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentText(namesarray[index]);
      setIndex(index + 1);
    }, 2000);
    if (namesarray.length == index) {
      setIndex(0);
    }
  }, [index]);

  return (
    <div className="front-area1">
      <div className="front-left">
        <p>Industry-leading <span className="changeable-text">{currentText}</span> for your security needs</p>
        <p>
          PlutoSec is a leading cybersecurity company in Canada, specializing in
          advanced penetration testing by certified experts. We offer detailed
          security assessments to help enterprises and government organizations
          identify vulnerabilities and enhance cyber resilience.
        </p>
        <div className="btn-section">
          <div className="start">Get Started</div>
          <div className="contact">Contact Us</div>
        </div>
      </div>
      <div className="front-right-section">
        <Terminal />
      </div>
    </div>
  );
};

export default Industry;
