import React, { useState } from "react";
import { Button, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { Course } from "../Interfaces/Courses";
//import { ACCT } from "../Data/catalog.json";
//import React from "react";
import Data from "../Data/catalog.json";
import backupCourseData from "../Data/catalog.json";

/**const { Data }: Record<string, Course> =
    // Typecast the test data that we imported to be a record matching
    //  strings to the course list
    testCourseData as unknown as Record<string, Course[]>;

// We have backup versions of the data to make sure all changes are immutable
const { ACCT: BACKUP_ACCT_COURSES }: Record<string, Course[]> =
    backupCourseData as unknown as Record<string, Course[]>;
*/
/**const COURSES = Data.map(
    (course): Course => ({
        ...course
    })
);*/
export interface AddCourseProps {
    setVisible: (newVisibility: boolean) => void;
}

const COURSES: Course[] = [];

//COURSES.map((course: Course[]) =>

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
            <div>
                <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                >
                    {COURSES.map((course: Course) => (
                        <div key={course.code}>
                            <Dropdown.Item href="#/action-1">
                                {course.code}
                            </Dropdown.Item>
                        </div>
                    ))}
                    <Dropdown.Item href="#/action-2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        Something else
                    </Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    );
}
