import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { YearContainer } from "./YearContainer";

type locationStateString = { yearValue: string };

export function Years(): JSX.Element {
    const location = useLocation();
    const { yearValue } = location.state as locationStateString;
    const yearInt: number = parseInt(yearValue);
    const yearList: number[] = [
        yearInt,
        yearInt + 1,
        yearInt + 2,
        yearInt + 3,
        yearInt + 4
    ];
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
