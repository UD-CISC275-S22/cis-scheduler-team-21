import React from "react";
import "./App.css";
import { MakePlan } from "./Components/MakePlan";
import { Homepage } from "./Components/Homepage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
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
                    <Route path="homepage" element={<Homepage />} />
                    <Route
                        path="/cis-scheduler-team-21/"
                        /* element={
                            <Navigate
                                replace
                                to="/cis-scheduler-team-21/homepage"
                            />
                        } */
                    />
                    {/* This route is for makeplan component 
          with path "/homepage", in element props 
          we passes the imported component*/}
                    <Route path="makeplan" element={<MakePlan />} />
                    <Route
                        path="/cis-scheduler-team-21"
                        element={
                            <Navigate
                                replace
                                to="/cis-scheduler-team-21/makeplan"
                            />
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
