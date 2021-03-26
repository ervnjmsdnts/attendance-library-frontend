import React, { useEffect, useState } from 'react';
import { getSections } from '../../../api/Attendance/Get';
import { postStudentAttendance } from '../../../api/Attendance/Post';

const Attendance = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sections, setSections] = useState([]);
  const [sectionLevel, setSectionLevel] = useState('');
  const [sectionName, setSectionName] = useState('');

  const apiSection = async () => {
    try {
      const sectionData = await getSections();
      setSections(sectionData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    apiSection();
  }, []);

  //Get the unique section levels
  const uniqueSectionLevel = sections
    .map((section) => section.level)
    .filter((value, index, self) => self.indexOf(value) === index);

  //Filter the section
  const filteredSections = sections.filter(
    (section) => section.level === sectionLevel
  );

  const handleSubmit = async () => {
    await postStudentAttendance({
      first_name: firstName,
      last_name: lastName,
      section: sectionName,
    });
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <h2>Attendance</h2>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-row'>
            <div className='form-group col-md'>
              <label htmlFor='firstNameInputForm'>First Name</label>
              <input
                type='text'
                className='form-control'
                id='firstNameInputForm'
                placeholder='Enter your first name'
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='form-group col-md'>
              <label htmlFor='lastNameInputForm'>Last Name</label>
              <input
                type='text'
                className='form-control'
                id='lastNameInputForm'
                placeholder='Enter your last name'
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md'>
              <label htmlFor='sectionLevelSelectForm'>Section Level</label>
              <select
                id='sectionLevelSelectForm'
                className='form-control'
                defaultValue='default'
                onChange={(e) => setSectionLevel(e.target.value)}>
                <option value='default' disabled>
                  Choose...
                </option>
                {uniqueSectionLevel.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div className='form-group col-md'>
              <label htmlFor='sectionNameSelectForm'>Section Name</label>
              <select
                id='sectionNameSelectForm'
                className='form-control'
                defaultValue='default'
                onChange={(e) => setSectionName(e.target.value)}>
                <option value='default' disabled>
                  Choose...
                </option>
                {filteredSections.map((section) => (
                  <option value={section.name}>{section.name}</option>
                ))}
              </select>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>
            Attend
          </button>
        </form>
      </div>
    </div>
  );
}

export default Attendance;
