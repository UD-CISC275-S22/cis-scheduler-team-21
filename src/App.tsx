import React from "react";
import "./App.css";
import { MakePlan } from "./Components/MakePlan";
import { CommonPlan } from "./Components/CommonPlan";
import { ShowFallSemester } from "./Components/ShowFallSemester";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h2>Kiefer Yost</h2>
            <h2>Christian Rullan</h2>
            <CommonPlan></CommonPlan>
            <br></br>
            <MakePlan></MakePlan>
            <ShowFallSemester></ShowFallSemester>
        </div>
    );
}

export default App;
