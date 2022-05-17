import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { setYearProp, year } from "../Interfaces/yearInterface";
import { AddSemester } from "./AddSemester";

export function YearContainer({
    year,
    setYearList,
    yearList,
    editVis,
    planCourses,
    setPlanCourses,
    planID
}: setYearProp): JSX.Element {
    const [yearClone, setYear] = useState<year>(year);
    const [Visible, setVisible] = useState<boolean>(false);
    function deleteYear(): void {
        const newYearList: year[] = yearList.filter(
            (year1: year): boolean => year1.id !== year.id
        );
        setYearList(newYearList);
        localStorage.setItem(
            "yearsList-Data" + planID.toString(),
            JSON.stringify(newYearList)
        );
    }
    function updateYearTitle(event: React.ChangeEvent<HTMLInputElement>) {
        const updatedYear: year = {
            title: event.target.value,
            id: year.id
        };
        const yearListClone: year[] = yearList.map((yearInList: year) => {
            if (yearInList.id === year.id) {
                return updatedYear;
            } else {
                return yearInList;
            }
        });
        setYearList(yearListClone);
        setYear(updatedYear);
        localStorage.setItem(
            "yearsList-Data" + planID.toString(),
            JSON.stringify(yearListClone)
        );
    }
    return (
        <div
            style={{ zIndex: "0", display: "relative" }}
            data-testid="year-container"
        >
            <br></br>
            <span>
                {editVis && (
                    <Form.Group>
                        <Form.Control
                            name="yearTxt"
                            data-testid="year-name-edit"
                            placeholder="Enter new Year name..."
                            value={yearClone.title}
                            style={{ width: "20%", marginLeft: "3.5ch" }}
                            onChange={updateYearTitle}
                        />
                    </Form.Group>
                )}
                <span className="yearDisplay">{yearClone.title}</span>
                <Button
                    data-testid="show-hide-button"
                    className="orangeButton"
                    style={{
                        marginBottom: "4ch",
                        fontSize: "80%"
                    }}
                    onClick={() => setVisible(!Visible)}
                >
                    Show/Hide
                </Button>
                {editVis && (
                    <Button
                        data-testid={year.id.toString() + " delete"}
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
                    yearID={year.id}
                    planID={planID}
                />
            </div>
        </div>
    );
}
