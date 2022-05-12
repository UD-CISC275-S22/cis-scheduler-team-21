import React from "react";
import { Course } from "../Interfaces/Courses";

interface planCoursesProp {
    planCourses: Course[];
    //degreeSetter: () => void;
    //setDegree: (deg: JSX.Element | null) => void;
}

export function SystemsAndNetworks({
    planCourses
}: planCoursesProp): JSX.Element {
    const coreClasses: string[] = [
        "CISC 108",
        "CISC 181",
        "CISC 210",
        "CISC 220",
        "CISC 260",
        "CISC 275",
        "CISC 303",
        "CISC 320",
        "CISC 361",
        "CISC 372",
        "MATH 210",
        "MATH 241"
    ];
    /*   const additionalReq: string[] = ["CISC 355", "ENGL 312", "ENGL 410"];

    const capstoneClasses: string[] = [
        "CISC 498",
        "CISC 499",
        "UNIV 401",
        "UNIV 402"
    ];
    const labScience: string[] = [
        "BISC 207",
        "BISC 208",
        "CHEM 103",
        "CHEM 133",
        "CHEM 104",
        "CHEM 134",
        "GEOL 105",
        "GEOL 115",
        "GEOL 107",
        "GEOL 110",
        "PHYS 207",
        "PHYS 227",
        "PHYS 208",
        "PHYS 228"
    ]; */
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
