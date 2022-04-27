import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ShowFallSemester } from "./ShowFallSemester";
import { ShowSpringSemester } from "./ShowSpringSemester";
import { ShowWinterSession } from "./ShowWinterSession";
import { ShowSummerSession } from "./ShowSummerSession";
import "../App.css";

export function AddSemester(): JSX.Element {
    const [FallElement, setFallElement] = useState<JSX.Element | null>(null);
    const [SpringElement, setSpringElement] = useState<JSX.Element | null>(
        null
    );
    const [SummerElement, setSummerElement] = useState<JSX.Element | null>(
        null
    );
    const [WinterElement, setWinterElement] = useState<JSX.Element | null>(
        null
    );
    const [Visible, setVisible] = useState<boolean>(false);
    function setVis(): void {
        setVisible(!Visible);
        if (FallElement !== null) {
            addFall(!Visible);
        }
        if (SpringElement !== null) {
            addSpring(!Visible);
        }
        if (WinterElement !== null) {
            addWinter(!Visible);
        }
        if (SummerElement !== null) {
            addSummer(!Visible);
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
                <Button
                    className="customButton"
                    onClick={() => addWinter(Visible)}
                >
                    Add Winter Session
                </Button>
                <Button
                    className="customButton"
                    onClick={() => addSpring(Visible)}
                >
                    Add Spring Semester
                </Button>
                <Button
                    className="customButton"
                    onClick={() => addSummer(Visible)}
                >
                    Add Summer Session
                </Button>
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
                {WinterElement}
                <br></br>
                {SpringElement}
                <br></br>
                {SummerElement}
            </div>
        </div>
    );
}
