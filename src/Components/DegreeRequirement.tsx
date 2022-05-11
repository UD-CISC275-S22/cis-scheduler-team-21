import React from "react";
import { degreeProps } from "../Interfaces/degreeInterface";

export function DegreeRequirement({
    planCourses,
    concentration
}: degreeProps): JSX.Element {
    return (
        <div>
            <div>{concentration}</div>
        </div>
    );
}
