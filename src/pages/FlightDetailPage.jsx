import { CgCPlusPlus } from "react-icons/cg";
import { useFlights } from "../context/FlightContext"; // Import Context to access flight data
import { useState } from "react";
import Pagination from "../components/Pagination";

function FlightDetailPage() {
    const { flights } = useFlights(); // Access flight data
    const [currentPage, setCurrentPage] = useState(1);
    const [flightsPerPage, setFlightsPerPage] = useState(50);

    const lastFlightIndex = currentPage * flightsPerPage;
    const firstFlightIndex = lastFlightIndex - flightsPerPage;
    const currentFlights = flights.slice(firstFlightIndex, lastFlightIndex);

    return (
        <>
            <div className=" mb-5 px-4">
                <h1 className="text-center mt-3 text-2xl font-bold sm:text-3xl">Flight Details</h1>
                <hr className="mt-2 text-gray-700 mx-auto w-4/5"/>
                <div className="p-2 sm:p-4 flex justify-center">

                    { flights.length > 0 ? (

                        <div className="overflow-x-auto w-full">
                            <table className="min-w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="text-center bg-gray-300 text-xs sm:text-sm">

                                        <th className="border-2 px-2 py-2 w-8">#</th>
                                        <th className="px-2 py-2 w-30 border-2"> Date/Time</th>
                                        <th className="px-2 py-2 w-40 border-2"> Origin <br/>(City, Country)</th>
                                        <th className="px-2 py-2 w-50 border-2"> Destination <br/> (City, Country)</th>
                                        <th className="px-2 py-2 w-15 border-2"> Price</th>
                                        
                                    </tr>
                                </thead>

                                <tbody className="text-center text-xs sm:text-sm">
                                    

                                    {currentFlights.map((flight, index) => {
                                        const overallIndex = firstFlightIndex + index + 1;
                                        return (
                                                
                                                <tr key={flight.id} className="hover:bg-gray-50">

                                                    <td className="border px-2 py-2"> {overallIndex} </td>
                                                    <td className="border px-2 py-2"> {new Date(flight.legs[0].departure).toLocaleString()} </td>
                                                    <td className="border px-2 italic py-2"> {flight.legs[0].origin.city}, {flight.legs[0].origin.country} </td>
                                                    <td className="border px-2 italic py-2"> {flight.legs[0].destination.city}, {flight.legs[0].destination.country} </td>
                                                    <td className="border px-2 py-2 font-semibold text-green-700"> {flight.price.formatted}.00 </td>
                                                    
                                                </tr>
                                        );
                                    })}

                                    
                                </tbody>
                            </table>
                        </div>

                        ) : (
                        <p className="text-red-500 text-xl text-center sm:text-3xl">
                            No flight found.
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        </p>
                        ) 
                    };
                    
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} flightsPerPage={flightsPerPage} totalFlights={flights.length} />
            </div>
            
        </>
    )
}

export default FlightDetailPage;