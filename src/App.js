import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import Form from './components/cv-form/Form';
import Resume from './components/cv-preview/Resume';
import ReactToPrint from 'react-to-print';
import uniqid from 'uniqid';
import './styles/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: '',
        title: '',
        phone: '',
        email: '',
        location: '',
        descriptionPers: '',
      },

      education: [
        {
          id: uniqid(),
          course: '',
          university: '',
          fromEd: '',
          toEd: '',
          descriptionEd: '',
        },
      ],

      experience: [
        {
          id: uniqid(),
          position: '',
          company: '',
          fromEx: '',
          toEx: '',
          descriptionEx: '',
        },
      ],
    };

    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleRemoveEducation = this.handleRemoveEducation.bind(this);
    this.handleRemoveExperience = this.handleRemoveExperience.bind(this);
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  handleAddEducation = () => {
    this.setState((prevState) => ({
      education: [
        ...prevState.education,
        {
          course: '',
          university: '',
          fromEd: '',
          toEd: '',
          descriptionEd: '',
        },
      ],
    }));
  };

  handleAddExperience = () => {
    this.setState((prevState) => ({
      experience: [
        ...prevState.experience,
        {
          company: '',
          position: '',
          fromEx: '',
          toEx: '',
          descriptionEx: '',
        },
      ],
    }));
  };

  handleRemoveEducation = (index) => {
    const list = [...this.state.education];
    list.splice(index, 1);
    this.setState((prevState) => ({ ...prevState, education: list }));
  };

  handleRemoveExperience = (index) => {
    const list = [...this.state.experience];
    list.splice(index, 1);
    this.setState((prevState) => ({ ...prevState, experience: list }));
  };

  handlePersonalChange = (e) => {
    const value = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      personal: { ...prevState.personal, [e.target.name]: value },
    }));
  };

  handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.education];
    list[index][name] = value;
    this.setState((prevState) => ({ ...prevState, education: list }));
  };

  handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.experience];
    list[index][name] = value;
    this.setState((prevState) => ({ ...prevState, experience: list }));
  };

  render() {
    const {
      handleAddEducation,
      handleAddExperience,
      handleRemoveEducation,
      handleRemoveExperience,
      handlePersonalChange,
      handleEducationChange,
      handleExperienceChange,
    } = this;

    const { personal, education, experience } = this.state;

    return (
      <div>
        <AppHeader />
        <main className='app-main'>
          <Form
            personal={personal}
            education={education}
            experience={experience}
            handleAddEducation={handleAddEducation}
            handleAddExperience={handleAddExperience}
            handleRemoveEducation={handleRemoveEducation}
            handleRemoveExperience={handleRemoveExperience}
            handlePersonalChange={handlePersonalChange}
            handleEducationChange={handleEducationChange}
            handleExperienceChange={handleExperienceChange}
          />
          <ReactToPrint
            /* trigger= */
            content={() => this.componentRef}
          />
          <Resume passState={this.state} ref={el => (this.componentRef = el)} />
        </main>
      </div>
    );
  }
}

export default App;
