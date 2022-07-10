import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

function Form({
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
          handlePersonalChange={handlePersonalChange}
        />
        <Education
          handleAddEducation={handleAddEducation}
          handleRemoveEducation={handleRemoveEducation}
          handleEducationChange={handleEducationChange}
        />
        <Experience
          handleAddExperience={handleAddExperience}
          handleRemoveExperience={handleRemoveExperience}
          handleExperienceChange={handleExperienceChange}
        />
      </form>
    </div>
  );
}

export default Form;
