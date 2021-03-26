import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { getStudentAttendance } from '../../../../api/Attendance/Get';

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  const apiStudentAttendance = async () => {
    const studentData = await getStudentAttendance();
    setStudents(studentData);
  };

  useEffect(() => {
    apiStudentAttendance();
  }, []);

  return (
    <div className='card card-body w-75'>
      <div className='card-header'>
        <h2>Attendance</h2>
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
            const time = new Date(student.attendance_date);
            const hour = time.getHours();
            const isPresent = hour <= 7 ? 'table-success' : 'table-danger';
            return (
              <tr key={student.id} className={isPresent}>
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

export default Dashboard;
