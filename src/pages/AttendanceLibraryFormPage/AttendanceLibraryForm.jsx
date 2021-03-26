import React, { useState } from 'react';
import Attendance from './Attendance/AttendanceForm';
import Library from './Library/LibraryForm';

const AttendanceLibraryForm = () => {
  const [isAttendance, setIsAttendance] = useState(true);
  const [isLibrary, setIsLibrary] = useState(false);

  const showAttendance = () => {
    setIsAttendance(true);
    setIsLibrary(false);
  };

  const showLibrary = () => {
    setIsLibrary(true);
    setIsAttendance(false);
  };

  return (
    <>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}>
        <div className='card' style={{ width: '64rem' }}>
          <div className='card-header'>
            <button className='btn btn-warning mr-3' onClick={showAttendance}>
              Attendance
            </button>
            <button className='btn btn-warning' onClick={showLibrary}>
              Library
            </button>
          </div>
          <div className='card-body'>
            {isAttendance && <Attendance />}
            {isLibrary && <Library />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceLibraryForm;
