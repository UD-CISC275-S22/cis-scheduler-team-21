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
                    <div>
                        <h2>Spring Semester</h2>
                    </div>
                </tr>
                <tr
                    style={{ borderBottom: 0, borderRight: 0, borderLeft: 0 }}
                    className="inner-border"
                >
                    <td>
                        <h5>Courses ID</h5>
                    </td>
                    <td>
                        <h5>Course Name</h5>
                    </td>
                    <td>
                        <h5>Course Credit</h5>
                    </td>
                </tr>
            </table>
            <SpringDataToArray
                setSpring={setSpring}
                Visible={Visible}
            ></SpringDataToArray>
        </div>
    );
}
