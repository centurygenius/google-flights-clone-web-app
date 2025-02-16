# Google Flights Clone Web Application

## Overview
The **Google Flights Clone** is a web application built using **React.js/Vite**, **Tailwind CSS**, and **Sky Scrapper API** from RapidAPI. It allows users to search for flights by selecting departure and destination cities, travel dates, number of passengers, and cabin class. The application then fetches flight details from an API and displays them in an easy-to-read format.

## Features
- 🔍 **Search for Flights**: Enter departure and destination cities, travel dates, and passenger details.
- 📅 **Date Selection**: Custom date picker to choose travel dates.
- 🛫 **Flight Details**: View departure time, origin, destination, and price.
- 🛂 **Passenger & Class Selection**: Select number of adults, children, and travel class.
- ⚡ **Real-time API Fetching**: Fetches live flight data using the Sky Scrapper API.
- 📱 **Responsive Design**: Optimized for desktop and mobile devices.

## Tech Stack
- **Frontend**: React.js, React Router, Tailwind CSS
- **State Management**: React Context API
- **Backend API**: Sky Scrapper API (RapidAPI)
- **Libraries Used**:
  - Axios (for API requests)
  - React Icons (for UI enhancements)
  - React Router (for navigation)
  - Custom Date Picker

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v14+ recommended)
- npm or yarn

### Clone the Repository
```sh
git clone https://github.com/yourusername/google-flights-clone.git
cd google-flights-clone
```

### Install Dependencies
```sh
npm install
# or
yarn install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and add:
```sh
VITE_API_URL=YOUR_RAPIDAPI_ENDPOINT
VITE_API_KEY=YOUR_RAPIDAPI_KEY
```

### Start the Application
```sh
npm run dev
# or
yarn dev
```

The application should now be running on `http://localhost:5173/` (or the port specified by Vite).

## Project Structure
```
📂 google-flights-clone
├── 📁 public              # Static assets
├── 📁 src
│   ├── 📁 components     # Reusable UI components (DatePicker, Selectors, etc.)
│   ├── 📁 context        # React Context API for flight data management
│   ├── 📁 layouts        # Main layout structure
│   ├── 📁 pages          # Pages (HomePage, FlightDetailPage)
│   ├── 📁 assets        # Images
│   ├── App.jsx           # Main app component
│   ├── main.js          # Entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies
├── README.md            # Project documentation
```

## API Integration
This project integrates with the **Sky Scrapper API** to fetch flight data. The request structure:
```js
const options = {
    method: 'GET',
    url: import.meta.env.VITE_API_URL,
    params: {
      originSkyId: 'JFK',
      destinationSkyId: 'LAX',
      date: '2025-03-15',
      cabinClass: 'economy',
      adults: '1',
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
```

## Usage
1. Enter departure and destination cities(originSkyId and destinationSkyId) e.g LOND, JFK,  BOM, EWR, NYCA, LAX, LGA, SWF etc.
2. Select departure and return dates using the date picker.
3. Choose the number of passengers and cabin class.
4. Click on **Search** to fetch available flights.
5. View flight details including departure time, price, and destination.

## Deployment
To deploy the app, follow these steps:

### Build the Project
```sh
npm run build
```

### Deploy to Vercel (Recommended)
```sh
npm install -g vercel
vercel
```

## Future Improvements
- ✈️ Add **one-way & multi-city flights** support
- 🌍 Integrate **Google Places API** for auto-suggestions in city selection
- 🛂 Implement **user authentication** for personalized experiences
- 📅 Show **live seat availability** and booking options

## License
This project is open-source.

## Author
👨‍💻 Developed by Abiona Samuel Olawuyi(samuelo.abiona@gmail.com)