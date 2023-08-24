import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/ex_libs/bootstrap_4/bootstrap.css";
import "./assets/css/style.css";
import Homepage from "./Homepage";
import Quiz from "./Quiz";
import Results from "./Results";
import Profile from "./Profile";
import Organisations from "./Organisations";
import FilteredOrganisations from "./FilteredOrganisations";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/results" element={<Results />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orgs" element={<Organisations />} />
                <Route path="/orgs-filter" element={<FilteredOrganisations />} />
            </Routes>
        </div>
    );
};

export default App;