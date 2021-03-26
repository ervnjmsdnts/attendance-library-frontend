import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { getStudentLibraryAttendance } from '../../../../api/Library/Get';

const LibraryAttendance = () => {
  const [students, setStudents] = useState([]);

  const apiLibraryAttendance = async () =>
    setStudents(await getStudentLibraryAttendance());

  useEffect(() => {
    apiLibraryAttendance();
  }, []);

  return (
    <div className='card card-body w-75'>
      <div className='card-header'>
        <h2>Library Attendance</h2>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Section Level</th>
            <th>Section Name</th>
            <th>Attendance DateTime</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{`${student.last_name}, ${student.first_name}`}</td>
                <td>{student.section.level}</td>
                <td>{student.section.name}</td>
                <td>
                  <Moment format='llll'>{student.attendance_date}</Moment>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryAttendance;
