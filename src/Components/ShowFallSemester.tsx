import React from "react";
import { DataToArray } from "./DataToArray";
import { SetFallProp } from "../Interfaces/semesterInterfaces";

export function ShowFallSemester({ setFall }: SetFallProp): JSX.Element {
    return (
        <div>
            <table className="add-border" style={{ borderBottom: 0 }}>
                <tr style={{ textAlign: "center" }}>
                    <h3>Fall Semester</h3>
                </tr>
                <tr
                    style={{ borderBottom: 0, borderRight: 0, borderLeft: 0 }}
                    className="add-border"
                >
                    <td>Courses ID</td>
                    <td>Course Name</td>
                    <td>Course Credit</td>
                </tr>
            </table>
            <DataToArray setFall={setFall}></DataToArray>
        </div>
    );
}
