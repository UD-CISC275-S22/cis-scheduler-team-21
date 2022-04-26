import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ShowFallSemester } from "../Components/ShowFallSemester";
import "../App.css";

export function AddSemester(): JSX.Element {
    const [Fallelement, setFallelement] = useState<JSX.Element>(<></>);
    const [Visible, setVisible] = useState<boolean>(false);
    function addFall(visibleState: boolean): void {
        setFallelement(
            <ShowFallSemester
                setFall={setFallelement}
                Visible={visibleState}
            ></ShowFallSemester>
        );
    }
    function setVis(): void {
        setVisible(!Visible);
        if (Fallelement !== <></>) {
            addFall(!Visible);
        }
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
                <Button className="customButton">Add Spring Semester</Button>
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
            </div>
        </div>
    );
}
