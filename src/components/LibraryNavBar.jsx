import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const LibraryNavBar = () => {
  const { url } = useRouteMatch();

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-3'>
      <Link className='navbar-brand' to={url}>
        Library Admin
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-link' to={url}>
            Borrowed Books
          </Link>
          <Link className='nav-link' to={`${url}/library_attendance`}>
            Library Attendance
          </Link>
          <Link className='nav-link' to={`${url}/category`}>
            Categories
          </Link>
          <Link className='nav-link' to={`${url}/book`}>
            Books
          </Link>
          <Link className='nav-link' to={`${url}/section`}>
            Sections
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LibraryNavBar;
