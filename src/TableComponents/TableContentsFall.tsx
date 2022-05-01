import React, { useState } from "react";
import Data from "../Data/catalog.json";
import { Course, Section } from "../Interfaces/Courses";
import { SetFallProp } from "../Interfaces/semesterInterfaces";
import "../App.css";
import { Button } from "react-bootstrap";

export function TableContentsFall({
    setFall,
    Visible,
    SearchVisible
}: SetFallProp): JSX.Element {
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
            "searchID"
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
                courseInp.value = "";
            }
        }
    }
    function deleteTable(): void {
        setFall(null);
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
                <table>
                    <tbody>
                        {selectedCourses.map(
                            (course: Course): JSX.Element => (
                                <tr
                                    key={course.code}
                                    data-testid={course.code}
                                    className="innerTR"
                                >
                                    <td>{course.code}</td>
                                    <td>{course.name}</td>
                                    <td>{course.credits}</td>
                                    {Visible && (
                                        <td>
                                            <Button
                                                style={{
                                                    backgroundColor: "darkRed"
                                                }}
                                                onClick={() =>
                                                    deleteCourse(course)
                                                }
                                                data-testid={
                                                    course.code + " delete"
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    )}
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
            {SearchVisible && (
                <span
                    data-testid="fall-search-mode"
                    style={{ marginLeft: "15ch" }}
                >
                    <input
                        data-testid="searchIDFall"
                        id="searchID"
                        type="text"
                        list="searchList"
                        placeholder="Type a course..."
                    ></input>
                    <datalist id="searchList" data-testid="searchList">
                        {courseObjects.map(
                            (course: Course): JSX.Element => (
                                <option key={course.code} value={course.code}>
                                    {course.code}
                                </option>
                            )
                        )}
                    </datalist>
                    <Button data-testid="add-button" onClick={addTable}>
                        +
                    </Button>
                </span>
            )}
            <span
                style={{
                    float: "right",
                    marginRight: "31ch"
                }}
            >
                {Visible && (
                    <span data-testid="fall-edit-mode">
                        <Button
                            style={{ backgroundColor: "darkRed" }}
                            onClick={deleteTable}
                        >
                            Delete Fall
                        </Button>
                        <Button
                            data-testid="clearFall"
                            style={{ backgroundColor: "gold" }}
                            onClick={() => clearCourses(selectedCourses)}
                        >
                            Clear Fall
                        </Button>
                        <Button style={{ backgroundColor: "green" }}>
                            Save
                        </Button>
                    </span>
                )}
            </span>
            <br></br>
        </div>
    );
}
