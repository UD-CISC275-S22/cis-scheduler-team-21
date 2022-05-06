import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { YearContainer } from "./YearContainer";
import { Plan } from "../Interfaces/Courses";
//import { Button } from "react-bootstrap";
//import { useState } from "react";
//import { Year } from "../Interfaces/yearInterface";
//import { Link } from "react-router-dom";

type locationStateString = { yearValue: string };

const DataKey = "Page-Data";
let loadedData: Plan[] = [];

const previousData = localStorage.getItem(DataKey);

if (previousData !== null) {
    loadedData = JSON.parse(previousData);
}

//{ DataKey }: Year
export function Years(): JSX.Element {
    //const [data, setData] = useState<JSX.Element>(loadedData);
    const location = useLocation();
    const { yearValue } = location.state as locationStateString;
    const yearInt = parseInt(yearValue);
    const yearList: number[] = [
        yearInt,
        yearInt + 1,
        yearInt + 2,
        yearInt + 3,
        yearInt + 4
    ];
    /**function saveButton() {
        localStorage.setItem(DataKey, JSON.stringify(yearList));
    }*/
    /**<Link to="/">
                <Button style={{ backgroundColor: "green", float: "right" }}>
                    Save Plan
                </Button>
            </Link>*/
    return (
        <div>
            <header className="App-header-Year">Year View</header>
            {yearList.map(
                (year: number): JSX.Element => (
                    <div key={year}>
                        <YearContainer year={year}></YearContainer>
                    </div>
                )
            )}
        </div>
    );
}
