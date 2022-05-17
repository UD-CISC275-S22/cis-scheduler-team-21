import React from "react";
import { setFallProp } from "../Interfaces/semesterInterfaces";
import { TableContentsFall } from "./TableContentsFall";

export function ShowFallTable({
    setFall,
    visible,
    searchVisible,
    planCourses,
    setPlanCourses,
    yearID,
    planID
}: setFallProp): JSX.Element {
    return (
        <div>
            <table
                data-testid="fall-table"
                className="add-border"
                style={{ borderBottom: 0 }}
            >
                <tbody>
                    <tr
                        style={{
                            backgroundColor: "white",
                            width: "100%"
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
                        className="inner-border"
                        style={{
                            borderRight: 0,
                            borderLeft: 0
                        }}
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
            <TableContentsFall
                setFall={setFall}
                visible={visible}
                searchVisible={searchVisible}
                planCourses={planCourses}
                setPlanCourses={setPlanCourses}
                yearID={yearID}
                planID={planID}
            ></TableContentsFall>
        </div>
    );
}
