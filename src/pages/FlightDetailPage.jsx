import { CgCPlusPlus } from "react-icons/cg";
import { useFlights } from "../context/FlightContext"; // Import Context to access flight data

function FlightDetailPage() {
    const { flights } = useFlights(); // Access flight data

    return (
        <>
            <div className=" mb-5">
                <h1 className="text-center mt-3 text-3xl font-bold">Flight Details</h1>
                <hr className="mt-2 text-gray-700 mx-100"/>
                <div className="p-4 flex items-center justify-center">

                    { flights.length > 0 ? (

                        <table>
                            <thead>
                                <tr className="text-center bg-gray-300">

                                    <th className="w-8 border-2 border-solid">#</th>
                                    <th className="flex-grow w-30 border-2 border-solid"> Date/Time</th>
                                    <th className="flex-grow w-40 border-2 border-solid"> Origin <br/>(City, Country)</th>
                                    <th className="flex-grow w-50 border-2 border-solid"> Destination <br/> (City, Country)</th>
                                    <th className="flex-grow w-15 border-2 border-solid"> Price</th>
                                    
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                

                                {flights.map((flight, index) => (
                                        <tr key={flight.id} className="hover:bg-gray-50">

                                            <td className="border px-4 py-2"> {index + 1} </td>
                                            <td className="border px-4 py-2"> {new Date(flight.legs[0].departure).toLocaleString()} </td>
                                            <td className="border px-4 italic py-2"> {flight.legs[0].origin.city}, {flight.legs[0].origin.country} </td>
                                            <td className="border px-4 italic py-2"> {flight.legs[0].destination.city}, {flight.legs[0].destination.country} </td>
                                            <td className="border px-4 py-2 font-semibold text-green-700"> {flight.price.formatted}.00 </td>
                                            
                                        </tr>
                                    ))}

                                
                            </tbody>
                        </table>

                        ) : (
                        <p className="text-red-500 text-3xl text-center">
                            No flight found.
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        </p>
                        ) 
                    };
                    
                </div>
            </div>
            
        </>
    )
}

export default FlightDetailPage;