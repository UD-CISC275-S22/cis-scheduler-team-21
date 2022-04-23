import React from "react";
//import { Form } from "react-bootstrap";
import Data from "../Data/catalog.json";
import { Course, Section } from "../Interfaces/Courses";
/* const StringData: string = JSON.stringify(Data);
const Data2: Section[] = JSON.parse(StringData);
const courseList: Course[][] = Data2.map((section: Section): Course[] =>
    section.course.map(
        (course: Course): Course => ({
            code: course.code,
            name: course.name,
            descr: course.descr,
            credits: course.credits,
            preReq: course.preReq,
            restrict: course.restrict,
            breadth: course.breadth,
            typ: course.typ
        })
    )
); */

export function DataToArray(): JSX.Element {
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
    return (
        <div>
            <div>
                <input id="searchID" type="text" list="searchList"></input>
                <datalist id="searchList">
                    {courseObjects.map(
                        (course: Course): JSX.Element => (
                            <option key={course.code} value={course.code}>
                                {course.code}
                            </option>
                        )
                    )}
                </datalist>
                <button
                    id="search-button"
                    type="button"
                    className="btn btn-primary"
                >
                    +
                </button>
            </div>
        </div>
    );
}
