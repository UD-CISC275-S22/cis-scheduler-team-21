import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { coursePopupProps } from "../Interfaces/coursePopupInterface";
import { Course } from "../Interfaces/Courses";

export function CourseEdit({
    setPopup,
    setSelectedCourses,
    SelectedCourses,
    course
}: coursePopupProps): JSX.Element {
    const courseCopy: Course = { ...course };
    const [course2, setCourse2] = useState<Course>(courseCopy);
    function changeCode(event: React.ChangeEvent<HTMLInputElement>) {
        const course2Clone: Course = {
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
    function done(): void {
        const SelectedCoursesCopy: Course[] = SelectedCourses.map(
            (course1: Course): Course => {
                if (course1.code === course.code) {
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
        <div className="popup">
            <div
                className="popup-inner"
                style={{
                    zIndex: "2",
                    height: "500px",
                    maxWidth: "500px"
                }}
            >
                <Form.Group>
                    <Form.Control
                        value={course2.code}
                        type="text"
                        onChange={changeCode}
                    />
                </Form.Group>
                <div
                    style={{
                        marginTop: "90%",
                        marginLeft: "95%"
                    }}
                >
                    <Button onClick={done}>Done</Button>
                </div>
            </div>
        </div>
    );
}
