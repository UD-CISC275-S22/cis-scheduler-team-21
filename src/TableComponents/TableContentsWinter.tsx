import React, { useState } from "react";
import Data from "../Data/catalog.json";
import { Course, Section } from "../Interfaces/Courses";
import { SetWinterProp } from "../Interfaces/semesterInterfaces";
import { Button } from "react-bootstrap";

export function TableContentsWinter({
    setWinter,
    Visible,
    SearchVisible
}: SetWinterProp): JSX.Element {
    const [input, setInput] = useState<string>("");
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
        if (
            courseObjects.some(
                (course: Course): boolean => course.code === input
            )
        ) {
            const AddCourse: Course[] = courseObjects.filter(
                (course: Course): boolean => course.code === input
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
                setInput("");
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
    function updateInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setInput(event.target.value);
    }
    return (
        <div>
            <div style={{ marginBottom: "1ch" }}>
                <table className="add-border">
                    <tbody>
                        {selectedCourses.map(
                            (course: Course): JSX.Element => (
                                <tr
                                    data-testid={course.code}
                                    key={course.code}
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
                    data-testid="winter-search-mode"
                    style={{ marginLeft: "15ch" }}
                >
                    <input
                        data-testid="searchIDWinter"
                        id="searchID3"
                        type="text"
                        list="searchList"
                        placeholder="Type a course..."
                        onBlur={updateInput}
                    ></input>
                    <datalist data-testid="searchList" id="searchList">
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
                </span>
            )}
            <span
                style={{
                    float: "right",
                    marginRight: "26ch"
                }}
            >
                {Visible && (
                    <span data-testid="winter-edit-mode">
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
                    </span>
                )}
            </span>
            <br></br>
        </div>
    );
}
