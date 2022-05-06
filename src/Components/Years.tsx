import React, { useState } from "react";
//import { useLocation } from "react-router-dom";
import "../App.css";
import { YearContainer } from "./YearContainer";
import { Year } from "../Interfaces/yearInterface";
import { Button } from "react-bootstrap";

//type locationStateString = { yearValue: string };

export function Years(): JSX.Element {
    //const location = useLocation();
    //const { yearValue } = location.state as locationStateString;
    //const yearInt: number = parseInt(yearValue);
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
                    <span style={{ marginLeft: "5.5ch" }}>Year View</span>
                    <Button
                        style={{
                            float: "right",
                            marginRight: "6ch",
                            marginTop: "2ch"
                        }}
                        onClick={() => setEditVis(!editVis)}
                    >
                        Edit
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
                        <hr></hr>
                    </span>
                )
            )}
            <div style={{ textAlign: "center" }}>
                <Button onClick={addYear} className="orangeButton">
                    Add Year
                </Button>
            </div>
        </div>
    );
}
