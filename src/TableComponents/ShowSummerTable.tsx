import React from "react";
import { TableContentsSummer } from "./TableContentsSummer";
import { setSummerProp } from "../Interfaces/semesterInterfaces";

export function ShowSummerTable({
    setSummer,
    visible,
    searchVisible,
    planCourses,
    setPlanCourses,
    yearID,
    planID
}: setSummerProp): JSX.Element {
    return (
        <div>
            <table
                data-testid="summer-table"
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
                            <h2>Summer Session</h2>
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
                        {visible && <td></td>}
                    </tr>
                </tbody>
            </table>
            <TableContentsSummer
                setSummer={setSummer}
                visible={visible}
                searchVisible={searchVisible}
                planCourses={planCourses}
                setPlanCourses={setPlanCourses}
                yearID={yearID}
                planID={planID}
            ></TableContentsSummer>
        </div>
    );
}
