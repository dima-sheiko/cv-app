import React, { useState, useRef } from 'react';
import AppHeader from './components/AppHeader';
import Form from './components/cv-form/Form';
import Resume from './components/cv-preview/Resume';
import ReactToPrint from 'react-to-print';
import uniqid from 'uniqid';
import './styles/style.css';

export const PersonalContext = React.createContext();
export const EducationContext = React.createContext();
export const ExperienceContext = React.createContext();

function App() {
  /* State */

  const [personal, setPersonal] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    location: '',
    descriptionPers: '',
  });

  const [education, setEducation] = useState([
    {
      id: uniqid(),
      course: '',
      university: '',
      fromEd: '',
      toEd: '',
      descriptionEd: '',
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: uniqid(),
      position: '',
      company: '',
      fromEx: '',
      toEx: '',
      descriptionEx: '',
    },
  ]);

  /* Ref */

  const componentRef = useRef();

  /* Event Handlers */

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        course: '',
        university: '',
        fromEd: '',
        toEd: '',
        descriptionEd: '',
      },
    ]);
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        company: '',
        position: '',
        fromEx: '',
        toEx: '',
        descriptionEx: '',
      },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const list = [...education];
    list.splice(index, 1);
    setEducation(list);
  };

  const handleRemoveExperience = (index) => {
    const list = [...experience];
    list.splice(index, 1);
    setExperience(list);
  };

  const handlePersonalChange = (e) => {
    const value = e.target.value;
    setPersonal({
      ...personal,
      [e.target.name]: value,
    });
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...education];
    list[index][name] = value;
    setEducation(list);
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...experience];
    list[index][name] = value;
    setExperience(list);
  };

  return (
    <div>
      <AppHeader />
      <main className='app-main'>
        <PersonalContext.Provider value={personal}>
          <EducationContext.Provider value={education}>
            <ExperienceContext.Provider value={experience}>
              <Form
                handleAddEducation={handleAddEducation}
                handleAddExperience={handleAddExperience}
                handleRemoveEducation={handleRemoveEducation}
                handleRemoveExperience={handleRemoveExperience}
                handlePersonalChange={handlePersonalChange}
                handleEducationChange={handleEducationChange}
                handleExperienceChange={handleExperienceChange}
              />
              <Resume ref={componentRef} />
            </ExperienceContext.Provider>
          </EducationContext.Provider>
        </PersonalContext.Provider>
      </main>
      <ReactToPrint
        trigger={() => <button className='print-btn'></button>}
        content={() => componentRef.current}
      />
    </div>
  );
}

export default App;
