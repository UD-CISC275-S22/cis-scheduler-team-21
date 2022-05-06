import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { SetFallProp } from "../Interfaces/semesterInterfaces";
import { TableContentsFall } from "./TableContentsFall";

const DataKey = "Fall-Semester-Data";

export function ShowFallTable({
    setFall,
    Visible,
    SearchVisible
}: //DataKey
SetFallProp): JSX.Element {
    /**let loadedData = (
        
    );
    const [data, setData] = useState<JSX.Element>(loadedData);
    const previousData = localStorage.getItem(DataKey);

    if (previousData !== null) {
        loadedData = JSON.parse(previousData);
    }

    function saveButton() {
        localStorage.setItem(DataKey, JSON.stringify(data));
        const obj = JSON.parse(data);
    }
    function parseData() {
        if (data.type === String) {
            {
                return localStorage.getItem(DataKey, JSON.parse(data));
            }
        }
    }*/
    return (
        <div>
            <div>
                <Button style={{ backgroundColor: "green" }}>
                    Save Fall Semester
                </Button>
            </div>
            <table data-testid="fall-table" className="add-border">
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
        </div>
    );
}
