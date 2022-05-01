import React from "react";
import { SummerDataToArray } from "./SummerDataToArray";
import { SetSummerProp } from "../Interfaces/semesterInterfaces";

export function ShowSummerSession({
    setSummer,
    Visible,
    SearchVisible
}: SetSummerProp): JSX.Element {
    return (
        <div>
            <table
                data-testid="summer-table"
                className="add-border"
                style={{ borderBottom: 0 }}
            >
                <tr style={{ textAlign: "center", backgroundColor: "white" }}>
                    <h2>Summer Session</h2>
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
            <SummerDataToArray
                setSummer={setSummer}
                Visible={Visible}
                SearchVisible={SearchVisible}
            ></SummerDataToArray>
        </div>
    );
}
