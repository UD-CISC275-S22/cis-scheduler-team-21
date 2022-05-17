import React, { useState } from "react";
import Data from "../Data/catalog.json";
import { course, courseJSON, section } from "../Interfaces/Courses";
import { setFallProp } from "../Interfaces/semesterInterfaces";
import { Button } from "react-bootstrap";
import { CourseEdit } from "../Components/CourseEdit";
import { ShowFallTable } from "./ShowFallTable";

export function TableContentsFall({
    setFall,
    visible,
    searchVisible,
    planCourses,
    setPlanCourses,
    yearID,
    planID
}: setFallProp): JSX.Element {
    const saveDataKey =
        "PlanYearSem-Data-Fall" + planID.toString() + yearID.toString();
    const saveKeyPlanCourses = "Plan-Data" + planID.toString();
    let loadedData: course[] = [];
    const previousData: string | null = localStorage.getItem(saveDataKey);
    if (previousData !== null) {
        loadedData = Object.values(JSON.parse(previousData));
    }

    const [input, setInput] = useState<string>("");
    const [selectedCourses, setSelectedCourses] =
        useState<course[]>(loadedData);
    const [classPopup, setClassPopup] = useState<JSX.Element | null>(null);
    const courseObjects: course[] = [];
    //const [course, setCourse] = useState<course[]>(loadedData);
    const StringData: string = JSON.stringify(Data);
    const DataObjects: section[] = Object.values(JSON.parse(StringData));

    DataObjects.map((section: section) => {
        const courseString: string = JSON.stringify(section);
        const courseList: courseJSON[] = Object.values(
            JSON.parse(courseString)
        );
        courseList.map((course: courseJSON) => {
            const courseTemp: course = {
                id: course.code,
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
    let originalCourse: course;
    function addTable(): JSX.Element | void {
        if (
            courseObjects.some(
                (course: course): boolean => course.code === input
            )
        ) {
            /* if (
                !planCourses.some(
                    (course: course): boolean => course.code === input
                )
            ) { */
            const AddCourse: course[] = courseObjects.filter(
                (course: course): boolean => course.code === input
            );
            const singleCourse: course = AddCourse[0];
            if (
                selectedCourses.some(
                    (course: course): boolean => course.id === singleCourse.id
                )
            ) {
                return; //needs error message>
            } else {
                const addNewCourse: course[] = [
                    ...selectedCourses,
                    singleCourse
                ];
                const planCoursesCopy: course[] = [
                    ...planCourses,
                    singleCourse
                ];
                setSelectedCourses(addNewCourse);
                setPlanCourses(planCoursesCopy);
                localStorage.setItem(saveDataKey, JSON.stringify(addNewCourse));
                localStorage.setItem(
                    saveKeyPlanCourses,
                    JSON.stringify(planCoursesCopy)
                );
                setFall(
                    <ShowFallTable
                        setFall={setFall}
                        visible={visible}
                        searchVisible={searchVisible}
                        planCourses={planCoursesCopy}
                        setPlanCourses={setPlanCourses}
                        yearID={yearID}
                        planID={planID}
                    ></ShowFallTable>
                );
                setInput("");
                clearSearchBar();
            }
        }
    }
    function deleteTable(): void {
        const planCoursesCopy = planCourses.filter(
            (course: course): boolean => !selectedCourses.includes(course)
        );
        if (planCoursesCopy === null) {
            setPlanCourses([]);
        } else {
            setPlanCourses(planCoursesCopy);
        }
        const selectedCoursesCopy: course[] = [];
        setSelectedCourses(selectedCoursesCopy);
        localStorage.setItem(
            saveKeyPlanCourses,
            JSON.stringify(planCoursesCopy)
        );
        localStorage.setItem(saveDataKey, JSON.stringify([]));
        setFall(null);
    }
    function deleteCourse(course: course) {
        const courseCopy: course[] = selectedCourses.filter(
            (x: course): boolean => x !== course
        );
        const planCoursesCopy: course[] = planCourses.filter(
            (course2: course) => course2.code !== course.code
        );
        setPlanCourses(planCoursesCopy);
        setSelectedCourses(courseCopy);
        localStorage.setItem(saveDataKey, JSON.stringify(courseCopy));
        localStorage.setItem(
            saveKeyPlanCourses,
            JSON.stringify(planCoursesCopy)
        );
    }
    function clearCourses(course: course[]) {
        const planCoursesCopy = planCourses.filter(
            (courseInPlan: course): boolean =>
                !selectedCourses.includes(courseInPlan)
        );
        if (planCoursesCopy === null) {
            setPlanCourses([]);
        } else {
            setPlanCourses(planCoursesCopy);
        }
        course = [];
        setSelectedCourses(course);
        localStorage.setItem(saveDataKey, JSON.stringify(course));
        localStorage.setItem(
            saveKeyPlanCourses,
            JSON.stringify(planCoursesCopy)
        );
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
    function coursePopup(courseArg: course): void {
        return setClassPopup(
            <CourseEdit
                setPopup={setClassPopup}
                setSelectedCourses={setSelectedCourses}
                selectedCourses={selectedCourses}
                planCourses={planCourses}
                setPlanCourses={setPlanCourses}
                course={courseArg}
                planKey={saveKeyPlanCourses}
                yearKey={saveDataKey}
            />
        );
    }
    function reset(course: course): void {
        courseObjects.map((course1: course): course => {
            if (course1.id === course.id) {
                originalCourse = course1;
                return course1;
            } else {
                return course1;
            }
        });
        const selectedCopy: course[] = selectedCourses.map(
            (course1: course): course => {
                if (course1.id === course.id) {
                    course1 = originalCourse;
                    return course1;
                } else {
                    return course1;
                }
            }
        );
        const planCoursesCopy: course[] = planCourses.map(
            (course1: course): course => {
                if (course1.id === course.id) {
                    course1 = originalCourse;
                    return course1;
                } else {
                    return course1;
                }
            }
        );
        setPlanCourses(planCoursesCopy);
        setSelectedCourses(selectedCopy);
        localStorage.setItem(saveDataKey, JSON.stringify(selectedCopy));
        localStorage.setItem(
            saveKeyPlanCourses,
            JSON.stringify(planCoursesCopy)
        );
    }

    return (
        <div>
            <div style={{ marginBottom: "1ch" }}>
                <table className="add-border">
                    <tbody>
                        {selectedCourses.map(
                            (course: course): JSX.Element => (
                                <tr
                                    key={course.code}
                                    data-testid={course.code}
                                    className="innerTR"
                                >
                                    {visible && (
                                        <td>
                                            <ins
                                                style={{
                                                    cursor: "pointer",
                                                    color: "blue"
                                                }}
                                                data-testid={
                                                    course.code + " link"
                                                }
                                                onClick={() =>
                                                    coursePopup(course)
                                                }
                                            >
                                                {course.code}
                                            </ins>
                                            <b>{"<-- edit"}</b>
                                        </td>
                                    )}
                                    {!visible && <td>{course.code}</td>}
                                    <td>{course.name}</td>
                                    <td>{course.credits}</td>
                                    {visible && (
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
            {searchVisible && (
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
                        {courseObjects.map((course: course) => (
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
                {visible && (
                    <span data-testid="fall-edit-mode">
                        <Button
                            style={{
                                backgroundColor: "rgba(221, 19, 19, 0.97)",
                                color: "black"
                            }}
                            onClick={deleteTable}
                        >
                            Delete Fall
                        </Button>
                        <Button
                            data-testid="clearFall"
                            style={{
                                backgroundColor: "rgba(238, 200, 63, 0.89)",
                                color: "black"
                            }}
                            onClick={() => clearCourses(selectedCourses)}
                        >
                            Clear Fall
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
