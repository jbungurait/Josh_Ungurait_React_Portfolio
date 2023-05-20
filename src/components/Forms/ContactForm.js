import React, {useState} from 'react';
import './style.css';
import { validateEmail, validatePhone } from '../../utils/helpers';

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
            <h3>Contact Me!</h3>
            <form className="contactForm">
                <input
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
                type="number"
                placeholder='(XXX)XXX-XXXX'>
                </input>
                <input
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