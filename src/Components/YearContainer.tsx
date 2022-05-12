import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { setYearProp, Year } from "../Interfaces/yearInterface";
import { AddSemester } from "./AddSemester";

export function YearContainer({
    year,
    setYearList,
    yearList,
    editVis,
    planCourses,
    setPlanCourses
}: setYearProp): JSX.Element {
    const [yearClone, setYear] = useState<Year>(year);
    const [Visible, setVisible] = useState<boolean>(false);
    function deleteYear(): void {
        const newYearList: Year[] = yearList.filter(
            (year1: Year): boolean => year1.id !== year.id
        );
        setYearList(newYearList);
    }
    function updateYearTitle(event: React.ChangeEvent<HTMLInputElement>) {
        const updatedYear: Year = {
            title: event.target.value,
            id: year.id
        };
        setYear(updatedYear);
    }
    return (
        <div style={{ zIndex: "0", display: "relative" }}>
            <br></br>
            <span>
                {editVis && (
                    <Form.Group>
                        <Form.Control
                            data-testid="YearEdit"
                            placeholder="Enter new Year name..."
                            value={yearClone.title}
                            style={{ width: "20%", marginLeft: "3.5ch" }}
                            onChange={updateYearTitle}
                        />
                    </Form.Group>
                )}
                <span className="yearDisplay">{yearClone.title}</span>
                <Button
                    className="orangeButton"
                    style={{
                        marginBottom: "4ch",
                        fontSize: "80%"
                    }}
                    onClick={() => setVisible(!Visible)}
                >
                    +
                </Button>
                {editVis && (
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
                )}
            </span>
            <div style={{ display: Visible ? "block" : "none" }}>
                <AddSemester
                    planCourses={planCourses}
                    setPlanCourses={setPlanCourses}
                />
            </div>
        </div>
    );
}
