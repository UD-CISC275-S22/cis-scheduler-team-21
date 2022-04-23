import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { SemesterCreate } from "./SemesterCreate";
import { DataToArray } from "./DataToArray";
//import { Course } from "../Interfaces/Courses";
//import Data from "../Data/catalog.json";

export interface AddCourseProps {
    setVisible: (newVisibility: boolean) => void;
}

//const arr = DataToArray();

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

/**function FilterArray(event: React.ChangeEvent<HTMLInputElement>) {
    const filtered = arr.filter(
        (course: Course): boolean => course.code === event.target.value
    );
    return filtered;
}
/**export function ShowCourseCode(): JSX.Element {
    const filteredArr = arr.filter();
    return (
    filteredArr.forEach(function (item: Course)) {
        <div>{item}</div>
    }
    );
}*/

export function ShowFallSemester(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    //const [course, setCourse] = useState<string>("");

    /**function updateCourse(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setCourse(event.target.value);
    }*/

    return (
        <div>
            <SemesterCreate></SemesterCreate>
            <AddCourse setVisible={setVisible}></AddCourse>
            {visible && (
                <div>
                    <DataToArray></DataToArray>
                </div>
            )}
            <div>{visible && <Button>Add to Schedule</Button>}</div>
        </div>
    );
}
