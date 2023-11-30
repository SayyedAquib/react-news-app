import React, {useState} from 'react'
import { Outlet } from 'react-router-dom';
import Home from './Home';

function Body() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default Body