import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { setYearProp } from "../Interfaces/yearInterface";
//import { Year } from "../Interfaces/yearInterface";
import { AddSemester } from "./AddSemester";

//{ DataKey }: Year
export function YearContainer({ year }: setYearProp): JSX.Element {
    const [Visible, setVisible] = useState<boolean>(false);
    const [Semesters] = useState<JSX.Element>(<AddSemester />);

    /**function displayYear({ year }: setYearProp): number {
        return year;
    }
    /**function saveButton() {
        localStorage.setItem(DataKey, JSON.stringify(Semesters));
    }
    <Button
                    style={{ float: "right", backgroundColor: "green" }}
                    //onClick={saveButton}
                >
                    Save Year
                </Button>*/
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
