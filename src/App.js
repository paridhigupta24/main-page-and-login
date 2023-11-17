
import Contact from './pages/contact';
import About from './pages/about';
import Index from './pages/index';
import DoctorProfile from './pages/DoctorProfile';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Portfolio from './pages/portfolio';
import Appointments from './pages/Appointments';
import AppointmentDetails from './pages/AppointmentDetails';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/DoctorProfile' element={<DoctorProfile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path="/appointment-details/:id" element={<AppointmentDetails />} />
      </Routes>
    </Router>

    
    </>
  );
}

export default App;
