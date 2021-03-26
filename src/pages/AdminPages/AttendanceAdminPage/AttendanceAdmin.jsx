import React from 'react';
import Section from './SectionPage/Section';
import SectionTable from './SectionPage/SectionTable';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Dashboard from './AttendancePage/Attendance';

const AttendanceAdmin = () => {
  const { path } = useRouteMatch();
  return (
    <div className='container-fluid'>
      <Switch>
        <Route path={path} exact>
          <div className='d-flex flex-column align-items-center w-100'>
            <Dashboard />
          </div>
        </Route>
        <Route path={`${path}/section`} exact>
          <div className='d-flex flex-column align-items-center w-100'>
            <Section />
            <SectionTable />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default AttendanceAdmin;
