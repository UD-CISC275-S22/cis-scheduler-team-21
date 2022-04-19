import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
//import { Course } from "../Interfaces/Courses";
import { SemesterCreate } from "./SemesterCreate";
import Data from "../Data/catalog.json";

export interface AddCourseProps {
    setVisible: (newVisibility: boolean) => void;
}

const DataToString = JSON.stringify(Data);
const DataToObject = JSON.parse(DataToString);
console.log(DataToObject);

export function AddCourse({ setVisible }: AddCourseProps): JSX.Element {
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
    //const [course, setCourse] = useState<string>("");

    /**function updateCourse(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setCourse(event.target.value);
    }*/

    /**<Form.Text>
                        {DataToObject.map((course: Course) => (
                            <div key={course.name}>
                                <p>{course.code}</p>
                                {console.log(course.code)}
                            </div>
                        ))}
                    </Form.Text>
                    <Form.Group controlId="SearchCourse">
                    <Form.Label>Search for Course</Form.Label>
    return (
        <div>
            <SemesterCreate></SemesterCreate>
            <br></br>
            <AddCourse setVisible={setVisible}></AddCourse>
            <div>Fall Courses:</div>
            {visible && (
                <Form.Group controlId="formCourseName">
                    <Form.Control
                        type="Course"
                        placeholder="Enter Course Code"
                        value={course}
                        onChange={updateCourse}
                    />
                    <Button>Search</Button>
                </Form.Group>*/
    return (
        <div>
            <SemesterCreate></SemesterCreate>
            <AddCourse setVisible={setVisible}></AddCourse>
            {visible && (
                <div className="input-group">
                    <div className="form-outline">
                        <Form.Control
                            type="search"
                            id="form1"
                            placeholder="Search"
                        />
                    </div>
                    <button
                        id="search-button"
                        type="button"
                        className="btn btn-primary"
                    >
                        🔎
                    </button>
                </div>
            )}
            <div>{visible && <Button>Add to Schedule</Button>}</div>
            {console.log(DataToObject)}
        </div>
    );
}
