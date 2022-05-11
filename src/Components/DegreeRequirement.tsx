import { Console } from "console";
import React from "react";
import { Course } from "../Interfaces/Courses";
import { degreeProps } from "../Interfaces/degreeInterface";

export function DegreeRequirement({
    planCourses,
    concentration
}: degreeProps): JSX.Element {
    const coreClasses: string[] = [
        "CISC 108",
        "CISC 181",
        "CISC 210",
        "CISC 220",
        "CISC 260"
    ];
    return (
        <div>
            <div>
                {coreClasses.map((course: string): JSX.Element => {
                    if (
                        planCourses.some(
                            (courseObj: Course): boolean =>
                                courseObj.code === course
                        )
                    ) {
                        return <div>{course + "YES"}</div>;
                    } else {
                        return <div>{course + "NO"}</div>;
                    }
                })}
            </div>
        </div>
    );
}
