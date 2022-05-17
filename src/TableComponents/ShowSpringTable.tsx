import React from "react";
import { setSpringProp } from "../Interfaces/semesterInterfaces";
import { TableContentsSpring } from "./TableContentsSpring";

export function ShowSpringTable({
    setSpring,
    visible,
    searchVisible,
    planCourses,
    setPlanCourses,
    yearID,
    planID
}: // DataKey
setSpringProp): JSX.Element {
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
                            <h2>Spring Semester</h2>
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
            <TableContentsSpring
                setSpring={setSpring}
                visible={visible}
                searchVisible={searchVisible}
                planCourses={planCourses}
                setPlanCourses={setPlanCourses}
                yearID={yearID}
                planID={planID}
            ></TableContentsSpring>
        </div>
    );
}
