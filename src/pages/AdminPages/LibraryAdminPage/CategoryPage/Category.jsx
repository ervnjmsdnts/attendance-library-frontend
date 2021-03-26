import React, { useState } from 'react';
import { postCategory } from '../../../../api/Library/Post';

const Category = () => {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    await postCategory({ name });
  };

  return (
    <div className='card w-50 mb-3'>
      <div className='card-header'>
        <h2>Category</h2>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='categoryNameForm'>Name</label>
            <input
              type='text'
              className='form-control'
              id='categoryNameForm'
              placeholder='Enter category name'
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

export default Category;
