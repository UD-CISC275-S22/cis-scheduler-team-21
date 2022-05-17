import React from "react";
import { TableContentsWinter } from "./TableContentsWinter";
import { setWinterProp } from "../Interfaces/semesterInterfaces";

export function ShowWinterTable({
    setWinter,
    visible,
    searchVisible,
    planCourses,
    setPlanCourses,
    yearID,
    planID
}: //DataKey
setWinterProp): JSX.Element {
    return (
        <div>
            <table
                data-testid="winter-table"
                className="add-border"
                style={{ borderBottom: 0, float: "right" }}
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
                            <h2>Winter Session</h2>
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
            <TableContentsWinter
                setWinter={setWinter}
                visible={visible}
                searchVisible={searchVisible}
                planCourses={planCourses}
                setPlanCourses={setPlanCourses}
                yearID={yearID}
                planID={planID}
            ></TableContentsWinter>
        </div>
    );
}
