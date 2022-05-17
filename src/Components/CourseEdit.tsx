import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { coursePopupProps } from "../Interfaces/coursePopupInterface";
import { Course } from "../Interfaces/Courses";

export function CourseEdit({
    setPopup,
    setSelectedCourses,
    SelectedCourses,
    course
}: coursePopupProps): JSX.Element {
    const courseCopy: Course = course;
    const [course2, setCourse2] = useState<Course>(courseCopy);
    const [breadthList, setBreadthList] = useState<string>(courseCopy.breadth);
    function changeCode(event: React.ChangeEvent<HTMLInputElement>) {
        const course2Clone: Course = {
            ID: course2.ID,
            code: event.target.value,
            name: course2.name,
            descr: course2.descr,
            credits: course2.credits,
            preReq: course2.preReq,
            restrict: course2.restrict,
            breadth: course2.breadth,
            typ: course2.typ
        };
        setCourse2(course2Clone);
    }
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        const course2Clone: Course = {
            ID: course2.ID,
            code: course2.code,
            name: event.target.value,
            descr: course2.descr,
            credits: course2.credits,
            preReq: course2.preReq,
            restrict: course2.restrict,
            breadth: course2.breadth,
            typ: course2.typ
        };
        setCourse2(course2Clone);
    }
    function changeCreds(event: React.ChangeEvent<HTMLInputElement>) {
        const course2Clone: Course = {
            ID: course2.ID,
            code: course2.code,
            name: course2.name,
            descr: course2.descr,
            credits: event.target.value,
            preReq: course2.preReq,
            restrict: course2.restrict,
            breadth: course2.breadth,
            typ: course2.typ
        };
        setCourse2(course2Clone);
    }
    function changePreReq(event: React.ChangeEvent<HTMLInputElement>) {
        const course2Clone: Course = {
            ID: course2.ID,
            code: course2.code,
            name: course2.name,
            descr: course2.descr,
            credits: course2.credits,
            preReq: event.target.value,
            restrict: course2.restrict,
            breadth: course2.breadth,
            typ: course2.typ
        };
        setCourse2(course2Clone);
    }
    function changeRestrict(event: React.ChangeEvent<HTMLInputElement>) {
        const course2Clone: Course = {
            ID: course2.ID,
            code: course2.code,
            name: course2.name,
            descr: course2.descr,
            credits: course2.credits,
            preReq: course2.preReq,
            restrict: event.target.value,
            breadth: course2.breadth,
            typ: course2.typ
        };
        setCourse2(course2Clone);
    }
    function changeBreadthAS(): void {
        let breadthListClone: string = breadthList;
        if (breadthListClone.includes("Creative Arts and Humanities")) {
            breadthListClone = breadthListClone.replace(
                "Creative Arts and Humanities",
                ""
            );
        } else {
            breadthListClone =
                breadthListClone + " Creative Arts and Humanities";
        }
        const course2Clone: Course = {
            ID: course2.ID,
            code: course2.code,
            name: course2.name,
            descr: course2.descr,
            credits: course2.credits,
            preReq: course2.preReq,
            restrict: course2.restrict,
            breadth: breadthListClone,
            typ: course2.typ
        };
        setBreadthList(breadthListClone);
        setCourse2(course2Clone);
    }
    function changeBreadthHist(): void {
        let breadthListClone: string = breadthList;
        if (breadthListClone.includes("History & Cultural Change")) {
            breadthListClone = breadthListClone.replace(
                "History & Cultural Change",
                ""
            );
        } else {
            breadthListClone = breadthListClone + " History & Cultural Change";
        }
        const course2Clone: Course = {
            ID: course2.ID,
            code: course2.code,
            name: course2.name,
            descr: course2.descr,
            credits: course2.credits,
            preReq: course2.preReq,
            restrict: course2.restrict,
            breadth: breadthListClone,
            typ: course2.typ
        };
        setBreadthList(breadthListClone);
        setCourse2(course2Clone);
    }
    function changeBreadthSoc(): void {
        let breadthListClone: string = breadthList;
        if (breadthListClone.includes("Social and Behavioral Sciences")) {
            breadthListClone = breadthListClone.replace(
                "Social and Behavioral Sciences",
                ""
            );
        } else {
            breadthListClone =
                breadthListClone + " Social and Behavioral Sciences";
        }
        const course2Clone: Course = {
            ID: course2.ID,
            code: course2.code,
            name: course2.name,
            descr: course2.descr,
            credits: course2.credits,
            preReq: course2.preReq,
            restrict: course2.restrict,
            breadth: breadthListClone,
            typ: course2.typ
        };
        setBreadthList(breadthListClone);
        setCourse2(course2Clone);
    }
    function changeBreadthMath(): void {
        let breadthListClone: string = breadthList;
        if (
            breadthListClone.includes(
                "Mathematics, Natural Sciences and Technology"
            )
        ) {
            breadthListClone = breadthListClone.replace(
                "Mathematics, Natural Sciences and Technology",
                ""
            );
        } else {
            breadthListClone =
                breadthListClone +
                " Mathematics, Natural Sciences and Technology";
        }
        const course2Clone: Course = {
            ID: course2.ID,
            code: course2.code,
            name: course2.name,
            descr: course2.descr,
            credits: course2.credits,
            preReq: course2.preReq,
            restrict: course2.restrict,
            breadth: breadthListClone,
            typ: course2.typ
        };
        setBreadthList(breadthListClone);
        setCourse2(course2Clone);
    }
    function changeDescr(event: React.ChangeEvent<HTMLInputElement>) {
        const course2Clone: Course = {
            ID: course2.ID,
            code: course2.code,
            name: course2.name,
            descr: event.target.value,
            credits: course2.credits,
            preReq: course2.preReq,
            restrict: course2.restrict,
            breadth: course2.breadth,
            typ: course2.typ
        };
        setCourse2(course2Clone);
    }
    function done(): void {
        const SelectedCoursesCopy: Course[] = SelectedCourses.map(
            (course1: Course): Course => {
                if (course1.ID === course.ID) {
                    course1 = course2;
                    return course1;
                } else {
                    return course1;
                }
            }
        );
        setSelectedCourses(SelectedCoursesCopy);
        setPopup(null);
    }
    return (
        <div className="popup" style={{ zIndex: "3" }}>
            <div
                className="popup-inner"
                style={{
                    height: "600px",
                    maxWidth: "700px"
                }}
            >
                <div
                    style={{
                        marginLeft: "58ch",
                        top: "5ch",
                        position: "absolute"
                    }}
                >
                    <Button onClick={done}>Done</Button>
                </div>
                <Form.Group>
                    <Row>
                        <Col sm={2}>
                            <Form.Label>Code</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                data-TestId="code-form"
                                name="Code"
                                id="name"
                                value={course2.code}
                                type="text"
                                onChange={changeCode}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <Form.Label>Name</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                data-TestId="name-form"
                                name="Name"
                                value={course2.name}
                                type="text"
                                onChange={changeName}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <Form.Label>Credits</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                data-TestId="credits-form"
                                name="Credits"
                                value={course2.credits}
                                type="text"
                                onChange={changeCreds}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <Form.Label>PreReq</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                data-TestId="preReq-form"
                                name="PreReq"
                                value={course2.preReq}
                                type="text"
                                onChange={changePreReq}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <Form.Label>Restriction</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                data-TestId="restriction-form"
                                name="Restriction"
                                value={course2.restrict}
                                type="text"
                                onChange={changeRestrict}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label>Breadths:</Form.Label>
                        <Form.Check
                            data-TestId="art-breadths-form"
                            style={{ marginLeft: "11.5ch" }}
                            type="checkbox"
                            label="Arts and Sciences"
                            value="Arts and Sciences"
                            checked={breadthList.includes(
                                "Creative Arts and Humanities"
                            )}
                            onChange={changeBreadthAS}
                        />
                    </Row>
                    <Row>
                        <Form.Check
                            data-TestId="history-breadths-form"
                            style={{ marginLeft: "11.5ch" }}
                            type="checkbox"
                            label="History Cultural Change"
                            value="History Cultural Change"
                            checked={breadthList.includes(
                                "History & Cultural Change"
                            )}
                            onChange={changeBreadthHist}
                        />
                    </Row>
                    <Row>
                        <Form.Check
                            data-TestId="science-breadths-form"
                            style={{ marginLeft: "11.5ch" }}
                            type="checkbox"
                            label="Social and Behavioral Sciences"
                            value="Social and Behavioral Sciences"
                            checked={breadthList.includes(
                                "Social and Behavioral Sciences"
                            )}
                            onChange={changeBreadthSoc}
                        />
                    </Row>
                    <Row>
                        <Form.Check
                            data-TestId="math-breadths-form"
                            style={{ marginLeft: "11.5ch" }}
                            type="checkbox"
                            label="Mathematics, Natural Sciences and Technology"
                            value="Mathematics, Natural Sciences and Technology"
                            checked={breadthList.includes(
                                "Mathematics, Natural Sciences and Technology"
                            )}
                            onChange={changeBreadthMath}
                        />
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <Form.Label>Descr</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                data-TestId="description-form"
                                name="Descr"
                                value={course2.descr}
                                as="textarea"
                                rows={5}
                                onChange={changeDescr}
                            />
                        </Col>
                    </Row>
                </Form.Group>
            </div>
        </div>
    );
}
