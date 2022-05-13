import React, { useState } from "react";
//import { useLocation } from "react-router-dom";
import "../App.css";
import { YearContainer } from "./YearContainer";
import { Year } from "../Interfaces/yearInterface";
import { Button } from "react-bootstrap";
import { Course } from "../Interfaces/Courses";
import { DegreeRequirement } from "./DegreeRequirement";
import { useLocation } from "react-router-dom";

type locationStateString = { concentrationValue: string };

const yearDataKey = "Years-Data";

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
    let loadedData: Year[] = [Freshman, Sophomore, Junior, Senior];

    const previousData = localStorage.getItem(yearDataKey);

    if (previousData !== null) {
        loadedData = Object.values(JSON.parse(previousData));
    }

    const [yearList, setYearList] = useState<Year[]>([
        Freshman,
        Sophomore,
        Junior,
        Senior
    ]);
    const [yearsData, setYearsData] = useState<Year[]>(loadedData);
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
        localStorage.setItem(yearDataKey, JSON.stringify(yearListCopy));
    }
    function saveYears() {
        localStorage.setItem(yearDataKey, JSON.stringify(yearsData));
    }

    return (
        <div style={{ paddingBottom: "8ch" }}>
            <header className="App-header-Year">
                <span style={{ width: "100%", textAlign: "center" }}>
                    <span style={{ marginLeft: "8ch" }}>Year View</span>
                    <Button
                        style={{
                            float: "right",
                            marginRight: "6ch",
                            marginTop: "2ch"
                        }}
                        onClick={saveYears}
                    >
                        Save Years
                    </Button>
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
        </div>
    );
}
