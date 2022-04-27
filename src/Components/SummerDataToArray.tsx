import React, { useState } from "react";
import Data from "../Data/catalog.json";
import { Course, Section } from "../Interfaces/Courses";
import { SetSummerProp } from "../Interfaces/semesterInterfaces";
import "../App.css";
import { Button } from "react-bootstrap";

export function SummerDataToArray({
    setSummer,
    Visible
}: SetSummerProp): JSX.Element {
    const [course1, setCourse1] = useState<Course[]>([]);
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
            "searchID4"
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
                course1.some(
                    (course: Course): boolean =>
                        course.code === singleCourse.code
                )
            ) {
                return; //needs error message
            } else {
                const AddCourse2: Course[] = [...course1, singleCourse];
                setCourse1(AddCourse2);
            }
        }
    }
    function deleteTable(): void {
        setSummer(<></>);
    }
    function deleteCourse(course: Course) {
        const courseCopy: Course[] = course1.filter(
            (x: Course): boolean => x !== course
        );
        setCourse1(courseCopy);
    }
    return (
        <div>
            <div style={{ marginBottom: "1ch" }}>
                <table className="add-border">
                    {course1.map(
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
            <span style={{ marginLeft: "15ch" }}>
                <input
                    id="searchID4"
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
                <span
                    style={{
                        float: "right",
                        marginRight: "23ch"
                    }}
                >
                    {Visible && (
                        <span>
                            <Button
                                style={{ backgroundColor: "darkRed" }}
                                onClick={deleteTable}
                            >
                                Delete Summer Session
                            </Button>
                            <Button style={{ backgroundColor: "green" }}>
                                Save
                            </Button>
                        </span>
                    )}
                </span>
            </span>
        </div>
    );
}
