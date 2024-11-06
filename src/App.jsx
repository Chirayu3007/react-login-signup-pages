import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ForgetPassword from './components/ForgetPassword';


function App() {

  return (
   <Register/>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/reset-password" element={<ForgetPassword />} />
    //   </Routes>
    // </Router>
  );
}

export default App
