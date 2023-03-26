import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css"

export const Email = () => {
  const form = useRef();
  const [result,setResult]=useState("")

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
          setResult("Sent Successfully!")
        },
        (error) => {
          console.log(error.text);
          setResult("Something went wrong! Try again!")
        }
      );
  };

  return (
    <div className="email-container" id="contact">
      <div className="title">Get In Touch</div>
      <div className="sub">My inbox is always open for you!</div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" autoComplete="off" required/>
        <label >Email</label>
        <input className="em" type="email" name="user_email" autoComplete="off" required/>
        <label>Message</label>
        <textarea name="message" required />
        <button type="submit">Send</button>
      </form>

      <div className="result">{result}</div>
    </div>
  );
};
