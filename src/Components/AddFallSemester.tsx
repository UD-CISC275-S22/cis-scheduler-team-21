import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ShowFallSemester } from "./ShowFallSemester";
import "../App.css";

export function AddFallSemester(): JSX.Element {
    const [FallElement, setFallElement] = useState<JSX.Element>();

    function AddFall(): void {
        setFallElement(
            <ShowFallSemester setFall={setFallElement}></ShowFallSemester>
        );
    }

    return (
        <Form.Group>
            <div style={{ textAlign: "center" }}>
                <Button className="customButton" onClick={AddFall}>
                    Add Fall Semester
                </Button>
            </div>
            <div>
                <br></br>
                {FallElement}
            </div>
        </Form.Group>
    );
}
