import React from 'react'
import { Card } from 'flowbite-react'
import brochure from "../resources/brochure.pdf"
import { Link, Link2 } from 'lucide-react';


const Announcement = (props) => {
  let announcements=[...props.announcements];
  let maxOfAll=props.maxlength+2;
  
  

  while(props.announcements.length<maxOfAll){
      announcements.push({});
      maxOfAll--;
  }
  console.log(props.announcements);
  return (
    <div className="">
        <div className="">
        <Card style={{height:"430px"}} className='relative hover:shadow-2xl drop-shadow-xl '>
      <div className=""></div>
      <div className="absolute top-4  flex items-center justify-center font-textFont">
        <h5 className=" text-xl font-semibold leading-none text-textmain dark:text-white ">
          Topics
        </h5>
        
      </div>
    <div className="flow-root">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        
      {announcements.map((announcement) => (
        <li key={announcement.id} className="py-2">
          <div className="flex items-center space-x-2">
            <div className="min-w-0 top-2 font-textFont">
              <p className="truncate text-md font-medium text-gray-900 dark:text-white" title={announcement.content}>
                {announcement.content}
              </p>
            </div>
          </div>
        </li>
      ))}
        <li>
        <div className="inline-flex p-2 items-center text-base font-semibold text-gray-900 dark:text-white">
              <a href='http://localhost:3000/submission' className=" inline-flex items-center hover:underline">
                  Click here to submit
                <Link2 size={18}/>
              </a>
            </div>
       
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <a href={brochure} target='_blank' className=" inline-flex items-center font-textFont hover:underline">
                  Download Brochure
                <Link size={18}/>
              </a>
            </div>
       </li>
      </ul>
    </div>
  </Card>
</div>
    </div>
  )
}

export default Announcement