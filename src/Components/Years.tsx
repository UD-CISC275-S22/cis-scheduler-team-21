import React, { useState } from "react";
//import { useLocation } from "react-router-dom";
import "../App.css";
import { YearContainer } from "./YearContainer";
import { year } from "../Interfaces/yearInterface";
import { Button } from "react-bootstrap";
import { course } from "../Interfaces/Courses";
import { DegreeRequirement } from "./DegreeRequirement";
import { useLocation, Link } from "react-router-dom";

type locationState = { concentrationValue: string; planID: number };

export function Years(): JSX.Element {
    //type locationStateString = { concentrationValue: string };
    const location = useLocation();
    const passedState = location.state as locationState;
    const passedProps = passedState || {};
    const concentrationValue: string = passedProps.concentrationValue;
    const planID: number = passedProps.planID;

    const Freshman: year = {
        title: "Freshman",
        id: 1
    };
    const Sophomore: year = {
        title: "Sophomore",
        id: 2
    };
    const Junior: year = {
        title: "Junior",
        id: 3
    };
    const Senior: year = {
        title: "Senior",
        id: 4
    };
    let loadedData: year[] = [];
    let mostRecentID = 0;
    let loadedPlanData: course[] = [];
    let saveDataKey = "";
    if (planID !== undefined) {
        saveDataKey = "yearsList-Data" + planID.toString();
        loadedData = [Freshman, Sophomore, Junior, Senior];
        const previousData: string | null = localStorage.getItem(saveDataKey);
        mostRecentID = 5;
        if (previousData !== null && previousData !== undefined) {
            loadedData = Object.values(JSON.parse(previousData));
            mostRecentID = loadedData[loadedData.length - 1].id + 1;
        }

        const savePlanKey = "Plan-Data" + planID.toString();
        const previousPlanData: string | null =
            localStorage.getItem(savePlanKey);
        if (previousPlanData !== null) {
            loadedPlanData = Object.values(JSON.parse(previousPlanData));
        }
    }

    const [yearList, setYearList] = useState<year[]>(loadedData);
    const [editVis, setEditVis] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(mostRecentID);
    const [planCourses, setPlanCourses] = useState<course[]>(loadedPlanData);
    const [degreeReq, setDegreeReq] = useState<JSX.Element | null>(null);
    function addYear(): void {
        const nextCount: number = counter + 1;
        const newYear: year = {
            title: "New School year",
            id: nextCount
        };
        setCounter(nextCount);
        const yearListCopy: year[] = [...yearList, newYear];
        setYearList(yearListCopy);
        localStorage.setItem(saveDataKey, JSON.stringify(yearListCopy));
    }
    function showReq(): void {
        return setDegreeReq(
            <DegreeRequirement
                data-testid="degree-requirements-popup"
                planCourses={planCourses}
                concentration={concentrationValue}
                setDegreeReq={setDegreeReq}
            ></DegreeRequirement>
        );
    }
    function save(): void {
        window.location.reload();
    }
    return (
        <div style={{ paddingBottom: "8ch" }}>
            <header className="App-header-year">
                <div style={{ width: "100%", textAlign: "center" }}>
                    year View
                </div>
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <Button
                        onClick={() => setEditVis(!editVis)}
                        data-testid="edit-years-button"
                        style={{
                            marginLeft: "4ch",
                            marginRight: ".75ch",
                            backgroundColor: "rgba(19, 221, 204, 0.88)",
                            color: "black"
                        }}
                    >
                        Edit Years
                    </Button>
                    <Button
                        onClick={showReq}
                        style={{
                            backgroundColor: "rgba(19, 221, 204, 0.88)",
                            color: "black"
                        }}
                    >
                        course Requirements
                    </Button>
                </div>
                <div>
                    <Link to="/">
                        <Button
                            style={{
                                position: "absolute",
                                top: "6ch",
                                left: "2ch",
                                backgroundColor: "rgba(19, 221, 204, 0.88)",
                                color: "black"
                            }}
                        >
                            {"<-"}Back
                        </Button>
                    </Link>
                    <Button
                        style={{
                            position: "absolute",
                            top: "6ch",
                            left: "14ch",
                            backgroundColor: "green",
                            borderColor: "none",
                            color: "white"
                        }}
                        onClick={save}
                    >
                        save
                    </Button>
                </div>
            </header>
            <div>{degreeReq}</div>
            {yearList.map(
                (year: year): JSX.Element => (
                    <span key={year.id}>
                        <YearContainer
                            year={year}
                            setYearList={setYearList}
                            yearList={yearList}
                            editVis={editVis}
                            planCourses={planCourses}
                            setPlanCourses={setPlanCourses}
                            planID={planID}
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
                    Add year
                </Button>
            </div>
        </div>
    );
}
