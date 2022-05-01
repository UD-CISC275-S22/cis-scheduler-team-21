import React from "react";
import { SetFallProp } from "../Interfaces/semesterInterfaces";
import { TableContentsFall } from "./TableContentsFall";

export function ShowFallTable({
    setFall,
    Visible,
    SearchVisible
}: SetFallProp): JSX.Element {
    return (
        <div>
            <table
                data-testid="fall-table"
                /* className="add-border"
                style={{ borderBottom: 0 }} */
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
                        /* style={{ borderRight: 0, borderLeft: 0 }}
                        className="inner-border" */
                        style={{ width: "100%", display: "table" }}
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
            <TableContentsFall
                setFall={setFall}
                Visible={Visible}
                SearchVisible={SearchVisible}
            ></TableContentsFall>
        </div>
    );
}
