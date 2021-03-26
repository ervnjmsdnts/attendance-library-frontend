import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { getBorrowedBook } from '../../../../api/Library/Get';

const BorrowedBook = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const apiBorrowedBook = async () => setBorrowedBooks(await getBorrowedBook());

  useEffect(() => {
    apiBorrowedBook();
  }, []);

  return (
    <div className='card w-50'>
      <div className='card-header'>
        <h2>Borrowed Book</h2>
      </div>
      <div className='card-body'>
        <table className='table'>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Book</th>
              <th>Borrowed Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((borrowedBook) => {
              const date = new Date(borrowedBook.date_borrowed);
              const returnDate = date.setDate(date.getDate() + 7);
              return (
                <tr key={borrowedBook.id}>
                  <td>{`${borrowedBook.last_name}, ${borrowedBook.first_name}`}</td>
                  <td>{borrowedBook.book}</td>
                  <td>
                    <Moment format='dddd, MMMM DD YYYY'>
                      {borrowedBook.date_borrowed}
                    </Moment>
                  </td>
                  <td>
                    <Moment format='dddd, MMMM DD YYYY'>{returnDate}</Moment>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowedBook;
