import React, { useContext } from 'react';
import phone from '../../assets/phone.svg';
import email from '../../assets/email.svg';
import location from '../../assets/location.svg';
import { PersonalContext } from '../../App';

function Header() {
  const personal = useContext(PersonalContext);

  return (
    <header className='cv-header'>
      <div className='cv-personal'>
        <h2>{personal.name}</h2>
        <h3>{personal.title}</h3>
      </div>
      <div className='cv-contact'>
        <div className='contact-item'>
          <img src={phone} alt='' />
          <p>{personal.phone}</p>
        </div>
        <div className='contact-item'>
          <img src={email} alt='' />
          <p className='contact-email'>{personal.email}</p>
        </div>
        <div className='contact-item'>
          <img src={location} alt='' />
          <p>{personal.location}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
