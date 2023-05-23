import React, {useState} from 'react';
import { validateEmail, validatePhone } from '../../utils/helpers';
import '../../assets/css/ContactForm.css';

function contactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'phone') {
            setPhone(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Enter valid email.');
            return;
        }
        if (!validatePhone(phone)) {
            setErrorMessage('Enter valid phone number.');
            return;
        }

        setEmail('');
        setMessage('');
        setName('');
        setPhone('');
    };

    return (
        <div> 
            <h3>Submit message here!</h3>
            <form className="contactForm">
                <input
                className='input-group input-group-lg mb-3'
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder='Name'>
                </input>
                <input 
                value={email}
                name="email"
                onChange={handleInputChange}
                type='email'
                placeholder='Email'>
                </input>
                <input
                value={phone}
                name="phone"
                onChange={handleInputChange}
                type="text"
                placeholder='(XXX)XXX-XXXX'>
                </input>
                <input
                className='input-group input-group-lg'
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder='Enter message Here.'>
                </input>
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </div>
    );

};

export default contactForm;