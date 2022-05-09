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
    const courseCopy: Course = {
        ID: course.ID,
        code: course.code,
        name: course.name,
        descr: course.descr,
        credits: course.credits,
        preReq: course.preReq,
        restrict: course.restrict,
        breadth: course.breadth,
        typ: course.typ
    };
    const [course2, setCourse2] = useState<Course>(courseCopy);
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
    function done(): void {
        const SelectedCoursesCopy: Course[] = SelectedCourses.map(
            (course1: Course): Course => {
                if (course1.ID === course.ID) {
                    course1 = {
                        ID: course2.ID,
                        code: course2.code,
                        name: course2.name,
                        descr: course2.descr,
                        credits: course2.credits,
                        preReq: course2.preReq,
                        restrict: course2.restrict,
                        breadth: course2.breadth,
                        typ: course2.typ
                    };
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
        <div className="popup">
            <div
                className="popup-inner"
                style={{
                    height: "600px",
                    maxWidth: "700px"
                }}
            >
                <Form.Group>
                    <Row>
                        <Col sm={2}>
                            <Form.Label>Code</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                name="Code"
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
                                name="Restriction"
                                value={course2.restrict}
                                type="text"
                                onChange={changeRestrict}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <div
                    style={{
                        marginTop: "20%",
                        marginLeft: "95%"
                    }}
                >
                    <Button onClick={done}>Done</Button>
                </div>
            </div>
        </div>
    );
}
