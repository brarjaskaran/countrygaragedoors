import React from "react";
import "./ContactStrip.css";

const ContactStrip = () => {
  return (
    <div className="contact-strip">
      <div className="contact-strip__email">
        <i className="fas fa-envelope"></i>
        <span className="contact-strip__text">
          {" "}
          Call us: <a href="tel:+44 8888 888"> +61 414 444 406</a> <br />
        </span>
      </div>
    </div>
  );
};

export default ContactStrip;
