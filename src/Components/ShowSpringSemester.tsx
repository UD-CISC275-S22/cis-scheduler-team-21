import React from "react";
import { setSpringProp } from "../Interfaces/semesterInterfaces";
import { SpringDataToArray } from "./SpringDataToArray";

export function ShowSpringSemester({
    setSpring,
    Visible
}: setSpringProp): JSX.Element {
    return (
        <div>
            <table className="add-border" style={{ borderBottom: 0 }}>
                <tr style={{ textAlign: "center" }}>
                    <h2>Spring Semester</h2>
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
            <SpringDataToArray
                setSpring={setSpring}
                Visible={Visible}
            ></SpringDataToArray>
        </div>
    );
}
