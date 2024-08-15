
import './App.css';
import Home from "./pages/Home.jsx"
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//pages
import Guidelines from './pages/Guidelines';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Venue from './pages/Venue';
import Committee from './pages/Committee'
import Submission from './pages/Submission';
import Contact from './pages/Contact';

//components
import CollapsibleNav from './Components/CollapsibleNav';
import Sidebar from './Components/Sidebar';
import { footerData } from './data/data';
import FooterMain from './Components/FooterMain';

function App() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const scrollTop = window.scrollY;
        const shouldBeScrolled = scrollTop > 10;
        if (shouldBeScrolled !== isScrolled) {
          setIsScrolled(shouldBeScrolled);
          const smoothTransition = scrollTop > 12 && scrollTop < 19;
          document.documentElement.style.transition = smoothTransition ? 'all 0.5s cubic-bezier(0.42, 0, 0.58, 1)' : 'none';
        }
      }, 100); // Debounce delay
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer); // Clear timeout on component unmount
    };
  }, [isScrolled]); // Listen to changes in isScrolled state

  


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
                <Route path='/registration' element={<Registration />} />
                <Route path='/submission' element={<Submission/>} />
                <Route path='/guidelines' element={<Guidelines />} />
                <Route path='/committee' element={<Committee />} />
                <Route path='/venue' element={<Venue/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/login' element={<Login/>}/>
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
