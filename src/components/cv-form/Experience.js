import React from 'react';

function Experience({
  experience,
  handleAddExperience,
  handleRemoveExperience,
  handleExperienceChange,
}) {
  return experience.map((el, index) => (
    <span key={index}>
      <h3 className='form-header'>Experience</h3>
      <input
        onChange={(e) => handleExperienceChange(e, index)}
        value={el.position}
        className='form-input'
        type='text'
        name='position'
        placeholder='Position'
      />
      <input
        onChange={(e) => handleExperienceChange(e, index)}
        value={el.company}
        className='form-input'
        type='text'
        name='company'
        placeholder='Company'
      />
      <input
        onChange={(e) => handleExperienceChange(e, index)}
        value={el.fromEx}
        className='form-input'
        type='text'
        name='fromEx'
        placeholder='Start Date'
      />
      <input
        onChange={(e) => handleExperienceChange(e, index)}
        value={el.toEx}
        className='form-input'
        type='text'
        name='toEx'
        placeholder='End Date'
      />
      <input
        onChange={(e) => handleExperienceChange(e, index)}
        value={el.descriptionEx}
        className='form-input'
        type='text'
        name='descriptionEx'
        placeholder='Description'
      />
      {experience.length > 1 && (
        <button
          onClick={() => handleRemoveExperience(index)}
          className='form-btn'
        >
          Delete
        </button>
      )}
      {experience.length - 1 === index && experience.length < 5 && (
        <button onClick={handleAddExperience} className='form-btn'>
          Add
        </button>
      )}
    </span>
  ));
}

export default Experience;
