import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Componets/Login';
import Register from './Componets/Login/Register'
import Dashboard from './Componets/Dashboard'
import Add_Movies from './Componets/Dashboard/Add_Movies';
import Add_Event from './Componets/Dashboard/Add_Event';
import Add_Sport from './Componets/Dashboard/Add_Sport';
import Add_About from './Componets/Dashboard/Add_About';
import Showmoive from './Componets/Dashboard/Showmovie';
import Show from './Componets/Dashboard/index'
import Add_Blog from './Componets/Dashboard/Add_Blog';

function App() {
  return (
    <div className="theme-cyan">
      <Routes>
        <Route path='/' element={(window.localStorage.getItem("uid") !== null ? <Dashboard data={""} /> : <Login />)} />
        <Route path='/Register' element={<Register />} />
        <Route path='/AddMovies' element={(window.localStorage.getItem("uid") == null ? <Login /> : <Add_Movies />)} />
        <Route path='/AddEvent' element={(window.localStorage.getItem("uid") == null ? <Login /> : <Add_Event />)} />
        <Route path='/AddSport' element={(window.localStorage.getItem("uid") == null ? <Login /> : <Add_Sport />)} />
        <Route path='/AddAbout' element={(window.localStorage.getItem("uid") == null ? <Login /> : <Add_About />)} />
        <Route path='/Showmovie' element={(window.localStorage.getItem("uid") == null ? <Login /> : <Showmoive />)} />
        <Route path='/AddBlog' element={(window.localStorage.getItem("uid") == null ? <Login /> : <Add_Blog />)} />
        <Route path='/index' element={(window.localStorage.getItem("uid") == null ? <Login /> : <index />)} />

      </Routes>
    </div>
  );
}

export default App;
