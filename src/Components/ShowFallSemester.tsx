import React from "react";
import { DataToArray } from "./DataToArray";
import { SetFallProp } from "../Interfaces/semesterInterfaces";

export function ShowFallSemester({
    setFall,
    Visible
}: SetFallProp): JSX.Element {
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
            <DataToArray setFall={setFall} Visible={Visible}></DataToArray>
        </div>
    );
}
