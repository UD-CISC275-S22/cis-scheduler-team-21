import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { setYearProp } from "../Interfaces/yearInterface";
//import { Year } from "../Interfaces/yearInterface";
import { AddSemester } from "./AddSemester";

export function YearContainer({ year }: setYearProp): JSX.Element {
    const [Visible, setVisible] = useState<boolean>(false);
    const [Semesters] = useState<JSX.Element>(<AddSemester />);
    //const [data, setData] = useState<JSX.Element>(loadedData);

    /**function displayYear({ year }: setYearProp): number {
        return year;
    }*/
    /**function saveButton() {
        localStorage.setItem(DataKey, JSON.stringify(data));
    }*/

    return (
        <div>
            <div>
                <Button style={{ float: "right", backgroundColor: "green" }}>
                    Save Year
                </Button>
            </div>
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
