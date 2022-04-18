import React from "react";
import "./App.css";
import { MakePlan } from "./Components/MakePlan";
import { CommonPlan } from "./Components/CommonPlan";
import { ShowFallSemester } from "./Components/ShowFallSemester";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CIS SCHEDULER
                <br></br>
                <h4>Christian Rullan</h4>
                <h4>Kiefer Yost</h4>
            </header>
            <div>
                <body className="App-Body">
                    <h2>Welcome!!!</h2> to the UD CIS SCHEDULER. Here you can
                    setup schedules for your computer science degree! First
                    start by creating a plan, then add the semesters and courses
                    from there.
                </body>
            </div>
            <CommonPlan></CommonPlan>
            <br></br>
            <MakePlan></MakePlan>
        </div>
    );
}

export default App;
