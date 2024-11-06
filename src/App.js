import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Inbox from './pages/inbox'
import Dashboard from './pages/dashboard';
import PushNotification from './pages/push-notification';
import Billing from './pages/billing'
import UserInfo from './pages/user-info'
import SignOut from './pages/sign-out'
import Settings from './pages/settings'
import PageNotFound from './pages/page-not-found';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Navbar />
        <div className="flex-1 p-2 overflow-y-auto">
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/' element={<Navigate to='/dashboard' />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/inbox' element={<Inbox />}></Route>
            <Route path='/notification' element={<PushNotification />}></Route>
            <Route path='/billing' element={<Billing />}></Route >
            <Route path='/user-info' element={<UserInfo />}></Route >
            <Route path='/sign-out' element={<SignOut />}></Route >
            <Route path='/settings' element={<Settings />}></Route >
            <Route path='*' element={<PageNotFound />}></Route >
          </Routes>

        </div>
      </div>
    </Router>
  );
};

export default App;
