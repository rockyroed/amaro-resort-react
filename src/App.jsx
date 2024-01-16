import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Event from "./pages/Event.jsx";
import HotelRoom from "./pages/HotelRoom.jsx";
import Rules from "./pages/Rules.jsx";
import Services from "./pages/Services.jsx";
import Swimming from "./pages/Swimming.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/event" element={<Event />} />
            <Route path="/hotelroom" element={<HotelRoom />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/services" element={<Services />} />
            <Route path="/swimming" element={<Swimming />} />
        </Routes>
    );
}

export default App;
