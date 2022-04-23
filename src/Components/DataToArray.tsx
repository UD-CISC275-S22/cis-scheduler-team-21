import React, { useState } from "react";
import Data from "../Data/catalog.json";
<<<<<<< HEAD
import { Course } from "../Interfaces/Courses";
import { Form } from "react-bootstrap";

const DataToString = JSON.stringify(Data);
const DataToObject = JSON.parse(DataToString);
const [query, setQuery] = useState<string>("");
=======
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
>>>>>>> efd67cccbe32955c2edf83709960aa1877044d98

export function FilteredArray(): JSX.Element {
    return (
        <div>
            {DataToObject.filter((course: Course) => {
                if (query === "") {
                    return course;
                } else if (
                    course.code.toLowerCase().includes(query.toLowerCase())
                ) {
                    return course;
                }
            }).map((course: Course, index: React.Key | null | undefined) => {
                <div key={index}>
                    <p>course.code</p>
                    <p>course.name</p>
                </div>;
            })}
        </div>
    );
}
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
<<<<<<< HEAD
    return arr;*/

    return (
        <div className="input-group">
            <div className="form-outline">
                <Form.Control
                    type="search"
                    id="form1"
                    placeholder="Search"
                    onChange={(event) => setQuery(event.target.value)}
                />

=======
    return (
        <div>
            <div>
                <input type="text" onChange={updateQuery}></input>
>>>>>>> efd67cccbe32955c2edf83709960aa1877044d98
                <button
                    id="search-button"
                    type="button"
                    className="btn btn-primary"
                    onClick={FilteredArray}
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
