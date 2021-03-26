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
        className='d-flex justify-content-center align-items-center flex-column'
        style={{ height: '100vh' }}>
        <img
          src='https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.0-9/17553468_764224753728501_3708580566717280012_n.png?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Nk_NdIX2i1EAX9GvjsQ&_nc_ht=scontent.fmnl17-4.fna&oh=de28ccdc73085cfb0c1f842904528db8&oe=6082FF56'
          alt='bec logo'
          style={{width: '16rem'}}
        />
        <br/>
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
