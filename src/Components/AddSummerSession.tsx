import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ShowSummerSession } from "./ShowSummerSession";
import "../App.css";

export function AddSummerSession(): JSX.Element {
    const [SummerElement, setSummerElement] = useState<JSX.Element>();

    function AddSummer(): void {
        setSummerElement(
            <ShowSummerSession setSummer={setSummerElement}></ShowSummerSession>
        );
    }

    return (
        <Form.Group>
            <div style={{ textAlign: "center" }}>
                <Button className="customButton" onClick={AddSummer}>
                    Add Summer Semester
                </Button>
            </div>
            <div>
                <br></br>
                {SummerElement}
            </div>
        </Form.Group>
    );
}
