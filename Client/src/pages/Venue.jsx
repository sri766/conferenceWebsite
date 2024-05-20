import React from 'react'




import bus from "../resources/bus.png"
import train from "../resources/train.jpeg"
import mechanicalSciencesBuilding from "../resources/mechanicalSciencesBuilding.jpg"
import bisraMundaAirport from "../resources/birsa_munda_airport.jpg"
import jharsugudaAirport from "../resources/jharsuguda-airport.avif"
import bhubhaneshwarAirport from "../resources/bhubaneshwar_airport.png"
import guestHouse from "../resources/nit_gst.jpg"

const Venue = () => {
  return (
    <div className='body lg:mx-48 lg:ml-64 text-justify mt-32 sm:mx-10'>
        <div className="venue">
        {/* <h1>manohaoiho</h1> */}
        <h5 className="my-8 lg:text-4xl sm:text-3xl font-bold text-textmain font-textFont dark:text-gray-400">
              Mechanical Sciences Building, Nit Rourkela
            </h5>
            <div className="nitrMap">
                <div className="card bg-white flex font-textFont " >
                    <div className="photo">
                    <a className='hover:scale-105' href='https://goo.gl/maps/5HhkQW8GWPcfGfEX8' target='_blank'>
                    <img 
                    src={mechanicalSciencesBuilding}
                    
                     className='relative hover:drop-shadow-xl drop-shadow-lg w-full h-96' alt="nitRourkelaImage">
                    </img>
                    <button
                            type="button"
                            className="absolute bottom-2 bg-textmain text-xl font-bold hover:ring-2 hover:ring-white px-5 py-2.5 text-center text-white  hover:text-white "
                            >
                            View On Map     
                            </button>
                    </a>
                    </div>
                </div>
            </div>
            <div className="nearbyAirPorts">
            <h5 className="my-8 text-4xl font-bold text-textmain font-textFont dark:text-gray-400 ">
              Near By AirPorts
            </h5>
                <div className="container lg:flex sm:mb-2 lg:w-full lg:mb-auto font-textFont">
                    <div className="  jharsuguda drop-shadow-lg lg:w-1/3 bg-white rounded-xl ">
                        <img src={jharsugudaAirport} alt='jharsuguda airport' 
                        className='w-full lg:h-64 rounded-t-xl '>

                        </img>
                        <h3 className='mt-4 text-3xl text-center  font-semibold leading-none text-textmain dark:text-white '>Veer Surendra Sai Airport (Jharsuguda)</h3>
                        <p className='text-md font-sm mt-4 lg:px-4'> 
                        You can catch direct flights from Delhi and Hyderabad to here.</p>
                        <div className=' py-2 d-flex justify-center align-middle '>
                            <a href='https://www.flightconnections.com/flights-to-jharsuguda-jrg' target='_blank'>
                                <button
                                    type="submit"
                                    href=''
                                    className=" my-2 rounded-sm drop-shadow-xl hover:bg bg-textmain text-white ring-2 ring-textmain  px-4 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none "
                                    >Check Flights
                                </button>
                            </a>
                           
                            </div>
                    </div>
                    <div className=" mx-3 ranchi drop-shadow-lg lg:w-1/3 bg-white rounded-xl ">
                        <img src={bisraMundaAirport} alt='ranchi airport' 
                        className='w-full lg:h-64 rounded-t-xl '>

                        </img>
                        <h3 className='mt-4 text-3xl text-center  font-semibold leading-none text-textmain dark:text-white '>
                        Bisra Munda Airport (Ranchi)</h3>
                        <p className='text-md font-sm mt-4 lg:px-4'> 
                        You can catch direct flights from almost every major city in India.</p>
                        <div className=' py-2 d-flex justify-center align-middle '>
                            <a href='https://www.flightconnections.com/flights-to-ranchi-ixr' target='_blank'>
                                <button
                                    type="submit"
                                    href=''
                                    className=" my-2  rounded-sm drop-shadow-xl hover:bg bg-textmain text-white ring-2 ring-textmain  px-4 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none "
                                    >Check Flights
                                </button>
                            </a>
                           
                            </div>
                    </div>
                    <div className="  bhubhaneshwar drop-shadow-lg lg:w-1/3 bg-white rounded-xl ">
                        <img src={bhubhaneshwarAirport} alt='bhubhaneshwar airport' 
                        className='w-full lg:h-64 rounded-t-xl '>

                        </img>
                        <h3 className='mt-4 text-2xl text-center  font-semibold leading-none text-textmain dark:text-white '>
                        Biju Patnaik Airport(Bhubhaneshwar)</h3>
                        <p className='text-md font-sm mt-4 lg:px-4'> 
                        Has more number of flights among 3 options. From all over India flights are available.</p>
                        <div className=' py-2 d-flex justify-center align-middle '>
                            <a href='https://www.flightconnections.com/flights-from-bhubaneswar-bbi' target='_blank'>
                                <button
                                    type="submit"
                                    href=''
                                    className=" my-2  rounded-sm drop-shadow-xl hover:bg bg-textmain text-white ring-2 ring-textmain  px-4 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none"
                                    >Check Flights
                                </button>
                            </a>
                           
                            </div>
                    </div>
                </div>
                
            </div>
            <div className="otherAlternatives font-textFont">
            <h5 className="my-8 text-4xl font-bold text-textmain dark:text-gray-400 ">
              Other Alternatives
            </h5>
                <div className="container lg:flex lg:w-full ">
                    <div className="  jharsuguda drop-shadow-lg lg:w-1/2 bg-white rounded-xl ">
                        <img src={train} alt='jharsuguda airport' 
                        className='w-full lg:h-64 rounded-t-xl '>

                        </img>
                        <h3 className='mt-4 text-3xl text-center  font-semibold leading-none text-textmain dark:text-white '>
                        Indian Railways </h3>
                        <p className='text-md font-semibold mt-4 lg:px-4'> 
                        Rourkela Junction is well connected to all cities of India by Indian Railways.</p>
                        <div className=' py-2 d-flex justify-center align-middle '>
                            <a href='https://www.irctc.co.in/nget/train-search' target='_blank'>
                                <button
                                    type="submit"
                                    href=''
                                    className=" my-2  rounded-sm drop-shadow-xl hover:bg bg-textmain text-white ring-2 ring-textmain  px-4 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none "
                                    >Check Trains
                                </button>
                            </a>
                           
                            </div>
                    </div>
                    <div className=" mx-3 ranchi drop-shadow-lg lg:w-1/2 bg-white rounded-xl ">
                        <img src={bus} alt='ranchi airport' 
                        className='w-full lg:h-64 rounded-t-xl '>

                        </img>
                        <h3 className='mt-4 text-3xl text-center  font-semibold leading-none text-textmain dark:text-white '>
                        By Road </h3>
                        <p className='text-md font-semibold mt-4 lg:px-4'> 
                        You can get here by road from Bhubhaneshwar,Ranchi& many cities through Bus & Cabs.</p>
                        <div className=' py-2 d-flex justify-center align-middle '>
                            <a href='https://www.abhibus.com/' target='_blank'>
                                <button
                                    type="submit"
                                    href=''
                                    className=" my-2  rounded-sm drop-shadow-xl bg-textmain text-white ring-2 ring-textmain  px-4 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none "
                                    >Check Buses
                                </button>
                            </a>
                           
                            </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        <div className="accommodation font-textFont">
            <div className="guestHouse">
                <h5 className="my-8 text-4xl font-bold text-textmain dark:text-gray-400 ">
                Accommodation
                </h5>
                <div className="nitrMap">
                <div className="card bg-white rounded-xl" >
                    <div className="photo">
                        <a className='hover:scale-105' href='https://guesthouse.nitrkl.ac.in/Users/HomePage.aspx' target='_blank'>
                        <img 
                        src={guestHouse}
                        
                        className='relative hover:drop-shadow-xl drop-shadow-lg w-full h-96  object-cover' alt="nitRourkelaImage">
                        </img>
                        <h1 className='absolute text-5xl drop-shadow-sm top-60 left-60 text-white font-semibold'>NIT Rourkela Guest House</h1>
                        <button
                            type="button"
                            className="absolute mt-4 bottom-2 bg-textmain text-xl font-bold  hover:ring-2 hover:ring-white  px-5 py-2.5 text-center   text-white hover:bg-transparent hover:text-white "
                            >
                            Book Now     
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>    
    
    
    
    </div>
  )
}

export default Venue