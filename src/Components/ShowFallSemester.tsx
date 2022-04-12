import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
//import React from "react";

export interface AddCourseProps {
    setVisible: (newVisibility: boolean) => void;
}

function AddCourse({ setVisible }: AddCourseProps): JSX.Element {
    return (
        <div>
            <div>
                <Button onClick={() => setVisible(true)}>Add Course</Button>
                <Button onClick={() => setVisible(false)}>Remove Course</Button>
            </div>
        </div>
    );
}

export function ShowFallSemester(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const [course, setCourse] = useState<string>("");

    function updateCourse(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setCourse(event.target.value);
    }

    return (
        <div>
            <AddCourse setVisible={setVisible}></AddCourse>
            <div>Fall Courses:</div>
            {visible && (
                <Form.Group controlId="formCourseName">
                    <Form.Control
                        as="textarea"
                        rows={1}
                        value={course}
                        onChange={updateCourse}
                    />
                </Form.Group>
                //<div className="AddCourse">{course}</div>
            )}
        </div>
    );
}
