import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_4ezzn2n", 
                "template_ikne2jg", 
                form.current, 
                "Txv5fueon8Jy4yUYI"
            )
            .then(
                (result) => {
                    alert("Message Sent Successfully! ✅");
                    console.log(result.text);
                },
                (error) => {
                    alert("Failed to send message. ❌");
                    console.log(error.text);
                }
            );

        e.target.reset(); // Reset form after submission
    };

    return (
        <section id="contact">
            <div className="social-media">
                <h3>Follow <span className="contactme">Me</span></h3>
                <div className="social-icons">
                    <a href="https://www.facebook.com/s.j.sheeja.3" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/sheejamol10/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/sjsheeja24" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </a>
                    <a href="https://www.instagram.com/s_j_cj_10/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </a>
                </div>
            </div>
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <p className="contact-description">
                    Feel free to contact me for any projects or collaborations.
                </p>

                <div className="contact-content">
                    {/* Contact Form */}
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <input type="text" className="name" name="your_name" placeholder="Your Name" required />
                        <input type="email" className="email" name="your_email" placeholder="Your Email" required />
                        <textarea className="msg" name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
