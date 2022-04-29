import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AddSemester } from "./AddSemester";
import "../App.css";
import { Plan } from "../Interfaces/Courses";

interface PlanProps {
    plan: Plan;
    plans: Plan[];
    setPlans: (plans: Plan[]) => void;
}

export function PlanContainer({
    plan,
    plans,
    setPlans
}: PlanProps): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const [editVis, setEditVis] = useState<boolean>(false);
    const [Plan, setPlan] = useState<Plan>(plan);
    function deletePlan(): void {
        setPlans(plans.filter((x: Plan): boolean => x.id !== plan.id));
    }
    function updateEdit(): void {
        setEditVis(!editVis);
    }
    function updatePlan(event: React.ChangeEvent<HTMLInputElement>) {
        const updatedPlan: Plan = {
            Title: event.target.value,
            id: plan.id,
            description: plan.description
        };
        setPlan(updatedPlan);
    }
    function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
        const updatedPlan: Plan = {
            Title: plan.Title,
            id: plan.id,
            description: event.target.value
        };
        setPlan(updatedPlan);
        const plansCopy: Plan[] = plans.map((plan: Plan) =>
            plan.id === Plan.id ? (plan = Plan) : plan
        );
        setPlans(plansCopy);
    }
    return (
        <div>
            <div className="Plan">
                {editVis && (
                    <Form.Group>
                        <Form.Label>Plan Name:</Form.Label>
                        <Form.Control
                            placeholder="Enter new plan name..."
                            value={Plan.Title}
                            style={{ width: "20%" }}
                            onChange={updatePlan}
                        />
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                            style={{ width: "40%" }}
                            as="textarea"
                            rows={3}
                            placeholder="Enter new description..."
                            value={Plan.description}
                            onChange={updateDescription}
                        />
                    </Form.Group>
                )}
                <div style={{ width: "100%", textAlign: "center" }}>
                    <b
                        style={{
                            color: "black",
                            fontSize: "5ch",
                            float: "left"
                        }}
                    >
                        {Plan.Title}
                    </b>
                    <p
                        style={{
                            fontSize: "2ch",
                            width: "20%",
                            marginLeft: "50ch"
                        }}
                    >
                        {Plan.description}
                    </p>
                </div>
                <div
                    style={{
                        float: "right",
                        paddingRight: "2ch"
                    }}
                >
                    <Button onClick={() => setVisible(!visible)}>Show</Button>
                    <Button
                        onClick={deletePlan}
                        style={{
                            backgroundColor: "darkRed"
                        }}
                    >
                        Delete
                    </Button>
                    <Button onClick={updateEdit}>Edit</Button>
                </div>
                <div
                    style={{
                        display: visible ? "block" : "none"
                    }}
                >
                    <br></br>
                    <br></br>
                    <AddSemester></AddSemester>
                </div>
            </div>
        </div>
    );
}
