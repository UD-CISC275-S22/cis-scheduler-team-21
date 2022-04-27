import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import { ShowSpringSemester } from "./ShowSpringSemester";
import { ShowFallSemester } from "./ShowFallSemester";

export function AddSemester(): JSX.Element {
    const [Fallelement, setFallelement] = useState<JSX.Element>();
    const [Springelement, setSpringelement] = useState<JSX.Element>();
    function addFall(): void {
        setFallelement(
            <ShowFallSemester setFall={setFallelement}></ShowFallSemester>
        );
    }
    function addSpring(): void {
        setSpringelement(
            <ShowSpringSemester
                setSpring={setSpringelement}
            ></ShowSpringSemester>
        );
    }
    return (
        <Form.Group>
            <div style={{ textAlign: "center" }}>
                <Button className="customButton" onClick={addSpring}>
                    Add Spring Semester
                </Button>
                <Button className="customButton" onClick={addFall}>
                    Add Fall Semester
                </Button>
                <Button className="customButton">Add Winter Semester</Button>
                <Button className="customButton">Add Summer Semester</Button>
            </div>
            <div>
                <br></br>
                {Fallelement}
                <br></br>
                {Springelement}
            </div>
        </Form.Group>
    );
}
