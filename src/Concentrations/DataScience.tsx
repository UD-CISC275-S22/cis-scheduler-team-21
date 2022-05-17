import React from "react";
import { Row, Col } from "react-bootstrap";
import { course } from "../Interfaces/Courses";
import { planCoursesProp } from "../Interfaces/degreeInterface";

export function DataScience({ planCourses }: planCoursesProp): JSX.Element {
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
        "MATH 210",
        "MATH 241"
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

    const concentrationReq: string[] = [
        "CISC 304",
        "CISC 372",
        "CISC 437",
        "CISC 481",
        "MATH 205",
        "MATH 242",
        "MATH 243",
        "MATH 349"
    ];
    const advancedDataReq: string[] = ["CISC 483", "CISC 484"];
    const advancedMathReq: string[] = ["MATH 302", "MATH 350", "MATH 426"];
    const restrictedElectives1: string[] = [
        "CISC 361",
        "CISC 410",
        "CISC 436",
        "CISC 440",
        "CISC 442",
        "CISC 449",
        "CISC 450",
        "CISC 471",
        "CISC 474",
        "CISC 483",
        "CISC 484",
        "CISC 489"
    ];
    const restrictedElectives2: string[] = [
        "ELEG 387",
        "ELEG 487",

        "MATH 302",
        "MATH 350",
        "MATH 428",
        "MATH 450"
    ];

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
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Concentration Core {"\n"}</b>
                    <div data-testid="DATA-core">
                        {concentrationReq.map((course: string) => {
                            if (
                                planCourses.some(
                                    (courseObj: course): boolean =>
                                        courseObj.code === course
                                )
                            ) {
                                return course + "✅\n";
                            } else {
                                return course + " \n";
                            }
                        })}
                    </div>
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Advanced Data Requirement {"\n"}</b>
                    <i>-One of the following- {"\n"}</i>
                    {advancedDataReq.map((course: string) => {
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
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Advanced Math Requirement {"\n"}</b>
                    <i>-One of the following- {"\n"}</i>
                    {advancedMathReq.map((course: string) => {
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
                <Col sm={"1"} style={{ whiteSpace: "pre", marginRight: "3ch" }}>
                    <b>Restricted Electives {"\n"}</b>
                    <i>-Three credits of the following- {"\n"}</i>
                    {restrictedElectives1.map((course: string) => {
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
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    {"\n \n"}
                    {restrictedElectives2.map((course: string) => {
                        if (
                            planCourses.some(
                                (courseObj: course): boolean =>
                                    courseObj.code === course
                            )
                        ) {
                            return course + "✅ \n";
                        } else {
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col
                    sm={"auto"}
                    style={{ whiteSpace: "pre", marginLeft: "3ch" }}
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
