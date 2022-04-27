import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ShowFallSemester } from "./ShowFallSemester";
import { ShowSpringSemester } from "./ShowSpringSemester";
import { ShowWinterSession } from "./ShowWinterSession";
import { ShowSummerSession } from "./ShowSummerSession";
import "../App.css";

export function AddSemester(): JSX.Element {
    const [FallElement, setFallElement] = useState<JSX.Element>(<></>);
    const [SpringElement, setSpringElement] = useState<JSX.Element>(<></>);
    const [SummerElement, setSummerElement] = useState<JSX.Element>(<></>);
    const [WinterElement, setWinterElement] = useState<JSX.Element>(<></>);
    const [Visible, setVisible] = useState<boolean>(false);
    function setVis(): void {
        setVisible(!Visible);
        if (FallElement !== <></>) {
            addFall(!Visible);
        }
        if (SpringElement !== <></>) {
            addSpring(!Visible);
        }
    }
    function addFall(visibleState: boolean): void {
        setFallElement(
            <ShowFallSemester
                setFall={setFallElement}
                Visible={visibleState}
            ></ShowFallSemester>
        );
    }
    function addSpring(visibleState: boolean): void {
        setSpringElement(
            <ShowSpringSemester
                setSpring={setSpringElement}
                Visible={visibleState}
            ></ShowSpringSemester>
        );
    }
    function addSummer(visibleState: boolean): void {
        setSummerElement(
            <ShowSummerSession
                setSummer={setSummerElement}
                Visible={visibleState}
            ></ShowSummerSession>
        );
    }
    function addWinter(visibleState: boolean): void {
        setWinterElement(
            <ShowWinterSession
                setWinter={setWinterElement}
                Visible={visibleState}
            ></ShowWinterSession>
        );
    }
    return (
        <div>
            <div style={{ textAlign: "center", marginLeft: "37ch" }}>
                <Button
                    className="customButton"
                    onClick={() => addFall(Visible)}
                >
                    Add Fall Semester
                </Button>
                <Button className="customButton">Add Winter Semester</Button>
                <Button
                    className="customButton"
                    onClick={() => addSpring(Visible)}
                >
                    Add Spring Semester
                </Button>
                <Button className="customButton">Add Summer Semester</Button>
                <Button
                    onClick={setVis}
                    style={{
                        display: "inline",
                        float: "right",
                        marginRight: "23ch"
                    }}
                >
                    Edit Mode
                </Button>
            </div>
            <div>
                <br></br>
                {FallElement}
                <br></br>
                {SpringElement}
                <br></br>
                {SummerElement}
                <br></br>
                {WinterElement}
            </div>
        </div>
    );
}
