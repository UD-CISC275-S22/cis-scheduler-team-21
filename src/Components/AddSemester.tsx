import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ShowFallSemester } from "./ShowFallSemester";
import { ShowSpringSemester } from "./ShowSpringSemester";
import { ShowWinterSession } from "./ShowWinterSession";
import { ShowSummerSession } from "./ShowSummerSession";
import "../App.css";

export function AddSemester(): JSX.Element {
    const [FallElement, setFallElement] = useState<JSX.Element>();
    const [SpringElement, setSpringElement] = useState<JSX.Element>();
    const [SummerElement, setSummerElement] = useState<JSX.Element>();
    const [WinterElement, setWinterElement] = useState<JSX.Element>();

    function AddFall(): void {
        setSpringElement(
            <ShowFallSemester setFall={setFallElement}></ShowFallSemester>
        );
    }

    function AddSpring(): void {
        setSpringElement(
            <ShowSpringSemester
                setSpring={setSpringElement}
            ></ShowSpringSemester>
        );
    }
    function AddSummer(): void {
        setSummerElement(
            <ShowSummerSession setSummer={setSummerElement}></ShowSummerSession>
        );
    }
    function AddWinter(): void {
        setSummerElement(
            <ShowWinterSession setWinter={setWinterElement}></ShowWinterSession>
        );
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
                {FallElement}
                {SpringElement}
                {SummerElement}
                {WinterElement}
            </div>
        </Form.Group>
    );
}
