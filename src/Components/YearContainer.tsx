import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { setYearProp, Year } from "../Interfaces/yearInterface";
import { AddSemester } from "./AddSemester";

export function YearContainer({
    year,
    setYear,
    yearList
}: setYearProp): JSX.Element {
    const [Visible, setVisible] = useState<boolean>(false);
    const [Semesters] = useState<JSX.Element>(<AddSemester />);
    function deleteYear(): void {
        const newYearList: Year[] = yearList.filter(
            (year1: Year): boolean => year1.id !== year.id
        );
        setYear(newYearList);
    }
    return (
        <div>
            <br></br>
            <span>
                <span className="yearDisplay">{year.title}</span>
                <Button
                    className="orangeButton"
                    style={{ marginBottom: "4ch", fontSize: "80%" }}
                    onClick={() => setVisible(!Visible)}
                >
                    +
                </Button>
                <Button
                    onClick={deleteYear}
                    style={{
                        backgroundColor: "darkRed",
                        marginLeft: "2ch",
                        fontSize: "1ch",
                        marginBottom: "5ch"
                    }}
                >
                    Delete
                </Button>
            </span>
            <div style={{ display: Visible ? "block" : "none" }}>
                {Semesters}
            </div>
        </div>
    );
}
