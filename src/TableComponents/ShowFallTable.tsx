import React from "react";
import { SetFallProp } from "../Interfaces/semesterInterfaces";
import { TableContentsFall } from "./TableContentsFall";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function ShowFallTable({
    setFall,
    Visible,
    SearchVisible,
    planCourses,
    setPlanCourses
}: SetFallProp): JSX.Element {
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
                        {Visible && <td></td>}
                    </tr>
                </tbody>
            </table>
            <DndProvider backend={HTML5Backend}>
                <TableContentsFall
                    setFall={setFall}
                    Visible={Visible}
                    SearchVisible={SearchVisible}
                    planCourses={planCourses}
                    setPlanCourses={setPlanCourses}
                ></TableContentsFall>
            </DndProvider>
        </div>
    );
}
