import React, { useState, useEffect } from 'react';
import { getBook } from '../../../api/Library/Get';
import { postBorrowedBook } from '../../../api/Library/Post';

const LibraryBorrow = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const [book, setBook] = useState('');
  const [categories, setCategories] = useState([]);

  const apiBook = async () => setCategories(await getBook());

  useEffect(() => {
    apiBook();
  }, []);

  const uniqueCategory = categories
    .map((category) => category.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  const filteredBooks = categories.filter(
    (category) => category.category === bookCategory
  );

  const handleSubmit = async () => {
    await postBorrowedBook({
      first_name: firstName,
      last_name: lastName,
      book,
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
          <label htmlFor='bookCategoryForm'>Book Category</label>
          <select
            id='bookCategoryForm'
            className='form-control'
            defaultValue='default'
            onChange={(e) => setBookCategory(e.target.value)}>
            <option value='default' disabled>
              Choose...
            </option>
            {uniqueCategory.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group col-md'>
          <label htmlFor='bookForm'>Book</label>
          <select
            id='bookForm'
            className='form-control'
            defaultValue='default'
            onChange={(e) => setBook(e.target.value)}>
            <option value='default' disabled>
              Choose...
            </option>
            {filteredBooks.map((book) => (
              <option key={book.id} value={book.name}>
                {book.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button type='submit' className='btn btn-primary'>
        Borrow
      </button>
    </form>
  );
};

export default LibraryBorrow;
