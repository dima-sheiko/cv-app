import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

function Form({
  personal,
  education,
  experience,
  handleAddEducation,
  handleAddExperience,
  handleRemoveEducation,
  handleRemoveExperience,
  handlePersonalChange,
  handleEducationChange,
  handleExperienceChange,
}) {
  return (
    <div className='form-wrapper'>
      <form className='form'>
        <Personal
          personal={personal}
          handlePersonalChange={handlePersonalChange}
        />
        <Education
          education={education}
          handleAddEducation={handleAddEducation}
          handleRemoveEducation={handleRemoveEducation}
          handleEducationChange={handleEducationChange}
        />
        <Experience
          experience={experience}
          handleAddExperience={handleAddExperience}
          handleRemoveExperience={handleRemoveExperience}
          handleExperienceChange={handleExperienceChange}
        />
      </form>
      <div className='form-footer'>
        <button className='form-btn green'>Print CV</button>
      </div>
    </div>
  );
}

export default Form;
