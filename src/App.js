
import './App.css';
import Home from "./pages/Home.jsx"
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Guidelines from './pages/Guidelines';
import Registration from './pages/Registration';
import Committee from './pages/Committee'
import { footerData } from './data/data';
import CollapsibleNav from './Components/CollapsibleNav';
import FooterMain from './Components/FooterMain';
import PastProceedings from './pages/PastProceedings';
import Sidebar from './Components/Sidebar';
import Login from './pages/Login';
import Venue from './pages/Venue';
import Submission from './pages/Submission';

function App() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 300);
        const smoothTransition = scrollTop > 290 && scrollTop < 310;
        document.documentElement.style.transition = smoothTransition ? 'all 0.3s ease-in-out' : 'none';
      }, 100); // Debounce delay
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer); // Clear timeout on component unmount
    };
  }, []);
  


  return (
    <div className={`bg-bgblue  `}  >
    
            <div className="">
            <BrowserRouter> 
            
            <div className="sticky top-0 z-50 shadow drop-shadow-sm">
              <CollapsibleNav isScrolled={isScrolled}/>
            </div>
            <div 
            className= {` z-50 ${isScrolled ? "top-0" : ""} overflow-hidden hidden lg:block fixed lg:w-full  lg:pl-2 bg-white drop-shadow-lg`}>
              <Sidebar/>
            </div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/guidelines' element={<Guidelines />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/submission' element={<Submission/>} />
                <Route path='/committee' element={<Committee />} />
                <Route path='/pastProceedings' element={<PastProceedings/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/venue' element={<Venue/>}/>
              </Routes>
            </BrowserRouter>
            </div>


        <div className=" footer">
          <FooterMain footerData={footerData}/>

        </div>

    </div>
  );
}

export default App;
