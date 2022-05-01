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
            <table
                data-testid="spring-table"
                className="add-border"
                style={{ borderBottom: 0 }}
            >
                <tbody>
                    <tr
                        style={{
                            backgroundColor: "white"
                        }}
                    >
                        <th
                            style={{
                                textAlign: "center"
                            }}
                        >
                            <h2>Fall Semester</h2>
                        </th>
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
                </tbody>
            </table>
            <SpringDataToArray
                setSpring={setSpring}
                Visible={Visible}
                SearchVisible={SearchVisible}
            ></SpringDataToArray>
        </div>
    );
}
