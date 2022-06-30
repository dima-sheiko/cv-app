import React from 'react';

function Description({ cvDescription }) {
  return (
    <div className='cv-description'>
      <p>{cvDescription.descriptionPers}</p>
    </div>
  );
}

export default Description;
