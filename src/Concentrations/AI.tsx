import React from "react";
import { Row, Col } from "react-bootstrap";
import { course } from "../Interfaces/Courses";
import { planCoursesProp } from "../Interfaces/degreeInterface";

export function AI({ planCourses }: planCoursesProp): JSX.Element {
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
        "CISC 442",
        "CISC 481",
        "CISC 483",
        "CISC 484"
    ];
    const extraMath: string[] = ["MATH 205", "MATH 350"];
    const systemsReq: string[] = ["CISC 361", "CISC372"];
    const restrictedElectives1: string[] = [
        "CISC 436",
        "CISC 437",
        "CISC 489",
        "CISC889",
        "EDUC 462",
        "ELEG 404",
        "ELEG 418",
        "ELEG 387",
        "ELEG 487",
        "LING 202",
        "LING 404"
    ];
    const restrictedElectives2: string[] = [
        "LING 418",
        "LING 444",
        "LING 451",
        "LING 455",
        "MAST 632",
        "MATH 242",
        "MATH 349",
        "MEEG 671",
        "PSYC 310",
        "PSYC 340",
        "PSYCH 344"
    ];

    return (
        <div>
            <Row>
                <Col sm={"auto"} data-testid="core-requirements-AI">
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

                <Col
                    sm={"auto"}
                    style={{ whiteSpace: "pre" }}
                    data-testid="additional-requirements-AI"
                >
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
                    <b>Concentration Core {"\n"}</b>
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
                    <b>Systems Requirement {"\n"}</b>
                    <i>-One of the following- {"\n"}</i>
                    {systemsReq.map((course: string) => {
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
                    <i>-twelve credits of the following- {"\n"}</i>
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
