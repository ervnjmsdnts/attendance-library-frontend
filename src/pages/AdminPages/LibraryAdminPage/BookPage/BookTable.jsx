import React, { useState, useEffect } from 'react';
import { deleteItem } from '../../../../api/Library/Delete';
import { getBook } from '../../../../api/Library/Get';

const BookTable = () => {
  const [books, setBooks] = useState([]);

  const apiBooks = async () => setBooks(await getBook());

  useEffect(() => {
    apiBooks();
  }, []);

  return (
    <div className='card card-body w-50'>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.name}</td>
              <td className='d-flex justify-content-between'>
                {book.category}
                <button
                  className='btn btn-danger'
                  onClick={() => deleteItem('book', book.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
