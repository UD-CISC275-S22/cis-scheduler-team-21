import React from "react";
import "./App.css";
import { MakePlan } from "./Components/MakePlan";
import { Homepage } from "./Components/Homepage";
import { PlanContainer } from "./Components/PlanContainer";
import { PlanProps } from "./Components/PlanContainer";
//import { Plan } from "./Interfaces/Courses";
import {
    Routes,
    Route,
    Navigate,
    HashRouter as Router
} from "react-router-dom";

function App({ plan, plans, setPlans }: PlanProps): JSX.Element {
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
                        element={<Navigate replace to="#/homepage" />}
                    />
                    {/* This route is for makeplan component 
          with path "/homepage", in element props 
          we passes the imported component*/}
                    <Route path="/makeplan" element={<MakePlan />} />
                    <Route
                        path="/cis-scheduler-team-21/homepage"
                        element={<Navigate replace to="/#/makeplan" />}
                    />
                    <Route
                        path="/show-plan"
                        element={
                            <PlanContainer
                                plan={plan}
                                plans={plans}
                                setPlans={setPlans}
                            />
                        }
                    />
                    <Route
                        path="/cis-scheduler-team-21/#/makeplan"
                        element={<Navigate replace to="#/show-plan" />}
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
