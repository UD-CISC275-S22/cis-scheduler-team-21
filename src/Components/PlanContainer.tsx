import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AddSemester } from "./AddSemester";
import "../App.css";
import { Plan } from "../Interfaces/Courses";
import { Link } from "react-router-dom";

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
    const [visible, setVisible] = useState<boolean>(false);
    const [editVis, setEditVis] = useState<boolean>(false);
    const [Plan, setPlan] = useState<Plan>(plan);
    const [Plan2, setPlan2] = useState<Plan>(plan);
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
        setPlan2(updatedPlan);
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
                            value={Plan.Title}
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
                            value={Plan2.description}
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
                            {Plan.Title}
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
                            {Plan2.description}
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
                    <li>
                        <Link to="/showplan">
                            <Button onClick={() => setVisible(!visible)}>
                                Show
                            </Button>
                        </Link>
                    </li>
                    <Button
                        className="orangeButton"
                        onClick={() => setVisible(!visible)}
                    >
                        Show
                    </Button>
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
