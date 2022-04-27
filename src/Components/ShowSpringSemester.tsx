import React from "react";
import { setSpringProp } from "../Interfaces/semesterInterfaces";
import { SpringDataToArray } from "./SpringDataToArray";

export function ShowSpringSemester({ setSpring }: setSpringProp): JSX.Element {
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
