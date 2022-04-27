import React from "react";
import { SetFallProp } from "../Interfaces/semesterInterfaces";
import { FallDataToArray } from "./FallDataToArray";

export function ShowFallSemester({
    setFall,
    Visible
}: SetFallProp): JSX.Element {
    return (
        <div>
            <table className="add-border" style={{ borderBottom: 0 }}>
                <tr style={{ textAlign: "center" }}>
                    <h2>Fall Semester</h2>
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
            <FallDataToArray
                setFall={setFall}
                Visible={Visible}
            ></FallDataToArray>
        </div>
    );
}
