import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Home';

import Home from './components/Home/Home'  

import HerdsmanLogin from './components/Herdsman/Login/page'
import Herdsman from './components/Herdsman/Home/page'
import HerdsmanProfile from './components/Herdsman/Profile/page'

import SlaughterLogin from './components/Slaughter/Login/page'
import Slaughter from './components/Slaughter/Home/page'
import SlaughterProfile from './components/Slaughter/Profile/page'

import RetailerLogin from './components/Retailer/Login/page'
import Retailer from './components/Retailer/Home/page'
import RetailerProfile from './components/Retailer/Profile/page'

import Login from './components/User/Login/page'
import Register from './components/User/Register/page'

import OrgsSignup from './components/Signup/Orgs/page'
import OrgsReferralSignup from './components/Signup/Orgs/refpage'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='admin' element={<Admin/>} /> */}

        {/* Herdsman Routes*/}
        <Route path='/herdsman'>
          <Route index element={<Herdsman />} />
          <Route path='signup'>
            <Route index element={<OrgsSignup />} />
            <Route path=':referralid' element={<OrgsReferralSignup />} />
          </Route>
          <Route path='signin' element={<HerdsmanLogin />}/>
          <Route path='profile' element={<HerdsmanProfile />} />
        </Route>

        {/* Slaughter Routes*/}
        <Route path='/slaughter'>
          <Route index element={<Slaughter />} />
          <Route path='signup'>
            <Route index element={<OrgsSignup />} />
            <Route path=':referralid' element={<OrgsReferralSignup />} />
          </Route>
          <Route path='signin' element={<SlaughterLogin />}/>
          <Route path='profile' element={<SlaughterProfile />} />
        </Route>

        {/* Retailer Routes*/}
        <Route path='/retailer'>
          <Route index element={<Retailer />} />
          <Route path='signup'>
            <Route index element={<OrgsSignup />} />
            <Route path=':referralid' element={<OrgsReferralSignup />} />
          </Route>
          <Route path='signin' element={<RetailerLogin />}/>
          <Route path='profile' element={<RetailerProfile />} />
        </Route>     

        {/* User Routes*/}
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route index element={<Home/>} />
 
        {/* Error Page Route */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;