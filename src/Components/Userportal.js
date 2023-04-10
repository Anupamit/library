import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookList from './BookList'
import ReadBook from './ReadBook'
import UserSidebar from './UserSidebar'
import UserDashbord from './UserDashbord'

const Userportal = () => {
  return (
    <div className='userportal'>
        <UserSidebar/>
        <Routes>
            <Route path='/' element={<UserDashbord/>}/>
            <Route path='/booklist' element={<BookList/>}></Route>
            <Route path='/booklist/:id'  element={<ReadBook/>}/>
        </Routes>
    </div>
  )
}

export default Userportal
