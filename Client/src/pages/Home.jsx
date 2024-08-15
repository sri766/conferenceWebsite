import React,{useRef,useState} from 'react'
import ImportantDates from '../Components/Dates'
import Body from '../Components/Body'
import Host from '../Components/Host'
import {importantDatesData,About, aboutNIT, Topics, Details, AboutId } from '../data/data'
import Announcement from '../Components/Announcements'
import CallForPapers from '../Components/CallForPapers'
import AboutID from '../Components/AboutID'
import InfiniteScrollReel from '../Components/InfiniteScrollReel'

const Home = () => {

  const [active,setActive]=useState(false);
  const handleMouseHover=()=>{
    setActive(true);
  }
  const handleMouseOut=()=>{
    setActive(false);
  }
  const announcementsRef = useRef(null);
  const datesRef = useRef(null);



  ;
  const announcementsLength=Topics.length;
  const datesLength=importantDatesData.length;
  let maxOfAll=Math.max(announcementsLength,datesLength);


  return (
    <div className=" bg-bgmain">
      <div className=" my-2 ">
        <div className='mt-20'>
          <InfiniteScrollReel data={importantDatesData}/>
        </div>

        <div className=" bodyContainer lg:m-8 lg:p-10 sm:m-20">
          <div className=" text-justify">
            <Body about={About}/>
          </div>
          <div id='tracks' className="my-3 text-justify">
            <Host aboutNIT={aboutNIT}/>
          </div>
          <div className=" text-justify">
            <AboutID aboutId={AboutId}/>
          </div>
          <div className="my-3 text-justify">
            <CallForPapers Details={Details}/>
          </div>
          
          <div className="cardsContainer lg:my-2 lg:flex lg:items-stretch ">
            <div ref={announcementsRef} onMouseOver={handleMouseHover} onMouseOut={handleMouseOut} 
            className={ `${active ? "lg:font-bold" : "" } hover:w-full lg:w-2/3  my-2` } id="announcements">
              <Announcement title="CallForPaper" announcements={Topics} maxlength={maxOfAll}/>
            </div>
            <div ref={datesRef} className= {` ${active ? "lg:font-bold" : "" } lg:mx-4 lg:w-max  my-2`} id="dates">
              <ImportantDates title=" Important Dates" importantDatesData={importantDatesData} maxlength={maxOfAll}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Home