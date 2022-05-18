import React from "react";
import "../App.css";
import { MakePlan } from "./MakePlan";

export function Homepage(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CIS SCHEDULER
                <br></br>
                <h4>Christian Rullan, Kiefer Yost</h4>
            </header>

            <div className="App-Body">
                <h2>Welcome!!!</h2> To the UD CIS SCHEDULER from CISC275. Here
                you can setup schedules for your computer science degree! First
                start by creating a plan, then add the semesters and courses
                from there.
            </div>
            <hr></hr>
            <MakePlan></MakePlan>
        </div>
    );
}
