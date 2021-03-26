import React from 'react';
import { AttendanceAdmin, AttendanceLibrary, LibraryAdmin } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AttendanceNavBar from './components/AttendanceNavBar';
import LibraryNavBar from './components/LibraryNavBar';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <AttendanceLibrary />
          </Route>
          <Route path='/attendance_admin'>
            <AttendanceNavBar />
            <AttendanceAdmin />
          </Route>
          <Route path='/library_admin'>
            <LibraryNavBar />
            <LibraryAdmin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
