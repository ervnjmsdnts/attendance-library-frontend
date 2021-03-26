import React, {useState} from 'react'
import LibraryAttendance from './LibraryAttendance';
import LibraryBorrow from './LibraryBorrow';

const Library = () => {
  const [isBorrowBooks, setIsBorrowBooks] = useState(true);
  const [isAttendance, setIsAttendance] = useState(false);

  const showBorrowBooks = () => {
    setIsBorrowBooks(true);
    setIsAttendance(false);
  }

  const showAttendance = () => {
    setIsAttendance(true);
    setIsBorrowBooks(false);
  }

  return (
    <div>
      <button className='btn btn-danger' onClick={showBorrowBooks}>
        Borrow Book
      </button>
      <button className='btn btn-danger ml-3' onClick={showAttendance}>
        Library Attendance
      </button>
      <div className='card mt-3'>
        <div className='card-header'>
          <h3>{isBorrowBooks ? 'Borrowing Books' : 'Library Attendance'}</h3>
        </div>
        <div className='card-body'>
          {isBorrowBooks && <LibraryBorrow />}
          {isAttendance && <LibraryAttendance />}
        </div>
      </div>
    </div>
  );
}

export default Library

