import React from "react";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <a
            href="https://pe.linkedin.com/in/pablo-miguel-espinoza-pretel-b0ba2a163"
            target="_blank"
            rel="noreferrer"
          >
            Miguel
          </a>{" "}
          {d.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
