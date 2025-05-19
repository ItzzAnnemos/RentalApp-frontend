import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router";
import './App.css'
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import HomePage from "./ui/pages/homePage/HomePage.jsx";
import AccommodationsPage from "./ui/pages/accommodationsPage/AccommodationsPage.jsx";
import AccommodationDetails from "./ui/components/accommodations/accommodationDetails/AccommodationDetails.jsx";
import HostsPage from "./ui/pages/hostsPage/HostsPage.jsx";
import HostDetails from "./ui/components/hosts/hostDetails/HostDetails.jsx";
import CountriesPage from "./ui/pages/countriesPage/CountriesPage.jsx";
import CountryDetails from "./ui/components/countries/countryDetails/CountryDetails.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="accommodations" element={<AccommodationsPage/>}/>
                    <Route path="accommodations/:id" element={<AccommodationDetails/>}/>
                    <Route path="hosts" element={<HostsPage/>}/>
                    <Route path="hosts/:id" element={<HostDetails/>}/>
                    <Route path="countries" element={<CountriesPage/>}/>
                    <Route path="countries/:id" element={<CountryDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
