import React, { useRef } from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import ReactToPrint from 'react-to-print';
import Resume from '../cv-preview/Resume';

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
  const componentRef = useRef();
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
        <ReactToPrint
          trigger={() => <button className='form-btn green'>Print CV</button>}
          content={() => componentRef.current}
        />
        <Resume ref={componentRef} />
      </div>
    </div>
  );
}

export default Form;
