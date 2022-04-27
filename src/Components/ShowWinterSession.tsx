import React from "react";
import { WinterDataToArray } from "./WinterDataToArray";
import { SetWinterProp } from "../Interfaces/semesterInterfaces";

export function ShowWinterSession({
    setWinter,
    Visible
}: SetWinterProp): JSX.Element {
    return (
        <div>
            <table
                className="add-border"
                style={{ borderBottom: 0, float: "right" }}
            >
                <tr style={{ textAlign: "center" }}>
                    <h3>Winter Session</h3>
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
            <WinterDataToArray
                setWinter={setWinter}
                Visible={Visible}
            ></WinterDataToArray>
        </div>
    );
}
