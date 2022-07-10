import React, { useContext } from 'react';
import { PersonalContext } from '../../App';

function Personal({ handlePersonalChange }) {
  const personal = useContext(PersonalContext);

  return (
    <span>
      <h3 className='form-header'>Personal Information</h3>
      <input
        onChange={handlePersonalChange}
        value={personal.name}
        className='form-input'
        type='text'
        name='name'
        placeholder='Name'
      />
      <input
        onChange={handlePersonalChange}
        value={personal.title}
        className='form-input'
        type='text'
        name='title'
        placeholder='Title'
      />
      <input
        onChange={handlePersonalChange}
        value={personal.phone}
        className='form-input'
        type='text'
        name='phone'
        placeholder='Phone'
      />
      <input
        onChange={handlePersonalChange}
        value={personal.email}
        className='form-input'
        type='email'
        name='email'
        placeholder='Email'
      />
      <input
        onChange={handlePersonalChange}
        value={personal.location}
        className='form-input'
        type='text'
        name='location'
        placeholder='Location'
      />
      <input
        onChange={handlePersonalChange}
        value={personal.descriptionPers}
        className='form-input'
        type='text'
        name='descriptionPers'
        placeholder='Description'
      />
    </span>
  );
}

export default Personal;
