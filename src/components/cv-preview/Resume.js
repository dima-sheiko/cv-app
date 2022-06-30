import React from 'react';
import Header from './Header';
import Description from './Description';
import Education from './Education';
import Experience from './Experience';

/* function Resume({ passState }) {
  return (
    <div className='resume'>
      <Header cvPersonal={passState.personal} />
      <Description cvDescription={passState.personal} />
      <h3 className='section-hdr'>Education</h3>
      {passState.education.map((e) => (
        <Education key={e.id} cvEducation={e} />
      ))}
       <h3 className='section-hdr'>Experience</h3>
      {passState.experience.map((e) => (
        <Experience key={e.id} cvExperience={e} />
      ))}
    </div>
  );
} */

class Resume extends React.Component {
  render() {
    const { passState } = this.props;

    return (
      <div className='resume'>
        <Header cvPersonal={passState.personal} />
        <Description cvDescription={passState.personal} />
        <h3 className='section-hdr'>Education</h3>
        {passState.education.map((e) => (
          <Education key={e.id} cvEducation={e} />
        ))}
        <h3 className='section-hdr'>Experience</h3>
        {passState.experience.map((e) => (
          <Experience key={e.id} cvExperience={e} />
        ))}
      </div>
    );
  }
}

export default Resume;