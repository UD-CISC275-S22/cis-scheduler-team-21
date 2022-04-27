import React from "react";
import { SummerDataToArray } from "./SummerDataToArray";
import { SetSummerProp } from "../Interfaces/semesterInterfaces";

export function ShowSummerSession({
    setSummer,
    Visible
}: SetSummerProp): JSX.Element {
    return (
        <div>
            <table className="add-border" style={{ borderBottom: 0 }}>
                <tr style={{ textAlign: "center" }}>
                    <h3>Summer Session</h3>
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
            <SummerDataToArray
                setSummer={setSummer}
                Visible={Visible}
            ></SummerDataToArray>
        </div>
    );
}
