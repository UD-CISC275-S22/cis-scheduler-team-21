import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../App.css";
import { plan } from "../Interfaces/Courses";
import { Link } from "react-router-dom";
//import { Years } from "./Years";

export interface PlanProps {
    plan: plan;
    plans: plan[];
    setPlans: (plans: plan[]) => void;
}

export function PlanContainer({
    plan,
    plans,
    setPlans
}: PlanProps): JSX.Element {
    const [editVis, setEditVis] = useState<boolean>(false);
    const [planTitle, setPlanTitle] = useState<plan>(plan);
    const [planDescription, setPlanDescription] = useState<plan>(plan);
    //const [data, setData] = useState<plan[]>(PlansArray);

    function deletePlan(): void {
        const plansCopy: plan[] = plans.filter(
            (x: plan): boolean => x.id !== plan.id
        );
        setPlans(plansCopy);
    }
    function updateEdit(): void {
        setEditVis(!editVis);
    }

    function updatePlan(event: React.ChangeEvent<HTMLInputElement>) {
        const updatedPlan: plan = {
            title: event.target.value,
            id: plan.id,
            description: plan.description,
            degree: plan.degree
        };
        setPlanTitle(updatedPlan);
        const planListCopy: plan[] = plans.map((planElement: plan): plan => {
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
        const updatedPlan: plan = {
            title: plan.title,
            id: plan.id,
            description: event.target.value,
            degree: plan.degree
        };
        setPlanDescription(updatedPlan);
        const planListCopy: plan[] = plans.map((planElement: plan): plan => {
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
            <div className="plan">
                {editVis && (
                    <Form.Group>
                        <Form.Label>plan Name:</Form.Label>
                        <Form.Control
                            data-testid="titleEdit"
                            placeholder="Enter new plan name..."
                            value={planTitle.title}
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
                            {planTitle.title}
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
                        state={{
                            concentrationValue: plan.degree,
                            planID: plan.id
                        }}
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
