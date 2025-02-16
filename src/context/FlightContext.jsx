import { createContext, useContext, useState } from "react";

const FlightContext = createContext();

// Stores flight data globally and provide access to any component/page in the app.

export const FlightProvider = ({ children }) => {
    const [flights, setFlights] = useState([]);

    return (
        <FlightContext.Provider value={{ flights, setFlights }}>
            {children}
        </FlightContext.Provider>
    );
};

export const useFlights = () => useContext(FlightContext);
