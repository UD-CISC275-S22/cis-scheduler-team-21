import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ShowFallTable } from "../TableComponents/ShowFallTable";
import { ShowSpringTable } from "../TableComponents/ShowSpringTable";
import { ShowWinterTable } from "../TableComponents/ShowWinterTable";
import { ShowSummerTable } from "../TableComponents/ShowSummerTable";
//import { Year } from "../Interfaces/yearInterface";
import "../App.css";
import { addSemesterProps } from "../Interfaces/semesterInterfaces";

export function AddSemester({
    planCourses,
    setPlanCourses,
    yearID,
    planID
}: addSemesterProps): JSX.Element {
    const [fallElement, setFallElement] = useState<JSX.Element | null>(null);
    const [springElement, setSpringElement] = useState<JSX.Element | null>(
        null
    );
    const [summerElement, setSummerElement] = useState<JSX.Element | null>(
        null
    );
    const [winterElement, setWinterElement] = useState<JSX.Element | null>(
        null
    );
    const [visible, setVisible] = useState<boolean>(false);
    const [searchVisible, setSearchVisible] = useState<boolean>(true);

    function setVisEdit(): void {
        setVisible(!visible);
        if (fallElement !== null) {
            addFall(!visible, searchVisible);
        }
        if (springElement !== null) {
            addSpring(!visible, searchVisible);
        }
        if (winterElement !== null) {
            addWinter(!visible, searchVisible);
        }
        if (summerElement !== null) {
            addSummer(!visible, searchVisible);
        }
    }
    function setVisSearch(): void {
        setSearchVisible(!searchVisible);
        if (fallElement !== null) {
            addFall(visible, !searchVisible);
        }
        if (springElement !== null) {
            addSpring(visible, !searchVisible);
        }
        if (winterElement !== null) {
            addWinter(visible, !searchVisible);
        }
        if (summerElement !== null) {
            addSummer(visible, !searchVisible);
        }
    }
    function addFall(visibleState: boolean, visibleSearchState: boolean): void {
        setFallElement(
            <ShowFallTable
                setFall={setFallElement}
                visible={visibleState}
                searchVisible={visibleSearchState}
                planCourses={planCourses}
                setPlanCourses={setPlanCourses}
                yearID={yearID}
                planID={planID}
            ></ShowFallTable>
        );
    }
    function addSpring(
        visibleState: boolean,
        visibleSearchState: boolean
    ): void {
        setSpringElement(
            <ShowSpringTable
                setSpring={setSpringElement}
                visible={visibleState}
                searchVisible={visibleSearchState}
                planCourses={planCourses}
                setPlanCourses={setPlanCourses}
                yearID={yearID}
                planID={planID}
            ></ShowSpringTable>
        );
    }
    function addSummer(
        visibleState: boolean,
        visibleSearchState: boolean
    ): void {
        setSummerElement(
            <ShowSummerTable
                setSummer={setSummerElement}
                visible={visibleState}
                searchVisible={visibleSearchState}
                planCourses={planCourses}
                setPlanCourses={setPlanCourses}
                yearID={yearID}
                planID={planID}
            ></ShowSummerTable>
        );
    }
    function addWinter(
        visibleState: boolean,
        visibleSearchState: boolean
    ): void {
        setWinterElement(
            <ShowWinterTable
                setWinter={setWinterElement}
                visible={visibleState}
                searchVisible={visibleSearchState}
                planCourses={planCourses}
                setPlanCourses={setPlanCourses}
                yearID={yearID}
                planID={planID}
            ></ShowWinterTable>
        );
    }
    function fullClear() {
        setFallElement(null);
        setSpringElement(null);
        setSummerElement(null);
        setWinterElement(null);
    }
    return (
        <div className="showPlan-background">
            <div
                style={{
                    textAlign: "center"
                }}
            >
                <Button
                    className="customButton"
                    onClick={() => addFall(visible, searchVisible)}
                >
                    Add Fall Semester
                </Button>
                <Button
                    className="customButton"
                    onClick={() => addWinter(visible, searchVisible)}
                >
                    Add Winter Session
                </Button>
                <Button
                    className="customButton"
                    onClick={() => addSpring(visible, searchVisible)}
                >
                    Add Spring Semester
                </Button>
                <Button
                    className="customButton"
                    onClick={() => addSummer(visible, searchVisible)}
                >
                    Add Summer Session
                </Button>
            </div>
            <div
                style={{ float: "right", marginRight: "3ch", marginTop: "2ch" }}
            >
                {visible && (
                    <Button
                        onClick={fullClear}
                        style={{ backgroundColor: "rgba(221, 19, 19, 0.97)" }}
                    >
                        Remove ALL
                    </Button>
                )}
                <Button onClick={setVisEdit} style={{ marginLeft: ".5ch" }}>
                    Edit Mode
                </Button>
                <Button onClick={setVisSearch} style={{ marginLeft: ".5ch" }}>
                    Toggle Search
                </Button>
            </div>
            <div>
                <Row style={{ width: "100%" }}>
                    <Col style={{ marginLeft: "1ch" }}>
                        <br></br>
                        {fallElement}
                    </Col>
                    <Col>
                        <br></br>
                        {springElement}
                    </Col>
                </Row>
                <Row style={{ width: "100%" }}>
                    <Col style={{ marginLeft: "1ch" }}>
                        <br></br>
                        {winterElement}
                    </Col>
                    <Col>
                        <br></br>
                        {summerElement}
                    </Col>
                </Row>
            </div>
        </div>
    );
}
