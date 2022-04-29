import React from "react";
import { setSpringProp } from "../Interfaces/semesterInterfaces";
import { SpringDataToArray } from "./SpringDataToArray";

export function ShowSpringSemester({
    setSpring,
    Visible,
    SearchVisible
}: setSpringProp): JSX.Element {
    return (
        <div>
            <table className="add-border" style={{ borderBottom: 0 }}>
                <tr style={{ textAlign: "center" }}>
                    <h2>Spring Semester</h2>
                </tr>
                <tr
                    style={{ borderRight: 0, borderLeft: 0 }}
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
                    {Visible && <td></td>}
                </tr>
            </table>
            <SpringDataToArray
                setSpring={setSpring}
                Visible={Visible}
                SearchVisible={SearchVisible}
            ></SpringDataToArray>
        </div>
    );
}
