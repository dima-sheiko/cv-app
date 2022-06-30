import React from 'react';

function Education({ cvEducation }) {
  return (
    <div className='cv-section'>
      <div className='cv-section-item'>
        <h4>{cvEducation.course}</h4>
        <div className='details'>
          <p className='university'>{cvEducation.university}</p>|
          <p className='bold'>{cvEducation.fromEd} - {cvEducation.toEd}</p>
        </div>
      </div>
      <p>
      {cvEducation.descriptionEd}
      </p>
    </div>
  );
}

export default Education;
