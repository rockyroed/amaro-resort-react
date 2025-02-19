import React, { useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Event from "./pages/Event.jsx";
import HotelRoom from "./pages/HotelRoom.jsx";
import Reservation from "./pages/Reservation.jsx";
import Rules from "./pages/Rules.jsx";
import Services from "./pages/Services.jsx";
import Swimming from "./pages/Swimming.jsx";
import BookingDetails from "./pages/BookingDetails.jsx";
import BookingSummary from "./pages/BookingSummary.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import Details from "./pages/Details.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import PaymentDetails from "./pages/Payment-Details.jsx";

const App = () => {
    const location = useLocation();

    useEffect(() => {
        // Define a function to update the document title
        const updateDocumentTitle = () => {
            const firstWord = location.pathname.replace("/", "");
            const capitalizedFirstLetter =
                firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

            if (capitalizedFirstLetter != "") {
                document.title = `Amaro Resort - ${capitalizedFirstLetter}`;
            } else {
                document.title = "Amaro Resort";
            }
        };

        // Call the function when the component mounts
        updateDocumentTitle();

        // Add a listener for route changes and update the title
        const unlisten = () => {
            updateDocumentTitle();
        };

        // Move the view to the top when the location changes
        window.scrollTo(0, 0);

        return () => {
            // Remove the listener when the component unmounts
            unlisten();
        };
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/event" element={<Event />} />
            <Route path="/hotel-room" element={<HotelRoom />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment-details" element={<PaymentDetails />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/swimming" element={<Swimming />} />
            <Route path="/booking-details" element={<BookingDetails />} />
            <Route path="/booking-summary" element={<BookingSummary />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    );
};

export default App;
