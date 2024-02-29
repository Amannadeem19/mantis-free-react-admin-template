import React from 'react'
import {useLocation} from 'react-router-dom'
import ClassSidebar from './ClassDetailsHeader';
import Announcement from './Announcement';
// import Sidebar from './Sidebar';
function ClassDetails() {
    const {state} = useLocation();
    const {teacher, subject} = state;
  return (
    <div style={{display:'flex'}}>
    <ClassSidebar/>
    <Announcement  />

    </div>
  )
}

export default ClassDetails;