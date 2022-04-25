import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ShowFallSemester } from "../Components/ShowFallSemester";
import "../App.css";

export function AddSemester(): JSX.Element {
    const [Fallelement, setFallelement] = useState<JSX.Element>();
    function addFall(): void {
        setFallelement(<ShowFallSemester></ShowFallSemester>);
    }
    return (
        <Form.Group>
            <div style={{ textAlign: "center" }}>
                <Button className="customButton">Add Spring Semester</Button>
                <Button className="customButton" onClick={addFall}>
                    Add Fall Semester
                </Button>
                <Button className="customButton">Add Winter Semester</Button>
                <Button className="customButton">Add Summer Semester</Button>
            </div>
            <div>
                <br></br>
                {Fallelement}
            </div>
        </Form.Group>
    );
}
