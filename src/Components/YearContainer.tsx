import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { setYearProp } from "../Interfaces/yearInterface";
import { AddSemester } from "./AddSemester";

export function YearContainer({ year }: setYearProp): JSX.Element {
    const [Visible, setVisible] = useState<boolean>(false);
    const [Semesters] = useState<JSX.Element>(<AddSemester />);
    return (
        <div>
            <br></br>
            <span>
                <span className="yearDisplay">{year}</span>
                <Button
                    className="orangeButton"
                    style={{ marginBottom: "4ch", fontSize: "80%" }}
                    onClick={() => setVisible(!Visible)}
                >
                    +
                </Button>
            </span>
            <div style={{ display: Visible ? "block" : "none" }}>
                {Semesters}
            </div>
            <hr></hr>
        </div>
    );
}
