import './Style.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Index from './Component/Index';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Signup from './Component/Signup';
import CountryInformation from './Component/CountryInformation';
import Login from './Component/Login';




function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        

        <Route path='/' element={<Index />} />
       <Route  path='/Home' element={<Home/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/CountryInformation' element={<CountryInformation />} />
        <Route path='Login' element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
