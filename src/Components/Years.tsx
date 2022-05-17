import React, { useState } from "react";
//import { useLocation } from "react-router-dom";
import "../App.css";
import { YearContainer } from "./YearContainer";
import { Year } from "../Interfaces/yearInterface";
import { Button } from "react-bootstrap";
import { Course } from "../Interfaces/Courses";
import { DegreeRequirement } from "./DegreeRequirement";
import { useLocation } from "react-router-dom";
//import { fallDataKey } from "../TableComponents/TableContentsFall";

export function Years(): JSX.Element {
    type locationStateString = { concentrationValue: string };
    const location = useLocation();
    const l = location.state as locationStateString;
    const { concentrationValue } = l || {};

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
    const saveDataKey = "yearsList-Data";
    let loadedData: Year[] = [Freshman, Sophomore, Junior, Senior];
    const previousData: string | null = localStorage.getItem(saveDataKey);
    let mostRecentID = 5;
    if (previousData !== null) {
        loadedData = Object.values(JSON.parse(previousData));
        mostRecentID = loadedData[loadedData.length - 1].id + 1;
    }
    const [yearList, setYearList] = useState<Year[]>(loadedData);
    const [editVis, setEditVis] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(mostRecentID);
    const [planCourses, setPlanCourses] = useState<Course[]>([]);
    const [degreeReq, setDegreeReq] = useState<JSX.Element | null>(null);
    function addYear(): void {
        const nextCount: number = counter + 1;
        const newYear: Year = {
            title: "New School Year",
            id: nextCount
        };
        setCounter(nextCount);
        const yearListCopy: Year[] = [...yearList, newYear];
        setYearList(yearListCopy);
        localStorage.setItem(saveDataKey, JSON.stringify(yearListCopy));
    }
    function saveButton(): void {
        localStorage.setItem(saveDataKey, JSON.stringify(yearList));
    }
    function showReq(): void {
        return setDegreeReq(
            <DegreeRequirement
                data-TestId="degree-requirements-popup"
                planCourses={planCourses}
                concentration={concentrationValue}
                setDegreeReq={setDegreeReq}
            ></DegreeRequirement>
        );
    }

    /**function deleteCourse(course: Course) {
        const courseCopy: Course[] = loadedFallData.filter(
            (x: Course): boolean => x !== course
        );
        loadedFallData = [...courseCopy];
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

    const FallCheckedCourseData: string | null =
        localStorage.getItem("FallSem-Data");
    let loadedFallData: Course[] = [];

    if (FallCheckedCourseData !== null) {
        loadedFallData = Object.values(JSON.parse(FallCheckedCourseData));
        //localStorage.removeItem(fallDataKey);
        console.log(loadedFallData);
    }
    
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
                            {loadedFallData.map(
                                (course: Course): JSX.Element => (
                                    <tr
                                        key={course.code}
                                        //data-testid={course.code}
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
    */
    return (
        <div style={{ paddingBottom: "8ch" }}>
            <header className="App-header-Year">
                <div style={{ width: "100%", textAlign: "center" }}>
                    Year View
                </div>
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <Button
                        onClick={() => setEditVis(!editVis)}
                        data-TestId="rename-delete-button"
                    >
                        Rename/Delete Years
                    </Button>
                    <Button onClick={saveButton}>Save</Button>
                    <Button onClick={showReq}>Course Requirements</Button>
                </div>
            </header>
            <div>{degreeReq}</div>
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
        </div>
    );
}
