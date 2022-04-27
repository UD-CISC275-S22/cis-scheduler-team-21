import React from "react";
import { WinterDataToArray } from "./WinterDataToArray";
import { SetWinterProp } from "../Interfaces/semesterInterfaces";

export function ShowWinterSession({ setWinter }: SetWinterProp): JSX.Element {
    return (
        <div>
            <table className="add-border" style={{ borderBottom: 0 }}>
                <tr style={{ textAlign: "center" }}>
                    <h3>Winter Session</h3>
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
            <WinterDataToArray setWinter={setWinter}></WinterDataToArray>
        </div>
    );
}
