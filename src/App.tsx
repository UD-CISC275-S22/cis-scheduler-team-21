import React from "react";
import "./App.css";
import { MakePlan } from "./Components/MakePlan";

function App(): JSX.Element {
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
            <MakePlan></MakePlan>
        </div>
    );
}

export default App;
