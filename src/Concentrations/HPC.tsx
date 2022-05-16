import React from "react";
import { Row, Col } from "react-bootstrap";
import { Course } from "../Interfaces/Courses";
import { planCoursesProp } from "../Interfaces/degreeInterface";

export function HPC({ planCourses }: planCoursesProp): JSX.Element {
    const planCoursesString: string[] = planCourses.map(
        (course: Course): string => course.code
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
        "MATH 210",
        "MATH 241"
    ];
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

    const concentrationReq: string[] = [
        "CISC 360",
        "CISC 361",
        "CISC 372",
        "CISC 450",
        "CISC 471",
        "MATH 242",
        "MATH 243"
    ];
    const dataTrack: string[] = [
        "CISC 437",
        "MATH 350",
        "MATH 450",
        "CISC 483 or CISC 484"
    ];
    const dataElective: string[] = [
        "MATH 302",
        "MATH 349",
        "MATH 351",
        "MATH 535",
        "ANY 300+ CISC COURSE"
    ];
    const mathTrack: string[] = [
        "MATH 351",
        "MATH 428",
        "MATH 205 or MATH 350"
    ];
    const mathElective: string[] = [
        "MATH 205",
        "MATH 350",
        "ANY 300+ CISC COURSE"
    ];

    return (
        <div>
            <b style={{ marginLeft: "44ch" }}>Choose One Track</b>
            <Row>
                <Col sm={"auto"}>
                    <b>Core Requirement {"\n"}</b>
                    {coreClasses.map((course: string): JSX.Element => {
                        if (
                            planCourses.some(
                                (courseObj: Course): boolean =>
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
                                (courseObj: Course): boolean =>
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
                                (courseObj: Course): boolean =>
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
                    <b>Concentration Core {"\n"}</b>
                    {concentrationReq.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: Course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else {
                            return course + " \n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Data Track Requirements {"\n"}</b>
                    {dataTrack.map((course: string) => {
                        if (
                            planCourses.some((courseObj: Course): boolean =>
                                course.includes(courseObj.code)
                            )
                        ) {
                            return course + "✅\n";
                        } else {
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Data Track Electives {"\n"}</b>
                    <i>-Five Credits of the following- {"\n"}</i>
                    {dataElective.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: Course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅\n";
                        } else {
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Math Track Requirements {"\n"}</b>
                    {mathTrack.map((course: string) => {
                        if (
                            planCourses.some((courseObj: Course): boolean =>
                                course.includes(courseObj.code)
                            )
                        ) {
                            return course + "✅\n";
                        } else {
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Math Track Electives {"\n"}</b>
                    <i>-Five Credits of the following- {"\n"}</i>
                    {mathElective.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: Course): boolean =>
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
                                (courseObj: Course): boolean =>
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
