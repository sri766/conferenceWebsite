import React from 'react'
import { Footer } from 'flowbite-react'
const FooterMain = (props) => {
  // console.log(props.footerData[0].content)
  const footerData=props.footerData;
  return (
    <div className='mt-16'>
     <Footer bgDark={true}>
  <div className="w-full bg-footermain text-white">
    <div className="grid w-full grid-cols-2 gap-8 pt-8 px-6 md:grid-cols-4  text-white">

      {footerData.map((currFooter,ind)=>
        
        <div key={ind}>
        <Footer.Title title={currFooter.title} className='text-white' />
        <Footer.LinkGroup col={true}>

        {currFooter?.content?.map((currcontent,ind2)=>
            <Footer.Link key={ind2} className='text-white'>
                {currcontent}
            </Footer.Link>
        
        )}

          {/* <Footer.Link  className='text-white'>
            {currFooter.content[0]}
          </Footer.Link> */}
          
        </Footer.LinkGroup>
      </div>
      )}

      


      

      



     
    </div>
    <div className="w-full bg-footermain text-white  py- px-4 sm:flex sm:items-center sm:justify-center">
      <Footer.Copyright
        href="#"
        by="DV-NVC™"
        year={2024}
        className='text-white'
      />
    </div>
  </div>
</Footer>
    </div>
  )
}

export default FooterMain