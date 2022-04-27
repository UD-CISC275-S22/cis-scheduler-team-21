import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ShowWinterSession } from "./ShowWinterSession";
import "../App.css";

export function AddWinterSession(): JSX.Element {
    const [WinterElement, setWinterElement] = useState<JSX.Element>();

    function AddWinter(): void {
        setWinterElement(
            <ShowWinterSession setWinter={setWinterElement}></ShowWinterSession>
        );
    }

    return (
        <Form.Group>
            <div style={{ textAlign: "center" }}>
                <Button className="customButton" onClick={AddWinter}>
                    Add Winter Semester
                </Button>
            </div>
            <div>
                <br></br>
                {WinterElement}
            </div>
        </Form.Group>
    );
}
