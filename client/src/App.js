import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Recorder from './pages/Recorder';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';

axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true;

const App =() => {
  return (
    <div>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recorder' element={<Recorder />} />
      </Routes>
    </div>
  );
}

export default App;
