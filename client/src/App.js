import './App.css';
import {BrowserRouter as Router,Route, Link, Routes} from "react-router-dom";
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
import AlternateCreate from './Pages/AlternateCreate';
import { NavLink } from 'react-router-dom';
import FocusPost from './Pages/FocusPost';
import Register from './Pages/Register';
import Login from './Pages/Login';

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">Podia</div>
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink 
            to="/createpost" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Create Post
          </NavLink>
          <NavLink 
            to="/register" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Register
          </NavLink>
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
}


function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
             
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
        <Route path='/form'element={<AlternateCreate/>}/>
        <Route path='/post/:id' element={<FocusPost/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </Router>

    </div>
  )
}

export default App;
