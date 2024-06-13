import React from "react";
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">
                Contact Us
            </h1>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className="form-control" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
