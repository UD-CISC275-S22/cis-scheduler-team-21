import React from "react";
import "./App.css";
//import { MakePlan } from "./Components/MakePlan";
import { Homepage } from "./Components/Homepage";
import {
    Routes,
    Route,
    Navigate,
    HashRouter as Router
} from "react-router-dom";
import { Years } from "./Components/Years";
//import { Year } from "./Interfaces/yearInterface";
//import { useState } from "react";

/**const DataKey = "Page-Data";
let loadedData = Plan[] = [];

const previousData = localStorage.getItem(DataKey);

if (previousData !== null) {
    loadedData = JSON.parse(previousData);
}*/

function App(): JSX.Element {
    /**const [data, setData] = useState<JSX.Element>(loadedData);
    function savePlanButton(): void {
        setData(<Years DataKey={DataKey} />);
        localStorage.setItem(DataKey, JSON.stringify(data));
    }*/

    /**<Route path="/showplan" element={<MakePlan />} />
                    <Route
                        path="/cis-scheduler-team-21/homepage"
                        element={<Navigate replace to="/#/showplan" />}
                    />*/
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* This route is for homepage component 
          with exact path "/", in element props 
          we passes the imported component*/}
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="/cis-scheduler-team-21/"
                        element={<Navigate replace to="/homepage" />}
                    />
                    {/* This route is for makeplan component 
          with path "/homepage", in element props 
          we passes the imported component*/}
                    <Route path="/showplan" element={<Years />} />
                    <Route
                        path="/cis-scheduler-team-21/#/homepage"
                        element={<Navigate replace to="/#/showplan" />}
                    />
                    **
                    <Route path="/cis-scheduler-team-21/" />
                    **
                </Routes>
            </Router>
        </>
    );
}

export default App;
