import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Payment from './Components/Payment';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
