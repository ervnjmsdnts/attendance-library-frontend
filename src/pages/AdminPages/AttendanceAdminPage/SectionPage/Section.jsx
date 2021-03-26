import React, { useState } from 'react';
import { postSection } from '../../../../api/Attendance/Post';

const Section = () => {
  const [level, setLevel] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    await postSection({ level, name });
  };

  return (
    <div className='card w-50 mb-3'>
      <div className='card-header'>
        <h2>Section</h2>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='sectionLevelForm'>Section Level</label>
            <input
              type='number'
              id='sectionLevelForm'
              className='form-control'
              placeholder='Enter section level'
              onChange={(e) => setLevel(e.target.value)}
              min='1'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='sectionNameForm'>Section Name</label>
            <input
              type='text'
              id='sectionNameForm'
              className='form-control'
              placeholder='Enter section name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section;
