import React from "react";
import { Row, Col } from "react-bootstrap";
import { Course } from "../Interfaces/Courses";
import { planCoursesProp } from "../Interfaces/degreeInterface";

export function Bioinformatics({ planCourses }: planCoursesProp): JSX.Element {
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
        "BISC 207",
        "BISC 208",
        "BISC 401",
        "CHEM 103",
        "CHEM 133",
        "CHEM 104",
        "CHEM 134",
        "CISC 372",
        "CISC 436",
        "MATH 242",
        "MATH 349"
    ];
    const chemSeq: string[] = [
        "CHEM 213",
        "CHEM 215",
        "",
        "CHEM 321",
        "CHEM 325"
    ];
    const dataAnalysis: string[] = ["CISC 483", "CPEG 484"];
    const restrictedElectives: string[] = [
        "ANFS 300",
        "ANFS 310",
        "ANFS 470",
        "BISC 403",
        "BISC 492",
        "CHEM 214",
        "CHEM 216",
        "CHEM 322",
        "CHEM 326",
        "MATH 243",
        "ANY 300+ CISC Course"
    ];
    return (
        <div>
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
                    <b>Prob/Stat Course {"\n"}</b>
                    <i>-One of the following- {"\n"}</i>
                    {extraMath.map((course: string) => {
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
                    <b>Data Analysis Requirement {"\n"}</b>
                    <i>-One of the following Groups- {"\n"}</i>
                    {dataAnalysis.map((course: string) => {
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
                    <b>Chem Sequence Requirement {"\n"}</b>
                    <i>-Two of the following- {"\n"}</i>
                    {chemSeq.map((course: string) => {
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
                            return course + "\n";
                        }
                    })}
                </Col>
                <Col sm={"auto"} style={{ whiteSpace: "pre" }}>
                    <b>Restricted Electives {"\n"}</b>
                    <i>-Six credits of the following- {"\n"}</i>
                    {restrictedElectives.map((course: string) => {
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
