import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css"

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z4pp1r7",
        "template_hm9dj9k",
        form.current,
        "jeY7ytfLbiel_ewdZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent! Have a nice day. ")
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong! Try Again!")
        }
      );
  };

  return (
    <div className="email-container">
      <div className="title">Get In Touch</div>
      <div className="sub">My inbox is always open for you!</div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" autoComplete="off" required/>
        <label >Email</label>
        <input className="em" type="email" name="user_email" autoComplete="off" required/>
        <label>Message</label>
        <textarea name="message" required />
        {/* <input type="submit" value="Send" /> */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
