import React from "react";
import "./Mailer.css";
import emailjs from "emailjs-com";
function Mailer() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ilawbs",
        "template_d1ivwbn",
        e.target,
        "GepaynbxbPutPC4dB"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="mailer">
      <h3>Contact Form</h3>
      <form className="mailer__form row" onSubmit={sendEmail}>
        <label htmlFor="name" className="mailer__wigth">
          {" "}
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control mailer__wigth"
        />

        <label htmlFor="mobile" className="mailer__wigth">
          {" "}
          Mobile
        </label>
        <input
          type="mobile"
          name="mobile"
          id="mobile"
          className="form-control mailer__wigth"
        />
        <label htmlFor="email" className="mailer__wigth">
          {" "}
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control mailer__wigth"
        />

        <label htmlFor="message" className=" mailer__wigth">
          {" "}
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="form-control mailer__wigth"
        />
        <button type="submit" className="btn btn-primary mailer__wigth">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Mailer;
