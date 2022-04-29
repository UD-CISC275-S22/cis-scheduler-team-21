import React from "react";
import { SetFallProp } from "../Interfaces/semesterInterfaces";
import { FallDataToArray } from "./FallDataToArray";

export function ShowFallSemester({
    setFall,
    Visible,
    SearchVisible
}: SetFallProp): JSX.Element {
    return (
        <div>
            <table className="add-border" style={{ borderBottom: 0 }}>
                <tr style={{ textAlign: "center", backgroundColor: "white" }}>
                    <h2>Fall Semester</h2>
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
            <FallDataToArray
                setFall={setFall}
                Visible={Visible}
                SearchVisible={SearchVisible}
            ></FallDataToArray>
        </div>
    );
}
