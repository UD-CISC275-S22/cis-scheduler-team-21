import React from "react";
import "../App.css";

export function SemesterCreate(): JSX.Element {
    return (
        <table className="add-border" width="100%">
            <tr className="add-border">
                <h4>Fall Semester</h4>
            </tr>
            <tr className="add-border">
                <td>Courses ID</td>
                <td>Course Name</td>
                <td>Course Credit</td>
            </tr>
        </table>
    );
}

//probably make a prop argument that takes in a course and maps the attributes of the course into a table row
