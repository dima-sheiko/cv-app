import React from 'react';

function Education({ education, handleAddEducation, handleRemoveEducation, handleEducationChange }) {
  return education.map((el, index) => (
    <span key={index}>
      <h3 className='form-header'>Education</h3>
      <input
        onChange={(e) => handleEducationChange(e, index)}
        value={el.course}
        className='form-input'
        type='text'
        name='course'
        placeholder='Course / Program'
      />
      <input
        onChange={(e) => handleEducationChange(e, index)}
        value={el.university}
        className='form-input'
        type='text'
        name='university'
        placeholder='University'
      />
      <input
        onChange={(e) => handleEducationChange(e, index)}
        value={el.fromEd}
        className='form-input'
        type='text'
        name='fromEd'
        placeholder='Start Date'
      />
      <input
        onChange={(e) => handleEducationChange(e, index)}
        value={el.toEd}
        className='form-input'
        type='text'
        name='toEd'
        placeholder='End Date'
      />
      <input
        onChange={(e) => handleEducationChange(e, index)}
        value={el.descriptionEd}
        className='form-input'
        type='text'
        name='descriptionEd'
        placeholder='Description'
      />
      {education.length > 1 && <button onClick={() => handleRemoveEducation(index)} className='form-btn'>Delete</button>}
      {education.length - 1 === index && education.length < 5 && (
        <button onClick={handleAddEducation} className='form-btn'>
          Add
        </button>
      )}
    </span>
  ));
}

export default Education;
