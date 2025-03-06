import { BiSolidPlaneAlt } from "react-icons/bi";
import { RiCalendarEventLine } from "react-icons/ri";
import CustomDatePicker from "./CustomDatePicker";
import { FaPlaneDeparture } from "react-icons/fa6";
import PassengerSelector from "./PassengerSelector";
import TravelClassSelector from "./TravelClassSelector";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useFlights } from "../context/FlightContext"; // Import Context



function Main(){
    {/* ==== Obtain input from form element*/}
    const [ where, setWhere] = useState("");
    const [ to, setTo] = useState("");
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [classType, setClassType] = useState("");
    const [loading, setLoading] = useState(false);


    // Convert dates to YYYY-MM-DD format
    const formattedDateFrom = dateFrom.toISOString().split('T')[0];
    const formattedDateTo = dateTo ? new Date(dateTo).toISOString().split('T')[0] : "";

    // Defines navigation
    const navigate = useNavigate();
    const { setFlights } = useFlights(); // Use Context to store flights

    

    // Perform search logic here
    const fetchFlights = async () => {

        const options = {
            method: 'GET',
            url: import.meta.env.VITE_API_URL,
            params: {
              originSkyId: `${where}`,
              destinationSkyId: `${to}`,
              originEntityId: '27544008',
              destinationEntityId: '27537542',
              date: `${formattedDateFrom}`,
              cabinClass: classType || 'economy',
              adults: `${adults}`,
              sortBy: 'best',
              currency: 'USD',
              market: 'en-US',
              countryCode: 'US'
            },
            headers: {
              'x-rapidapi-key': import.meta.env.VITE_API_KEY,
              'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
            }
        };

        setLoading(true);
        try {
            const response = await axios.request(options);
            
            const Itineraries = response.data.data;
            const ItenerariesData = Itineraries.itineraries;
            console.log("Itineraries:", ItenerariesData);

            setFlights(ItenerariesData); // Store response in Context
        } catch (error) {
            console.error('Error fetching flights:', error);
        } finally {
            setLoading(false);
        }
    }

    {/* ==== Handle form submission ======= */}
    const handleSearch = async (e) => {
        e.preventDefault();
        console.log("From:", where);
        console.log("To:", to);
        console.log("Departure Date:", formattedDateFrom);
        console.log("Return Date:", formattedDateTo);
        console.log("Adults:", adults);
        console.log("Children:", children);
        console.log("Class Type:", classType);

        // Call the fetchFlights function
        await fetchFlights();

        // Navigate to the search results page after API call and storing flight data
        navigate("/flight-details"); 

    }

    
   
    

    return(
        <div className="container mx-auto">
            <div className=" bg-gray-400 ">
                <div className="p-6 mb-10 bg-cover bg-center md:p-9" 
                     style={{ backgroundImage: "url('/backgroundImage.png')" }}>
                    <br/>
                   <div className="text-center text-white mb-7">
                        <p className=" font-bold text-4xl ">
                            Prepare for Takeoff...on Cheapest Flights Around. 
                        </p>
                        <p className="text-lg md:text-2xl">Direct Search - Direct Price</p>
                    </div>

                    <div className="bg-white px-5 py-4 rounded-lg shadow-lg">
                         {/* Checkbox Section */}
                        <div className="flex gap-3 flex-wrap mb-1.5">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="mr-1 " checked />
                                <span>Round-Trip</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>I prefer direct flights</span>
                            </div>

                        </div>

                        {/* ===================== Form Section =========================== */}

                        <form onSubmit={handleSearch} className="flex gap-2 md:flex-wrap flex-wrap p-3 justify-center md:justify-start ">
                            <div className="border-solid border-2 rounded h-13 py-2 flex w-[240px]">
                                <div className="flex  ml-2 ">
                                    <div className="w-5 flex items-center justify-center">
                                        <BiSolidPlaneAlt size={25} />
                                    </div>
                                    <input 
                                        className=" outline-none" 
                                        name="where" 
                                        type="text" 
                                        placeholder="Where from?"
                                        onChange={(e) => setWhere(e.target.value)} 
                                        required
                                    />
                                </div>
                            </div>

                            <div className="border-solid border-2 rounded h-13 py-2 flex w-[240px]">
                                <div className="flex  ml-2 ">
                                    <div className="w-5 flex items-center justify-center">
                                        <BiSolidPlaneAlt size={25} />
                                    </div>
                                    <input 
                                        className=" outline-none" 
                                        name="to" 
                                        type="text" 
                                        placeholder="Where to?"
                                        onChange={(e) => setTo(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="border-solid border-2 rounded h-13 py-2 flex w-[240px]">
                                <div className="flex  ml-2 ">
                                    <div className="w-5 flex items-center justify-center">
                                        <RiCalendarEventLine size={25} />
                                    </div>
                                    <div className=" w-[180px] ">
                                        <CustomDatePicker className=" " onChange={(date) => setDateFrom(date)} />
                                    </div>
                                </div>
                            </div>

                            <div className="border-solid border-2 rounded h-13 py-2 flex w-[240px]">
                                <div className="flex  ml-2 ">
                                    <div className="w-5 flex items-center justify-center">
                                        <RiCalendarEventLine size={25} />
                                    </div>
                                    <div className=" w-[180px] ">
                                        <CustomDatePicker className=" " onChange={(date) => setDateTo(date)} />
                                    </div>
                                </div>
                            </div>

                            
                            <button type="submit" className="bg-blue-500 h-13 flex items-center justify-center px-6 rounded text-white font-bold cursor-pointer">
                                <FaPlaneDeparture className="mr-2" />
                                SEARCH
                            </button>
                            {loading && <p className="text-red-700 font-bold text-3xl">Searching flights...</p>}
                        </form>

                        <div className="flex">
                            <PassengerSelector 
                                adults={adults}
                                setAdults={setAdults}
                                children={children}
                                setChildren={setChildren}
                            />
                            <TravelClassSelector 
                                classType={classType} 
                                setClassType={setClassType} 
                            />
                        </div>
                        
                        
                    </div>
                    <br/><br/>
                </div>
                
            </div>
            <div className="bg-white">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
       
    )
}

export default Main;