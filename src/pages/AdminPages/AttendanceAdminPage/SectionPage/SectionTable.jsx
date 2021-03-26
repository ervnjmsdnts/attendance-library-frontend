import React, { useState, useEffect } from 'react';
import { deleteItem } from '../../../../api/Attendance/Delete';
import { getSections } from '../../../../api/Attendance/Get';

const SectionTable = () => {
  const [sections, setSections] = useState([]);

  const apiSections = async () => {
    const sectionData = await getSections();
    setSections(sectionData);
  };

  useEffect(() => {
    apiSections();
  }, []);

  return (
    <div className='card card-body w-50'>
      <table className='table'>
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section) => (
            <tr key={section.id}>
              <td>{section.level}</td>
              <td className='d-flex justify-content-between'>
                {section.name}
                <button
                  className='btn btn-danger'
                  onClick={() => deleteItem('section', section.id)}>
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

export default SectionTable;
