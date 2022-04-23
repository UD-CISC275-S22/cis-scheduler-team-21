import React, { useState } from "react";
import Data from "../Data/catalog.json";
import { Course, Section } from "../Interfaces/Courses";
//import { Form } from "react-bootstrap";
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
    const [query, setQuery] = useState<string>("");
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
    function updateQuery(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }
    return (
        <div>
            <div>
                <input type="text" onChange={updateQuery}></input>
                <button
                    id="search-button"
                    type="button"
                    className="btn btn-primary"
                >
                    🔎
                </button>
            </div>
            {courseObjects
                .filter((course: Course): Course | void => {
                    if (query === "") {
                        return course;
                    } else if (
                        course.code.toLowerCase().includes(query.toLowerCase())
                    ) {
                        return course;
                    }
                })
                .map(
                    (course: Course): JSX.Element => (
                        <div key={course.code}>
                            <p>{course.code}</p>
                        </div>
                    )
                )}
        </div>
    );
}
