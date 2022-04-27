import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { AddSemester } from "./AddSemester";
import "../App.css";
import { Plan } from "../Interfaces/Courses";

interface PlanProps {
    plan: Plan;
}
export function PlanContainer({ plan }: PlanProps): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
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
                        &nbsp;&nbsp;&nbsp;
                        <Button onClick={() => setVisible(!visible)}>
                            Show
                        </Button>
                        <hr></hr>
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
