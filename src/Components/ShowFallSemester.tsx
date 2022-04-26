import React from "react";
import { DataToArray } from "./DataToArray";

export function ShowFallSemester(): JSX.Element {
    return (
        <div>
            <table className="add-border" style={{ borderBottom: 0 }}>
                <tr>
                    <h4>Fall Semester</h4>
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
            <DataToArray></DataToArray>
        </div>
    );
}
