import React, { useState } from "react";
import Data from "../Data/catalog.json";
import { Course, CourseJSON, Section } from "../Interfaces/Courses";
import { SetSummerProp } from "../Interfaces/semesterInterfaces";
import { Button } from "react-bootstrap";
import { CourseEdit } from "../Components/CourseEdit";
import { ShowSummerTable } from "./ShowSummerTable";

export function TableContentsSummer({
    setSummer,
    Visible,
    SearchVisible,
    planCourses,
    setPlanCourses
}: SetSummerProp): JSX.Element {
    const [input, setInput] = useState<string>("");
    const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
    const [classPopup, setClassPopup] = useState<JSX.Element | null>(null);
    const courseObjects: Course[] = [];
    //const [course, setCourse] = useState<Course[]>(loadedData);
    const StringData: string = JSON.stringify(Data);
    const DataObjects: Section[] = Object.values(JSON.parse(StringData));

    DataObjects.map((section: Section) => {
        const courseString: string = JSON.stringify(section);
        const courseList: CourseJSON[] = Object.values(
            JSON.parse(courseString)
        );
        courseList.map((course: CourseJSON) => {
            const courseTemp: Course = {
                ID: course.code,
                code: course.code,
                name: course.name,
                descr: course.descr,
                credits: course.credits,
                preReq: course.preReq,
                restrict: course.restrict,
                breadth: course.breadth,
                typ: course.typ
            };
            courseObjects.push(courseTemp);
        });
    });
    let originalCourse: Course;
    function addTable(): JSX.Element | void {
        if (
            courseObjects.some(
                (course: Course): boolean => course.code === input
            )
        ) {
            /* if (
                !planCourses.some(
                    (course: Course): boolean => course.code === input
                )
            ) { */
            const AddCourse: Course[] = courseObjects.filter(
                (course: Course): boolean => course.code === input
            );
            const singleCourse: Course = AddCourse[0];
            if (
                selectedCourses.some(
                    (course: Course): boolean => course.ID === singleCourse.ID
                )
            ) {
                return; //needs error message>
            } else {
                const addNewCourse: Course[] = [
                    ...selectedCourses,
                    singleCourse
                ];
                const planCoursesCopy: Course[] = [
                    ...planCourses,
                    singleCourse
                ];
                setSelectedCourses(addNewCourse);
                setPlanCourses(planCoursesCopy);
                setSummer(
                    <ShowSummerTable
                        setSummer={setSummer}
                        Visible={Visible}
                        SearchVisible={SearchVisible}
                        planCourses={planCoursesCopy}
                        setPlanCourses={setPlanCourses}
                    ></ShowSummerTable>
                );
                setInput("");
                clearSearchBar();
            }
        }
    }
    function deleteTable(): void {
        setSummer(null);
    }
    function deleteCourse(course: Course) {
        const courseCopy: Course[] = selectedCourses.filter(
            (x: Course): boolean => x !== course
        );
        const planCoursesCopy: Course[] = planCourses.filter(
            (course2: Course) => course2.code !== course.code
        );
        setPlanCourses(planCoursesCopy);
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
    function reset(course: Course): void {
        courseObjects.map((course1: Course): Course => {
            if (course1.ID === course.ID) {
                originalCourse = course1;
                return course1;
            } else {
                return course1;
            }
        });
        const selectedCopy: Course[] = selectedCourses.map(
            (course1: Course): Course => {
                if (course1.ID === course.ID) {
                    course1 = originalCourse;
                    return course1;
                } else {
                    return course1;
                }
            }
        );
        setSelectedCourses(selectedCopy);
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

                                            <Button
                                                onClick={() => reset(course)}
                                            >
                                                Reset
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
                    data-testid="summer-search-mode"
                    style={{ marginLeft: "15ch" }}
                >
                    <input
                        data-testid="searchIDSummer"
                        id="searchID4"
                        type="text"
                        list="searchList"
                        placeholder="Type a course..."
                        onBlur={updateInput}
                        defaultValue={""}
                    ></input>
                    <datalist id="searchList" data-testid="searchList">
                        {courseObjects.map((course: Course) => (
                            <option key={course.code} value={course.code}>
                                {course.code}
                            </option>
                        ))}
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
                    <span data-testid="summer-edit-mode">
                        <Button
                            style={{ backgroundColor: "darkRed" }}
                            onClick={deleteTable}
                        >
                            Delete Summer
                        </Button>
                        <Button
                            data-testid="clearSummer"
                            style={{ backgroundColor: "gold" }}
                            onClick={() => clearCourses(selectedCourses)}
                        >
                            Clear Summer
                        </Button>
                        <Button style={{ backgroundColor: "green" }}>
                            Save Summer
                        </Button>
                    </span>
                )}
            </span>
            <br></br>
            <div style={{ zIndex: "5", position: "relative" }}>
                {classPopup}
            </div>
        </div>
    );
}
