import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../App.css";
import { Plan } from "../Interfaces/Courses";
import { Link } from "react-router-dom";
//import { Years } from "./Years";

export interface PlanProps {
    plan: Plan;
    plans: Plan[];
    setPlans: (plans: Plan[]) => void;
}

export function PlanContainer({
    plan,
    plans,
    setPlans
}: PlanProps): JSX.Element {
    const [editVis, setEditVis] = useState<boolean>(false);
    const [planTitle, setPlanTitle] = useState<Plan>(plan);
    const [planDescription, setPlanDescription] = useState<Plan>(plan);
    //const [data, setData] = useState<Plan[]>(PlansArray);

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
            description: plan.description,
            degree: plan.degree
        };
        setPlanTitle(updatedPlan);
        const planListCopy: Plan[] = plans.map((planElement: Plan): Plan => {
            if (planElement.id === plan.id) {
                planElement = updatedPlan;
                return planElement;
            } else {
                return planElement;
            }
        });
        setPlans(planListCopy);
    }
    function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
        const updatedPlan: Plan = {
            Title: plan.Title,
            id: plan.id,
            description: event.target.value,
            degree: plan.degree
        };
        setPlanDescription(updatedPlan);
        const planListCopy: Plan[] = plans.map((planElement: Plan): Plan => {
            if (planElement.id === plan.id) {
                planElement = updatedPlan;
                return planElement;
            } else {
                return planElement;
            }
        });
        setPlans(planListCopy);
    }
    return (
        <div>
            <div className="Plan">
                {editVis && (
                    <Form.Group>
                        <Form.Label>Plan Name:</Form.Label>
                        <Form.Control
                            data-testid="titleEdit"
                            placeholder="Enter new plan name..."
                            value={planTitle.Title}
                            style={{ width: "20%" }}
                            onChange={updatePlan}
                        />
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                            data-testid="descriptionEdit"
                            style={{ width: "40%" }}
                            as="textarea"
                            rows={2}
                            placeholder="Enter new description..."
                            value={planDescription.description}
                            onChange={updateDescription}
                        />
                    </Form.Group>
                )}
                <Row>
                    <Col
                        style={{
                            overflow: "clip",
                            textAlign: "left"
                        }}
                    >
                        <b
                            style={{
                                fontSize: "4ch"
                            }}
                        >
                            {planTitle.Title}
                        </b>
                    </Col>
                    <Col
                        style={{
                            wordBreak: "break-all"
                        }}
                    >
                        <p
                            style={{
                                fontSize: "2ch",
                                marginTop: "2ch"
                            }}
                        >
                            {planDescription.description}
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
                <div
                    style={{
                        float: "right",
                        paddingRight: "2ch"
                    }}
                >
                    <Link
                        to="/showplan"
                        state={{ concentrationValue: plan.degree }}
                    >
                        <Button className="orangeButton">Show</Button>
                    </Link>
                    <Button className="orangeButton" onClick={updateEdit}>
                        Edit
                    </Button>
                    <Button
                        onClick={deletePlan}
                        style={{
                            backgroundColor: "darkRed",
                            marginLeft: "2ch",
                            marginTop: "1ch",
                            fontSize: "1ch"
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}
