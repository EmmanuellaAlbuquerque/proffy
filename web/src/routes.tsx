import React, { Profiler } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Lading from './pages/Landing';
import Login from './pages/Login';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import SignUp from './pages/SignUp';
import SignUpCompleted from './pages/SignUpCompleted';
import ForgotPassword from './pages/ForgotPassword';
import ResetCompleted from './pages/ResetCompleted';
import Profile from './pages/Profile';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Lading} />
      <Route path="/profile" component={Profile} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signedup" component={SignUpCompleted} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/reset" component={ResetCompleted} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
