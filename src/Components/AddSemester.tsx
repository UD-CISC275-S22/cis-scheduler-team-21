import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ShowFallSemester } from "../Components/ShowFallSemester";
import "../App.css";

export function AddSemester(): JSX.Element {
    const [visible1, setVisible1] = useState<boolean>(false);
    return (
        <Form.Group>
            <br></br>
            <div>
                <Button className="customButtonLeft">
                    Add Spring Semester
                </Button>
                <Button
                    className="customButton"
                    onClick={() => setVisible1(!visible1)}
                >
                    Add Fall Semester
                </Button>
                <Button className="customButton">Add Winter Semester</Button>
                <Button className="customButton">Add Summer Semester</Button>
            </div>
            <div>
                <div>{visible1 && <ShowFallSemester></ShowFallSemester>}</div>
            </div>
        </Form.Group>
    );
}
