import React, { useState } from "react";
import Data from "../Data/catalog.json";
import { Course, CourseJSON, Section } from "../Interfaces/Courses";
import { SetFallProp } from "../Interfaces/semesterInterfaces";
import { Button, Form } from "react-bootstrap";
import { CourseEdit } from "../Components/CourseEdit";
import { ShowFallTable } from "./ShowFallTable";

export const fallDataKey = "FallSem-Data";
//localStorage.clear();
const loadedData: Course[] = [];

export let checkedCourses: Course[] = [];
export function TableContentsFall({
    setFall,
    Visible,
    SearchVisible,
    planCourses,
    setPlanCourses
}: SetFallProp): JSX.Element {
    const [input, setInput] = useState<string>("");
    const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
    const [classPopup, setClassPopup] = useState<JSX.Element | null>(null);
    const courseObjects: Course[] = [];
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
                //setIndex([...index, index.length]);
                const planCoursesCopy: Course[] = [
                    ...planCourses,
                    singleCourse
                ];
                setSelectedCourses(addNewCourse);
                setPlanCourses(planCoursesCopy);
                setFall(
                    <ShowFallTable
                        setFall={setFall}
                        Visible={Visible}
                        SearchVisible={SearchVisible}
                        planCourses={planCoursesCopy}
                        setPlanCourses={setPlanCourses}
                    ></ShowFallTable>
                );
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
    /**function saveFall() {
        //setCourse(planCourses);
        localStorage.setItem(fallDataKey, JSON.stringify(fallCourses));
    }*/

    const [checked, setChecked] = useState<boolean>(false);
    const [checkedData, setCheckedData] = useState<Course[]>(loadedData);
    const [courseCodes, setCourseCodes] = useState<string[]>([]);
    //let courseCodes: string[] = [];

    function checkBox(code: string, e: React.ChangeEvent<HTMLInputElement>) {
        const checkedOrNot = e.target.checked;
        if (checkedOrNot == true) {
            setChecked(true);
            setCourseCodes(
                courseCodes.includes(code)
                    ? [...courseCodes]
                    : [...courseCodes, code]
            );
        } else {
            setChecked(false);
            setCourseCodes(
                courseCodes.filter(
                    (courseCode: string): boolean => courseCode !== code
                )
            );
        }
        //console.log(courseCodes);
    }

    //let newSelectedCourses: Course[] = [];

    function moveCourse() {
        let codesArray = [...courseCodes];
        codesArray.map((code: string) => {
            const newCheckedCourse = selectedCourses.filter(
                (course: Course) => course.code === code
            );
            checkedCourses = [...checkedCourses, newCheckedCourse[0]];
            deleteCourse(newCheckedCourse[0]);
        });
        /**const newUncheckedCourse = selectedCourses.filter(
                (course: Course) => course.code !== code
            );
            newSelectedCourses = [...newSelectedCourses, newUncheckedCourse[0]];
        });
        setSelectedCourses(newSelectedCourses);*/
        codesArray = [];
        setCourseCodes([]);
        setCheckedData(checkedCourses);
        localStorage.setItem(fallDataKey, JSON.stringify(checkedCourses));
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
                                                data-testid="courseId-button"
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
                                            <td>
                                                <Button
                                                    style={{
                                                        backgroundColor:
                                                            "darkRed"
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
                                            <td>
                                                <Button
                                                    onClick={() =>
                                                        reset(course)
                                                    }
                                                >
                                                    Reset
                                                </Button>
                                            </td>
                                            <td>
                                                <Form.Check
                                                    type="checkbox"
                                                    id={course.code}
                                                    className="checkBox"
                                                    onChange={(e) => {
                                                        checkBox(
                                                            course.code,
                                                            e
                                                        );
                                                    }}
                                                ></Form.Check>
                                            </td>
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
                            Save Fall
                        </Button>
                        {checked && (
                            <Button
                                style={{ backgroundColor: "blue" }}
                                onClick={moveCourse}
                            >
                                Move to Course Pool
                            </Button>
                        )}
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
