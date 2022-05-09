import React, { useState } from "react";
import Data from "../Data/catalog.json";
import { Course, Section } from "../Interfaces/Courses";
import { SetFallProp } from "../Interfaces/semesterInterfaces";
import { Button } from "react-bootstrap";
import { CourseEdit } from "../Components/CourseEdit";

export function TableContentsFall({
    setFall,
    Visible,
    SearchVisible
}: SetFallProp): JSX.Element {
    const [input, setInput] = useState<string>("");
    const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
    const [classPopup, setClassPopup] = useState<JSX.Element | null>(null);

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
                clearSearchBar();
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
    function updateInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setInput(event.target.value);
    }
    function clearSearchBar(): void {
        const courseInp: HTMLCollectionOf<HTMLInputElement> =
            document.getElementsByTagName("input");
        const arrayElements: HTMLInputElement[] = Array.from(courseInp);
        arrayElements.map(
            (input: HTMLInputElement): string => (input.value = "")
        );
    }
    function coursePopup(courseArg: Course): void {
        return setClassPopup(
            <CourseEdit
                setPopup={setClassPopup}
                setSelectedCourses={setSelectedCourses}
                SelectedCourses={selectedCourses}
                course={courseArg}
            />
        );
    }
    return (
        <div>
            <div style={{ marginBottom: "1ch" }}>
                <table className="add-border">
                    <tbody>
                        {selectedCourses.map(
                            (course: Course): JSX.Element => (
                                <tr
                                    key={course.code}
                                    data-testid={course.code}
                                    className="innerTR"
                                >
                                    {Visible && (
                                        <td>
                                            <ins
                                                style={{
                                                    cursor: "pointer",
                                                    color: "blue"
                                                }}
                                                onClick={() =>
                                                    coursePopup(course)
                                                }
                                            >
                                                {course.code}
                                            </ins>
                                        </td>
                                    )}
                                    {!Visible && <td>{course.code}</td>}
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
                        onBlur={updateInput}
                        defaultValue={""}
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
                    </span>
                )}
            </span>
            <br></br>
            {classPopup}
        </div>
    );
}
