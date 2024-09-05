import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple sanitization function to remove potentially harmful characters
const sanitizeInput = (input) => {
    return input.replace(/<script.*?>.*?<\/script>/gi, '')
                .replace(/<[^>]*>/g, '')
                .trim();
};

function Contacts() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: sanitizeInput(value) // sanitize input on change
        });
    };

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            setSuccessMessage('');
            return;
        }

        setErrors({});
        setSuccessMessage('Message sent!');
        
        // Send email using emailjs
        emailjs.sendForm('service_wgelcvo', 'template_4hopte8', e.target, 'xs99INHCskPQFeHqi');
        console.log(1);
        emailjs.sendForm('service_q0c4ycd', 'template_6khwyz7', e.target, 'xs99INHCskPQFeHqi')
            .then((result) => {
                console.log(result.text);
                console.log(2);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-container'>
            <div className='contact-left'>
                <h1>HAVE ANY <span>QUESTIONS?</span></h1>
                <p>Be sure to contact me at </p>
                <p>+371 22838939</p>
                <p>alekssvelvelis@gmail.com</p>
                <p>Will get back to you <span>ASAP!</span></p>
            </div>
            <div className='contact-right'>
                <form className='message-input-box' id="message-input" name="message-input" onSubmit={handleSubmit}>
                    <div className='message-box-inner'>
                        <h1>Leave your message</h1>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder='Name...' 
                            value={formData.name} 
                            onChange={handleChange} 
                            className={errors.name ? 'input-error' : ''}
                        />
                        {errors.name && <p className='error'>{errors.name}</p>}
                        
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            placeholder='E-mail...' 
                            value={formData.email} 
                            onChange={handleChange} 
                            className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <p className='error'>{errors.email}</p>}
                        
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder='Message...' 
                            value={formData.message} 
                            onChange={handleChange} 
                            className={errors.message ? 'input-error message-box' : ' message-box'}
                        />
                        {errors.message && <p className='error'>{errors.message}</p>}
                        
                        <input type="submit" value='Send' />
                        {successMessage && <p className='success'>{successMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
