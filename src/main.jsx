import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { FlightProvider } from "./context/FlightContext";  // Import FlightProvider



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlightProvider>  {/* Wrap App inside FlightProvider so that flight data is available globally */}
      <App />
    </FlightProvider>
  </StrictMode>
)
