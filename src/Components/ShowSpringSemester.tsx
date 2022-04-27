import React from "react";
import { SpringDataToArray } from "./SpringDataToArray";
import { SetSpringProp } from "../Interfaces/semesterInterfaces";

export function ShowSpringSemester({ setSpring }: SetSpringProp): JSX.Element {
    return (
        <div>
            <table className="add-border" style={{ borderBottom: 0 }}>
                <tr style={{ textAlign: "center" }}>
                    <h3>Spring Semester</h3>
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
            <SpringDataToArray setSpring={setSpring}></SpringDataToArray>
        </div>
    );
}
