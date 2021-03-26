import React, { useState, useEffect } from 'react';
import { getCategory } from '../../../../api/Library/Get';
import { postBook } from '../../../../api/Library/Post';

const Book = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const apiCategory = async () => {
    const categoryData = await getCategory();
    setCategories(categoryData);
  };

  const handleSubmit = async () => await postBook({name, category});

  useEffect(() => {
    apiCategory();
  }, []);

  return (
    <div className='card w-50 mb-3'>
      <div className='card-header'>
        <h2>Book</h2>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='bookNameForm'>Name</label>
            <input
              type='text'
              className='form-control'
              id='bookNameForm'
              placeholder='Enter book name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='bookCategoryForm'>Category</label>
            <select
              id='bookCategoryForm'
              className='form-control'
              defaultValue='default'
              onChange={(e) => setCategory(e.target.value)}>
              <option value='default' disabled>
                Choose...
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button className='btn btn-primary'>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Book;
