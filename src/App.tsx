import React from "react";
import "./App.css";
import { MakePlan } from "./Components/MakePlan";
import { Homepage } from "./Components/Homepage";
import {
    Routes,
    Route,
    Navigate,
    HashRouter as Router
} from "react-router-dom";

function App(): JSX.Element {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* This route is for homepage component 
          with exact path "/", in element props 
          we passes the imported component*/}
                    <Route path="/homepage" element={<Homepage />} />
                    <Route
                        path="/cis-scheduler-team-21/"
                        element={<Navigate replace to="/#/homepage" />}
                    />
                    {/* This route is for makeplan component 
          with path "/homepage", in element props 
          we passes the imported component*/}
                    <Route path="/makeplan" element={<MakePlan />} />
                    <Route
                        path="/cis-scheduler-team-21/homepage"
                        element={<Navigate replace to="/#/makeplan" />}
                    />
                    **
                    <Route path="/" element={Homepage} />
                    **
                </Routes>
            </Router>
        </>
    );
}

export default App;
