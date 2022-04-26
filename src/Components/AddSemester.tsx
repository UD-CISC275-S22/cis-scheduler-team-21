import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AddFallSemester } from "./AddFallSemester";
import { AddSpringSemester } from "./AddSpringSemester";
import { AddWinterSession } from "./AddWinterSession";
import { AddSummerSession } from "./AddSummerSession";
import "../App.css";

export function AddSemester(): JSX.Element {
    const [Fallelement, setFallelement] = useState<JSX.Element>();

    function AddFall(): void {
        setFallelement(<AddFallSemester></AddFallSemester>);
    }

    function AddSpring(): void {
        setFallelement(<AddSpringSemester></AddSpringSemester>);
    }

    function AddWinter(): void {
        setFallelement(<AddWinterSession></AddWinterSession>);
    }

    function AddSummer(): void {
        setFallelement(<AddSummerSession></AddSummerSession>);
    }

    return (
        <Form.Group>
            <div style={{ textAlign: "center" }}>
                <Button className="customButton" onClick={AddSpring}>
                    Add Spring Semester
                </Button>
                <Button className="customButton" onClick={AddFall}>
                    Add Fall Semester
                </Button>
                <Button className="customButton" onClick={AddWinter}>
                    Add Winter Semester
                </Button>
                <Button className="customButton" onClick={AddSummer}>
                    Add Summer Semester
                </Button>
            </div>
            <div>
                <br></br>
                {Fallelement}
            </div>
        </Form.Group>
    );
}
