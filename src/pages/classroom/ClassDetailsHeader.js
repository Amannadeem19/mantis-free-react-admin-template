
import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';




const ClassSidebar = () =>{
  return (
   
    <Sidebar 
    className='bg-blue-500'
    >
      <Sidebar.Items  
      >
        <Sidebar.ItemGroup 
        className='text-blue-500 text-lg'
        >
          <Sidebar.Item href="#" icon={HiChartPie}>
           Home
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="Announcement">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
           Assignments
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Project Management
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

  );
}
export default ClassSidebar;