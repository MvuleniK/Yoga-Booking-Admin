import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateClass from './components/CreateClass';
import ShowClassList from './components/ShowClassList';
import ShowClassDetails from './components/ShowClassDetails';
import UpdateClassInfo from './components/UpdateClassInfo';
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import AuthContext from './components/AuthContext';
import CreateBooking from "./components/CreateBooking";
import ClassBookings from "./components/ShowClassBookings";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/create-yoga_class' element={<CreateClass />} />
          <Route path='/edit-yoga_class/:id' element={<UpdateClassInfo />} />
          <Route path='/show-yoga_class/:id' element={<ShowClassDetails />} />
          <Route path='/showClassList' element={<ShowClassList/>} />

          <Route path='/createClass' element={<CreateClass />} />
          <Route path='/updateClass' element={<UpdateClassInfo />} />
          <Route path='/showClassDetails' element={<ShowClassDetails />} />
          <Route path='/showClassList' element={<ShowClassList/>} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/createBooking' element={<CreateBooking/>}/>
          <Route path='/showBookings' element={<ClassBookings/>}/>

          <Route path='/auth' element={<AuthContext/>}/>
 


        </Routes>
      </div>
    </Router>
  );
};

export default App;
