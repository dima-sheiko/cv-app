import React from 'react';

function Experience({ cvExperience }) {
  return (
    <div className='cv-section'>
      <div className='cv-section-item'>
        <h4>{cvExperience.position}</h4>
        <div className='details'>
          <p className='university'>{cvExperience.company}</p>|
          <p className='bold'>
            {cvExperience.fromEx} - {cvExperience.toEx}
          </p>
        </div>
      </div>
      <p>{cvExperience.descriptionEx}</p>
    </div>
  );
}

export default Experience;
