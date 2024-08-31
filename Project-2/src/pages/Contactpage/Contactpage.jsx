import "./Contactpage.css";
import contactimage from "./images/contactimage.jpg";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";

const Contactpage = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactForm = (e) => {
    e.preventDefault();
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleContactInfo = (e) => {
    const { name, value } = e.target;

    setContactForm({ ...contactForm, [name]: value });
  };

  return (
    <div className="contactus-container">
      <main className="container d-flex flex-lg-row flex-sm-column align-items-center justify-content-center gap-5 contact-subcontainer">
        <div className="contact-content text-sm-center">
          <h3>Get in Touch with Us</h3>
          <h4>We&apos;re Here to Help</h4>
          <p>
            Whether you have a question, need support, or just want to share
            your feedback, we&apos;d love to hear from you. Reach out to us
            through any of the options below
          </p>
        </div>
        <img src={contactimage} alt="contact-img" className="contact-img" />
      </main>
      <section className="contact-formsection">
        <h3 className="fw-bold">Drop Us a Message</h3>
        <p className="fw-medium fs-6">
          Use the form below to send us a message, and we&apos;ll get back to
          you as soon as possible.
        </p>
        <form
          className=" d-flex flex-lg-column gap-2 contact-form"
          onSubmit={handleContactForm}>
          <div className=" d-flex flex-lg-column flex-sm-column gap-2 name">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={contactForm.name}
              onChange={handleContactInfo}
            />
          </div>
          <div className=" d-flex flex-column gap-2 Email">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={contactForm.email}
              onChange={handleContactInfo}
            />
          </div>
          <div className=" d-flex flex-column gap-2 subject">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              value={contactForm.subject}
              onChange={handleContactInfo}
              placeholder="Enter your message subject"
            />
          </div>
          <div className=" d-flex flex-column gap-2 message">
            <label htmlFor="message">Message:</label>
            <textarea
              rows="2"
              name="message"
              onChange={handleContactInfo}
              value={contactForm.message}></textarea>
          </div>

          <button className="sendmsg-btn">
            Send Message <BsFillSendFill />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contactpage;
