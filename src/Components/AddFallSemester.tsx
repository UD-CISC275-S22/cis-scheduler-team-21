import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ShowFallSemester } from "./ShowFallSemester";
import { ShowSpringSemester } from "./ShowSpringSemester";
import { ShowWinterSession } from "./ShowWinterSession";
import { ShowSummerSession } from "./ShowSummerSession";
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
