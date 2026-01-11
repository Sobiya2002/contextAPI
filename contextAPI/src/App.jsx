import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

export default function App(){
  return(
    <Routes>
      <Route path ='/'
      element = {<Users />} />
      <Route path = '/users/:id'
      element={<UserDetails />} />
    </Routes>
  )
}
