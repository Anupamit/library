import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Adminlogin from './Components/Adminlogin';
import Userlogin from './Components/Userlogin';
import AdminPortal from './Components/AdminPortal';
import Userportal from './Components/Userportal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/adminlogin' element={<Adminlogin/>}/>
          <Route path='/userlogin' element={<Userlogin/>}/>
          <Route path='/adminportal/*' element={<AdminPortal/>}/>
          <Route path='/userportal/*' element={<Userportal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
