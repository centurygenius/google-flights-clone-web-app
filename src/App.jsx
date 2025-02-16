import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import FlightDetailPage from "./pages/FlightDetailPage";


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="flight-details" element={<FlightDetailPage/>} />
      </Route>
  )   
  );

  return <RouterProvider router={router} />
        
}

export default App;
