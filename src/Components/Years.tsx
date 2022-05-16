import React, { useState } from "react";
//import { useLocation } from "react-router-dom";
import "../App.css";
import { YearContainer } from "./YearContainer";
import { Year } from "../Interfaces/yearInterface";
import { Button, Form } from "react-bootstrap";
import { Course } from "../Interfaces/Courses";
import { DegreeRequirement } from "./DegreeRequirement";
import { useLocation } from "react-router-dom";
import { CoursePool } from "./CoursePool";

type locationStateString = { concentrationValue: string };

const FallCheckedCourseData: string | null =
    localStorage.getItem("FallSem-Data");
let loadedData: Course[] = [];

if (FallCheckedCourseData !== null) {
    loadedData = JSON.parse(FallCheckedCourseData);
    console.log(loadedData);
}

export function Years(): JSX.Element {
    const location = useLocation();
    const { concentrationValue } = location.state as locationStateString;

    const Freshman: Year = {
        title: "Freshman",
        id: 1
    };
    const Sophomore: Year = {
        title: "Sophomore",
        id: 2
    };
    const Junior: Year = {
        title: "Junior",
        id: 3
    };
    const Senior: Year = {
        title: "Senior",
        id: 4
    };

    const [yearList, setYearList] = useState<Year[]>([
        Freshman,
        Sophomore,
        Junior,
        Senior
    ]);
    //const [yearsData, setYearsData] = useState<Year[]>(loadedData);
    const [editVis, setEditVis] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(5);
    const [planCourses, setPlanCourses] = useState<Course[]>([]);
    function addYear(): void {
        setCounter(counter + 1);
        const nextCount: number = counter + 1;
        const newYear: Year = {
            title: "New School Year",
            id: nextCount
        };
        const yearListCopy: Year[] = [...yearList, newYear];
        setYearList(yearListCopy);
        //setYearsData([...loadedData, newYear]);
        //localStorage.setItem(yearDataKey, JSON.stringify(yearListCopy));
    }
    /**function saveYears() {
        localStorage.setItem(yearDataKey, JSON.stringify(yearsData));
    }*/

    function deleteCourse(course: Course) {
        const courseCopy: Course[] = loadedData.filter(
            (x: Course): boolean => x !== course
        );
        loadedData = [...courseCopy];
    }

    const [checked, setChecked] = useState<boolean>(false);
    let courseCodes: string[] = [];

    function checkBox(code: string, e: React.ChangeEvent<HTMLInputElement>) {
        const checkedOrNot = e.target.checked;
        if (checkedOrNot == true) {
            setChecked(true);
            courseCodes = courseCodes.includes(code)
                ? [...courseCodes]
                : [...courseCodes, code];
        } else {
            setChecked(false);
            courseCodes = courseCodes.filter(
                (courseCode: string): boolean => courseCode == code
            );
        }
        //console.log(courseCodes);
    }

    return (
        <div style={{ paddingBottom: "8ch" }}>
            <header className="App-header-Year">
                <span style={{ width: "100%", textAlign: "center" }}>
                    <span style={{ marginLeft: "8ch" }}>Year View</span>
                    <Button
                        style={{
                            float: "right",
                            marginRight: "1ch",
                            marginTop: "2ch"
                        }}
                        onClick={() => setEditVis(!editVis)}
                    >
                        Rename Years
                    </Button>
                </span>
            </header>
            <div>
                <DegreeRequirement
                    //key={course.id}
                    planCourses={planCourses}
                    concentration={concentrationValue}
                ></DegreeRequirement>
            </div>
            {yearList.map(
                (year: Year): JSX.Element => (
                    <span key={year.id}>
                        <YearContainer
                            year={year}
                            setYearList={setYearList}
                            yearList={yearList}
                            editVis={editVis}
                            planCourses={planCourses}
                            setPlanCourses={setPlanCourses}
                        ></YearContainer>
                        <hr style={{ zIndex: "-1", position: "relative" }}></hr>
                    </span>
                )
            )}
            <div
                style={{
                    textAlign: "center",
                    zIndex: "0",
                    position: "absolute"
                }}
            >
                <Button onClick={addYear} className="orangeButton">
                    Add Year
                </Button>
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <header className="App-header-Pool">
                    <span style={{ width: "100%", textAlign: "center" }}>
                        <span>Course Pool</span>
                    </span>
                </header>
                <div style={{ marginBottom: "1ch" }}>
                    <table className="add-border">
                        <tbody>
                            {loadedData.map(
                                (course: Course): JSX.Element => (
                                    <tr
                                        key={course.code}
                                        data-testid={course.code}
                                        className="innerTR"
                                    >
                                        <td>{course.code}</td>
                                        <td>{course.name}</td>
                                        <td>{course.credits}</td>
                                        <td>
                                            <td>
                                                <Button
                                                    style={{
                                                        backgroundColor:
                                                            "darkRed"
                                                    }}
                                                    onClick={() =>
                                                        deleteCourse(course)
                                                    }
                                                    data-testid={
                                                        course.code + " delete"
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                            <td>
                                                <Form.Check
                                                    type="checkbox"
                                                    id={course.code}
                                                    className="checkBox"
                                                    onChange={(e) => {
                                                        checkBox(
                                                            course.code,
                                                            e
                                                        );
                                                    }}
                                                ></Form.Check>
                                            </td>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
