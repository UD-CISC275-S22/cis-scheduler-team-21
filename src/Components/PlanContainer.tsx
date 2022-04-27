import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
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
    function deletePlan(): void {
        setPlans(plans.filter((x: Plan): boolean => x.id !== plan.id));
    }
    return (
        <div>
            <Form.Group>
                <Col
                    style={{
                        textAlign: "left"
                    }}
                >
                    <div>
                        <span className="h4">{plan.Title}</span>
                        <div>
                            <Button onClick={() => setVisible(!visible)}>
                                Show
                            </Button>
                            <Button
                                onClick={deletePlan}
                                style={{
                                    backgroundColor: "darkRed"
                                }}
                            >
                                Delete
                            </Button>
                            <hr></hr>
                        </div>
                        <div
                            style={{
                                display: visible ? "block" : "none"
                            }}
                        >
                            <AddSemester></AddSemester>
                            <hr></hr>
                        </div>
                    </div>
                </Col>
            </Form.Group>
        </div>
    );
}
