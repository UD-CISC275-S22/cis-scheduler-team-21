//import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { MakePlan } from "./Components/MakePlan";
import { CommonPlan } from "./Components/CommonPlan";

function App(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h2>Kiefer Yost</h2>
            <h2>Christian Rullan</h2>
            <p>
                <br></br>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <CommonPlan></CommonPlan>
            <br></br>
            <MakePlan></MakePlan>
        </div>
    );
}

export default App;
