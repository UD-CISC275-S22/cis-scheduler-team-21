import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ShowSpringSemester } from "./ShowSpringSemester";
import { SetSpringProp } from "../Interfaces/semesterInterfaces";
import "../App.css";

export function AddSpringSemester(): JSX.Element {
    const [SpringElement, setSpringElement] = useState<JSX.Element>();

    function AddSpring(): void {
        setSpringElement(
            <ShowSpringSemester
                setSpring={setSpringElement}
            ></ShowSpringSemester>
        );
    }

    return (
        <Form.Group>
            <div style={{ textAlign: "center" }}>
                <Button className="customButton" onClick={AddSpring}>
                    Add Spring Semester
                </Button>
            </div>
            <div>
                <br></br>
                {SpringElement}
            </div>
        </Form.Group>
    );
}
