import React, { useEffect, useState } from 'react';
import { getSections } from '../../../api/Library/Get';
import { postStudentLibraryAttendance } from '../../../api/Library/Post';

const LibraryAttendance = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sections, setSections] = useState([]);
  const [sectionLevel, setSectionLevel] = useState('');
  const [sectionName, setSectionName] = useState('');

  const apiSection = async () => setSections(await getSections());

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
    await postStudentLibraryAttendance({
      first_name: firstName,
      last_name: lastName,
      section: sectionName,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-row'>
        <div className='form-group col-md'>
          <label htmlFor='firstNameForm'>First Name</label>
          <input
            type='text'
            className='form-control'
            id='firstNameForm'
            placeholder='Enter first name'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-group col-md'>
          <label htmlFor='lastNameForm'>Last Name</label>
          <input
            type='text'
            className='form-control'
            id='lastNameForm'
            placeholder='Enter last name'
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
              <option key={level} value={level}>
                {level}
              </option>
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
        Log
      </button>
    </form>
  );
};

export default LibraryAttendance;
