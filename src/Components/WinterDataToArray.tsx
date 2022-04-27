import React, { useState } from "react";
import Data from "../Data/catalog.json";
import { Course, Section } from "../Interfaces/Courses";
import { SetWinterProp } from "../Interfaces/semesterInterfaces";
import "../App.css";
import { Button } from "react-bootstrap";

export function WinterDataToArray({
    setWinter,
    Visible
}: SetWinterProp): JSX.Element {
    const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
    const courseObjects: Course[] = [];
    const StringData: string = JSON.stringify(Data);
    const DataObjects: Section[] = Object.values(JSON.parse(StringData));

    DataObjects.map((section: Section) => {
        const courseString: string = JSON.stringify(section);
        const courseList: Course[] = Object.values(JSON.parse(courseString));
        courseList.map((course: Course) => {
            courseObjects.push(course);
        });
    });

    function addTable(): JSX.Element | void {
        const courseInp: HTMLInputElement = document.getElementById(
            "searchID3"
        ) as HTMLInputElement;
        const courseObj: string = courseInp.value;
        if (
            courseObjects.some(
                (course: Course): boolean => course.code === courseObj
            )
        ) {
            const AddCourse: Course[] = courseObjects.filter(
                (course: Course): boolean => course.code === courseObj
            );
            const singleCourse: Course = AddCourse[0];
            if (
                selectedCourses.some(
                    (course: Course): boolean =>
                        course.code === singleCourse.code
                )
            ) {
                return; //needs error message
            } else {
                const AddCourse2: Course[] = [...selectedCourses, singleCourse];
                setSelectedCourses(AddCourse2);
            }
        }
    }
    function deleteTable(): void {
        setWinter(null);
    }
    function deleteCourse(course: Course) {
        const courseCopy: Course[] = selectedCourses.filter(
            (x: Course): boolean => x !== course
        );
        setSelectedCourses(courseCopy);
    }
    function clearCourses(course: Course[]) {
        course = [];
        setSelectedCourses(course);
    }
    return (
        <div>
            <div style={{ marginBottom: "1ch" }}>
                <table className="add-border">
                    {selectedCourses.map(
                        (course: Course): JSX.Element => (
                            <tr key={course.code} className="innerTR">
                                <td>{course.code}</td>
                                <td>{course.name}</td>
                                <td>{course.credits}</td>
                                {Visible && (
                                    <td>
                                        <Button
                                            style={{
                                                backgroundColor: "darkRed"
                                            }}
                                            onClick={() => deleteCourse(course)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                )}
                            </tr>
                        )
                    )}
                </table>
            </div>
            <span style={{ marginRight: "15ch", float: "right" }}>
                <input
                    id="searchID3"
                    type="text"
                    list="searchList"
                    placeholder="Type a course..."
                ></input>
                <datalist id="searchList">
                    {courseObjects.map(
                        (course: Course): JSX.Element => (
                            <option key={course.code} value={course.code}>
                                {course.code}
                            </option>
                        )
                    )}
                </datalist>
                <Button id="search-button" onClick={addTable}>
                    +
                </Button>
                <br></br>
                <br></br>
                <span
                    style={{
                        float: "right"
                    }}
                >
                    {Visible && (
                        <span>
                            <Button
                                style={{ backgroundColor: "darkRed" }}
                                onClick={deleteTable}
                            >
                                Delete Winter
                            </Button>
                            <Button
                                style={{ backgroundColor: "gold" }}
                                onClick={() => clearCourses(selectedCourses)}
                            >
                                Clear Winter
                            </Button>
                            <Button style={{ backgroundColor: "green" }}>
                                Save
                            </Button>
                        </span>
                    )}
                </span>
                <br></br>
            </span>
        </div>
    );
}
