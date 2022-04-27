import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import { ShowSpringSemester } from "./ShowSpringSemester";
import { ShowFallSemester } from "./ShowFallSemester";

export function AddSemester(): JSX.Element {
    const [Fallelement, setFallelement] = useState<JSX.Element>(<></>);
    const [Springelement, setSpringelement] = useState<JSX.Element>(<></>);
    const [Visible, setVisible] = useState<boolean>(false);
    function setVis(): void {
        setVisible(!Visible);
        if (Fallelement !== <></>) {
            addFall(!Visible);
        }
        if (Springelement !== <></>) {
            addSpring(!Visible);
        }
    }
    function addFall(visibleState: boolean): void {
        setFallelement(
            <ShowFallSemester
                setFall={setFallelement}
                Visible={visibleState}
            ></ShowFallSemester>
        );
    }
    function addSpring(visibleState: boolean): void {
        setSpringelement(
            <ShowSpringSemester
                setSpring={setSpringelement}
                Visible={visibleState}
            ></ShowSpringSemester>
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
                {Fallelement}
                <br></br>
                {Springelement}
            </div>
        </div>
    );
}
