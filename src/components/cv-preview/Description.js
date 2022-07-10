import React, { useContext } from 'react';
import { PersonalContext } from '../../App';

function Description() {
  const description = useContext(PersonalContext);

  return (
    <div className='cv-description'>
      <p>{description.descriptionPers}</p>
    </div>
  );
}

export default Description;

