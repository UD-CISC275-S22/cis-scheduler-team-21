import React, { useState } from "react";
import Data from "../Data/catalog.json";
import { Course } from "../Interfaces/Courses";
import { Form } from "react-bootstrap";

const DataToString = JSON.stringify(Data);
const DataToObject = JSON.parse(DataToString);
const [query, setQuery] = useState<string>("");

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
    //let arr: string[] = [];
    /**DataToObject.forEach(function (item: string) {
        arr.push(item);
    });
    Object.keys(Data).map(function (key) {
        arr.push({ [key]: Data[key] });
        return arr;
    });*/
    /**let i;

    for (i in DataToObject) {
        if (DataToObject[i] instanceof Object) {
            arr = DataToObject.map((course: Course) => (
                <div key={course.code}>
                    <p>{course.code}</p>
                </div>
            ));
        }
        console.log(DataToObject[i]);
    }
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

                <button
                    id="search-button"
                    type="button"
                    className="btn btn-primary"
                    onClick={FilteredArray}
                >
                    🔎
                </button>
            </div>
        </div>
    );
}
