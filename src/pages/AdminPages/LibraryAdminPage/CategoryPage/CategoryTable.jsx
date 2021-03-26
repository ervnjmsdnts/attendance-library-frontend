import React, { useState, useEffect } from 'react';
import { deleteItem } from '../../../../api/Library/Delete';
import { getCategory } from '../../../../api/Library/Get';

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);

  const apiCategory = async () => {
    const categoryData = await getCategory();
    setCategories(categoryData);
  };

  useEffect(() => {
    apiCategory();
  }, []);

  return (
    <div className='card card-body w-50'>
      <table className='table'>
        <thead>
          <tr>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className='d-flex justify-content-between'>
                {category.name}
                <button
                  className='btn btn-danger'
                  onClick={() => deleteItem('category', category.id)}>
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

export default CategoryTable;
