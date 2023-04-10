import {Routes,Route} from 'react-router-dom'
import Sidebar from './Sidebar';
import AdminDashbord from './AdminDashbord';
import AddBooks from './AddBooks';
import AddUsers from './AddUsers';
import BookList from './BookList';
import ReadBook from './ReadBook';
import UserList from './UserList';



const AdminPortal = () => {
  return (
      <div className="adminPortal">
        <Sidebar/>
        <Routes>
            <Route path='/'  element={<AdminDashbord/>}/>
            <Route path='/addbooks'  element={<AddBooks />}/>
            <Route path='/adduser'  element={<AddUsers />}/>
            <Route path='/booklist'  element={<BookList />}/>
            <Route path='/userlist'  element={<UserList />}/>
            <Route path='/booklist/:id'  element={<ReadBook />}/>
        </Routes>
      </div>
  )
}

export default AdminPortal;