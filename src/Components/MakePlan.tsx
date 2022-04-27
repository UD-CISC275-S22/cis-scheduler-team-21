import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../Interfaces/Courses";
import { PlanContainer } from "./PlanContainer";

//The total plans a person has made
const planList: Plan[] = [];

export function MakePlan(): JSX.Element {
    const [Plans, setPlans] = useState<Plan[]>(planList);
    const [Counter, setCounter] = useState<number>(1);
    function newPlan(): void {
        const newPlan: Plan = {
            Title: "Plan " + Counter,
            id: Counter
        };
        //const planListCopy: Plan[] = [...planList, newPlan];
        planList.push(newPlan);
        const counterCopy: number = Counter + 1;
        setPlans(planList);
        setCounter(counterCopy);
    }
    return (
        <div>
            {/* {visible && <div></div>} */}
            <Button onClick={newPlan}>New Plan</Button>
            {Plans.map((plan: Plan) => (
                <div key={plan.id}>
                    <PlanContainer plan={plan}></PlanContainer>
                </div>
            ))}
        </div>
    );
}
