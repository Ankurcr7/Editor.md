
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Howtouse from './components/Howtouse';
import Aboutmarkdown from './components/Aboutmarkdown';
import ThemeOption from './components/ThemeOption'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  return (
    <>
    <div className='loading-container' id='loader-container'>
      <div className='loading-animation' id="loader"></div>
    </div>
    <Router>
      <Navbar/>
      <div className='theme-options'>
      <h2 style={{
        fontSize:"18px"
      }}>Theme Option: </h2>
        <ThemeOption theme="dark"/>
        <ThemeOption theme="light"/>
      </div>
      <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/aboutmarkdown' element={<Aboutmarkdown/>}  />
          <Route path='/howtouse' element={<Howtouse/>}  />

      </Routes>

    </Router>
    </>
  );
}

export default App;
