//import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Plan } from "./MakePlan";
import { AddSemester } from "../Components/AddSemester";
//import "../App.css";

interface PlanProps {
    plan: Plan;
}

export function PlanContainer({ plan }: PlanProps): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    /* function semesterLayout(): JSX.Element {
        return (
            <Form.Group>
                <div>
                    <Button>hello</Button>
                </div>
            </Form.Group>
        );
    } */
    return (
        <div>
            <Form.Group as={Row}>
                <Col
                    style={{
                        textAlign: "left"
                    }}
                >
                    <div>
                        <h4>{plan.Title}</h4>
                        <Button onClick={() => setVisible(!visible)}>
                            Show
                        </Button>
                        {visible && (
                            <div>
                                <AddSemester></AddSemester>
                            </div>
                        )}
                        <hr></hr>
                    </div>
                </Col>
            </Form.Group>
        </div>
    );
}
