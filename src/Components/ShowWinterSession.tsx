import React from "react";
import { WinterDataToArray } from "./WinterDataToArray";
import { SetWinterProp } from "../Interfaces/semesterInterfaces";

export function ShowWinterSession({
    setWinter,
    Visible,
    SearchVisible
}: SetWinterProp): JSX.Element {
    return (
        <div>
            <table
                className="add-border"
                style={{ borderBottom: 0, float: "right" }}
            >
                <tr style={{ textAlign: "center" }}>
                    <h2>Winter Session</h2>
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
            <WinterDataToArray
                setWinter={setWinter}
                Visible={Visible}
                SearchVisible={SearchVisible}
            ></WinterDataToArray>
        </div>
    );
}
