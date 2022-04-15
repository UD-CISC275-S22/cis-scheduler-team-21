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
            <CommonPlan></CommonPlan>
            <br></br>
            <MakePlan></MakePlan>
            <ShowFallSemester></ShowFallSemester>
        </div>
    );
}

export default App;
