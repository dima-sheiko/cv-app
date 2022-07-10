import React, { useContext } from 'react';
import Header from './Header';
import Description from './Description';
import Education from './Education';
import Experience from './Experience';
import { EducationContext, ExperienceContext } from '../../App';

const Resume = React.forwardRef((props, ref) => {
  const education = useContext(EducationContext);
  const experience = useContext(ExperienceContext);

  return (
    <div className='resume' ref={ref}>
      <Header />
      <Description />
      <h3 className='section-hdr'>Education</h3>
      {education.map((e) => (
        <Education key={e.id} cvEducation={e} />
      ))}
      <h3 className='section-hdr'>Experience</h3>
      {experience.map((e) => (
        <Experience key={e.id} cvExperience={e} />
      ))}
    </div>
  );
});

export default Resume;
