import React from "react";
import { useState } from "react";
import "../App.css";
import { CommonPlan } from "./CommonPlan";
//import { BeginButton } from "./BeginButton";
import { MakePlan } from "./MakePlan";
import { Plan } from "../Interfaces/Courses";

const DataKey = "Page-Data";
let loadedData: Plan[] = [];

const previousData = localStorage.getItem(DataKey);

if (previousData !== null) {
    loadedData = JSON.parse(previousData);
}

export function Homepage(): JSX.Element {
    const [plans, setPlans] = useState<Plan[]>(loadedData);

    function clearStorage(): void {
        localStorage.clear();
    }
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
            <CommonPlan></CommonPlan>
            <hr></hr>
            {plans}
            {clearStorage}
            <MakePlan
                DataKey={DataKey}
                PlansArray={plans}
                setPlan={setPlans}
            ></MakePlan>
        </div>
    );
}
