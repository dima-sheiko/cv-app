import React from 'react';
import phone from '../../assets/phone.svg'
import email from '../../assets/email.svg';
import location from '../../assets/location.svg';

function Header({ cvPersonal }) {
  return (
    <header className='cv-header'>
      <div className='cv-personal'>
        <h2>{cvPersonal.name}</h2>
        <h3>{cvPersonal.title}</h3>
      </div>
      <div className='cv-contact'>
        <div className='contact-item'>
          <img src={phone} alt='' />
          <p>{cvPersonal.phone}</p>
        </div>
        <div className='contact-item'>
          <img src={email} alt='' />
          <p className='contact-email'>{cvPersonal.email}</p>
        </div>
        <div className='contact-item'>
          <img src={location} alt='' />
          <p>{cvPersonal.location}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
