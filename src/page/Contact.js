import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      {submitted && <p className="contact-message">Message sent successfully!</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label className="contact-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
          />
          {errors.name && <p className="contact-error">{errors.name}</p>}
        </div>

        <div>
          <label className="contact-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
          />
          {errors.email && <p className="contact-error">{errors.email}</p>}
        </div>

        <div>
          <label className="contact-label">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
          ></textarea>
          {errors.message && <p className="contact-error">{errors.message}</p>}
        </div>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;