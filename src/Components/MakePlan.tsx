import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../Interfaces/Courses";
import { PlanContainer } from "./PlanContainer";
//import { ShowFallSemester } from "./ShowFallSemester";

//The total plans a person has made

export function MakePlan(): JSX.Element {
    const [Plans, setPlans] = useState<Plan[]>([]);
    const [Counter, setCounter] = useState<number>(1);
    function newPlan(): void {
        const newPlan: Plan = {
            Title: "Plan " + Counter,
            id: Counter
        };
        //const planListCopy: Plan[] = [...planList, newPlan];
        const planList: Plan[] = [...Plans, newPlan];
        const counterCopy: number = Counter + 1;
        setPlans(planList);
        setCounter(counterCopy);
    }
    return (
        <div>
            <div>
                {/* {visible && <div></div>} */}
                {Plans.map((plan: Plan) => (
                    <div key={plan.id}>
                        <PlanContainer
                            plan={plan}
                            plans={Plans}
                            setPlans={setPlans}
                        ></PlanContainer>
                    </div>
                ))}
                <Button onClick={newPlan}>New Plan</Button>
            </div>
        </div>
    );
}
