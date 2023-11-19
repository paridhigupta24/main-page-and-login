
import Contact from './pages/contact';
import About from './pages/about';
import Index from './pages/index';
import Login from './pages/login';
import Signup from "./pages/signup";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
       
      
      </Routes>
    </Router>

    
    </>
  );
}

export default App;
