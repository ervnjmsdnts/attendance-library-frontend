import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Category from './CategoryPage/Category';
import CategoryTable from './CategoryPage/CategoryTable';
import Book from './BookPage/Book';
import BookTable from './BookPage/BookTable';
import BorrowedBook from './BorrowedBookPage/BorrowedBook';
import Section from './SectionPage/Section';
import SectionTable from './SectionPage/SectionTable';
import LibraryAttendance from './LibraryAttendancePage/LibraryAttendance';

const LibraryAdmin = () => {
  const { path } = useRouteMatch();
  return (
    <div className='container-fluid'>
      <Switch>
        <Route path={path} exact>
          <div className='d-flex flex-column align-items-center w-100'>
            <BorrowedBook />
          </div>
        </Route>
        <Route path={`${path}/library_attendance`}>
          <div className='d-flex flex-column align-items-center w-100'>
            <LibraryAttendance/>
          </div>
        </Route>
        <Route path={`${path}/category`} exact>
          <div className='d-flex flex-column align-items-center w-100'>
            <Category />
            <CategoryTable />
          </div>
        </Route>
        <Route path={`${path}/book`}>
          <div className='d-flex flex-column align-items-center w-100'>
            <Book />
            <BookTable />
          </div>
        </Route>
        <Route path={`${path}/section`}>
          <div className='d-flex flex-column align-items-center w-100'>
            <Section/>
            <SectionTable/>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default LibraryAdmin;
