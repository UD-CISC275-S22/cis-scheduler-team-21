import React, { useState } from "react";
//import { useLocation } from "react-router-dom";
import "../App.css";
import { YearContainer } from "./YearContainer";
import { Year } from "../Interfaces/yearInterface";
import { Button } from "react-bootstrap";
import Data from "../Data/catalog.json";
import { Course, Section } from "../Interfaces/Courses";

//type locationStateString = { yearValue: string };

export function Years(): JSX.Element {
    //const location = useLocation();
    //const { yearValue } = location.state as locationStateString;
    //const yearInt: number = parseInt(yearValue);

    const courseObjects: Course[] = [];
    const StringData: string = JSON.stringify(Data);
    const DataObjects: Section[] = Object.values(JSON.parse(StringData));

    DataObjects.map((section: Section) => {
        const courseString: string = JSON.stringify(section);
        const courseList: Course[] = Object.values(JSON.parse(courseString));
        courseList.map((course: Course) => {
            courseObjects.push(course);
        });
    });

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
    const [editVis, setEditVis] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(5);
    function addYear(): void {
        setCounter(counter + 1);
        const nextCount: number = counter + 1;
        const newYear: Year = {
            title: "New School Year",
            id: nextCount
        };
        const yearListCopy: Year[] = [...yearList, newYear];
        setYearList(yearListCopy);
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
                        onClick={() => setEditVis(!editVis)}
                    >
                        Rename Years
                    </Button>
                </span>
            </header>
            {yearList.map(
                (year: Year): JSX.Element => (
                    <span key={year.id}>
                        <YearContainer
                            year={year}
                            setYearList={setYearList}
                            yearList={yearList}
                            editVis={editVis}
                        ></YearContainer>
                        <hr style={{ zIndex: "-1", position: "relative" }}></hr>
                    </span>
                )
            )}
            <div
                style={{
                    textAlign: "center",
                    zIndex: "-1",
                    position: "relative"
                }}
            >
                <Button onClick={addYear} className="orangeButton">
                    Add Year
                </Button>
            </div>
        </div>
    );
}
