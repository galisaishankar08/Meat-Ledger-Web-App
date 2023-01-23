import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './components/Home/Home'
// import Herdsman from './components/Herdsman/App'
// import Slaughter from './components/Slaughter/App'
// import Retailer from './components/Retailer/App'
// import Consumer from './components/Consumer/App'
// import Admin from './components/Admin/App'
import Login from './components/Login/Home'
import Register from './components/Register/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        {/* <Route index element={<Home/>} />
        <Route path='admin' element={<Admin/>} />
        <Route path='herdsman/*' element={<Herdsman/>} />
        <Route path='slaughter/*' element={<Slaughter/>} />
        <Route path='retailer/*' element={<Retailer/>} />
        <Route path='consumer/*' element={<Consumer/>} /> */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Router>
  );
}

export default App;