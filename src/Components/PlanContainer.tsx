import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Plan } from "./MakePlan";

interface PlanProps {
    plan: Plan;
}

export function PlanContainer({ plan }: PlanProps): JSX.Element {
    return (
        <div>
            <Form.Group as={Row}>
                <Col
                    style={{
                        textAlign: "left"
                    }}
                >
                    <h4>{plan.Title}</h4>
                    <Button>Show</Button>
                </Col>
            </Form.Group>
        </div>
    );
}
