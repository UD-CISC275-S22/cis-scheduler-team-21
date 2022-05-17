import React from "react";
import { Row, Col } from "react-bootstrap";
import { course } from "../Interfaces/Courses";
import { planCoursesProp } from "../Interfaces/degreeInterface";

export function Traditional({ planCourses }: planCoursesProp): JSX.Element {
    const planCoursesString: string[] = planCourses.map(
        (course: course): string => course.code
    );
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
        "MATH 241",
        "MATH 242",
        "Six additional credits of computer science technical electives numbered 301 or above, except for CISC 355, CISC 356, CISC 357, CISC 465, CISC 366 and CISC 466.",
        "Twelve credits in advanced courses in a focus area approved by the student's CISC advisor and the CISC Undergraduate Coordinator."
    ];
    const extraMath: string[] = ["MATH 205", "MATH 350"];
    let additionalReq: string[];
    if (
        planCoursesString.includes("CISC 355") &&
        planCoursesString.includes("ENGL312")
    ) {
        additionalReq = ["CISC 355", "ENGL 312"];
    } else if (
        planCoursesString.includes("CISC 355") &&
        planCoursesString.includes("ENGL410")
    ) {
        additionalReq = ["CISC 355", "ENGL 410"];
    } else {
        additionalReq = ["CISC 355", "ENGL 312", "", "CISC 355", "ENGL410"];
    }

    let capstoneClasses: string[];
    if (
        planCoursesString.includes("CISC 498") &&
        planCoursesString.includes("CISC 499")
    ) {
        capstoneClasses = ["CISC 498", "CISC 499"];
    } else if (
        planCoursesString.includes("UNIV 401") &&
        planCoursesString.includes("UNIV 402")
    ) {
        capstoneClasses = ["UNIV 401", "UNIV 402"];
    } else {
        capstoneClasses = ["CISC 498", "CISC 499", "", "UNIV 401", "UNIV 402"];
    }

    let labScience: string[];
    if (
        planCoursesString.includes("BISC 207") &&
        planCoursesString.includes("BISC 208")
    ) {
        labScience = ["BISC 207", "BISC 208"];
    } else {
        labScience = [
            "BISC 207",
            "BISC 208",
            "",
            "CHEM 103",
            "CHEM 133",
            "CHEM 104",
            "CHEM 134",
            "",
            "GEOL 105",
            "GEOL 115",
            "GEOL 107",
            "",
            "GEOL 107",
            "GEOL 110",
            "",
            "PHYS 207",
            "PHYS 227",
            "PHYS 208",
            "PHYS 228"
        ];
    }

    return (
        <div>
            <Row>
                <Col sm={"auto"}>
                    <b>Core Requirement {"\n"}</b>
                    {coreClasses.map((course: string): JSX.Element => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return <div key={course}>{course + "✅\n"}</div>;
                        } else {
                            return <div key={course}>{course + ""}</div>;
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Additional Requirements {"\n"}</b>
                    {additionalReq.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else if (course === "") {
                            return "or \n";
                        } else {
                            return course + " \n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Capstone Requirement {"\n"}</b>
                    {capstoneClasses.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else if (course === "") {
                            return "or \n";
                        } else {
                            return course + " \n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Prob/Stat course {"\n"}</b>
                    <i>-One of the following- {"\n"}</i>
                    {extraMath.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else {
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col
                    sm={"auto"}
                    style={{ whiteSpace: "pre", marginLeft: "1.5ch" }}
                >
                    <b>Lab Science Requirement {"\n"}</b>
                    <i>-Choose one group- {"\n"}</i>
                    {labScience.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else if (course === "") {
                            return "or \n";
                        } else {
                            return course + " \n";
                        }
                    })}
                </Col>
            </Row>
        </div>
    );
}
