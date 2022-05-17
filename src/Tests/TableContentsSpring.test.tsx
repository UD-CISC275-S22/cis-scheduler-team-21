import React from "react";
import { render, screen } from "@testing-library/react";
import { TableContentsSpring } from "../TableComponents/TableContentsSpring";
import userEvent from "@testing-library/user-event";
import { Course } from "../Interfaces/Courses";

const setSpringElement = () => {
    return;
};
const setPlanCourses = () => {
    return;
};

const course: Course = {
    ID: "",
    code: "CISC 275",
    name: "Introduction to Software Engineering",
    descr: "Object oriented software design and development through use of an object oriented programming language. Topics include team programming, design patterns, graphical user interfaces, software engineering tools (e.g., integrated development environments, version control, build management, bug tracking, automated testing).",
    credits: "3",
    preReq: "Minimum grade of C- in CISC 181 and CISC 220.",
    restrict: "",
    breadth: "University: ; A&S: ",
    typ: "Fall and Spring"
};

describe("Spring Contents T]tests", () => {
    beforeEach(() => {
        render(
            <TableContentsSpring
                setSpring={setSpringElement}
                Visible={true}
                SearchVisible={true}
                planCourses={[course]}
                setPlanCourses={setPlanCourses}
            />
        );
    });
    test("Search Courses button works", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDSpring");
        expect(searchBar).toBeInTheDocument();

        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        expect(DataList).toBeInTheDocument();

        DataList.click();
        const AddButton: HTMLElement = screen.getByText("+");
        expect(AddButton).toBeInTheDocument();

        searchBar.blur();
        AddButton.click();
        const courseInTable: HTMLElement = screen.getByTestId("CISC 275");
        expect(courseInTable).toBeInTheDocument();
    });
    test("Delete button removes the course from the table", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDSpring");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        DataList.click();
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const courseInTable: HTMLElement = screen.getByTestId("CISC 275");
        expect(courseInTable).toBeInTheDocument();
        const deleteCourse: HTMLElement = screen.getByTestId("CISC 275 delete");
        expect(deleteCourse).toBeInTheDocument();
        deleteCourse.click();
        expect(courseInTable).not.toBeInTheDocument();
    });
    test("Reset button resets the courses values to their default values after the user edits them", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDSpring");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const codeButton = screen.getByTestId("courseId-button");
        expect(codeButton).toBeInTheDocument();
        codeButton.click();

        const nameForm = screen.getByTestId("name-form");
        userEvent.clear(nameForm);
        nameForm.click();
        userEvent.type(nameForm, "new value");
        expect(screen.getByDisplayValue("new value")).toBeInTheDocument();

        const doneButton = screen.getByRole("button", {
            name: /Done/i
        });
        doneButton.click();

        expect(
            screen.queryByText("Introduction to Software Engineering")
        ).not.toBeInTheDocument();
        const resetButton = screen.getByRole("button", {
            name: /Reset/i
        });
        resetButton.click();
        expect(
            screen.queryByText("Introduction to Software Engineering")
        ).toBeInTheDocument();
    });
    test("Clear Spring button removes all the courses in the table", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDSpring");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        DataList.click();
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const course275: HTMLElement = screen.getByTestId("CISC 275");
        searchBar.click();
        userEvent.type(searchBar, "CISC 220");
        DataList.click();
        searchBar.blur();
        AddButton.click();
        const course220: HTMLElement = screen.getByTestId("CISC 220");
        const clearButton = screen.getByText("Clear Spring");
        clearButton.click();

        expect(course275).not.toBeInTheDocument();
        expect(course220).not.toBeInTheDocument();
    });
    test("Courses cannot be duplicated in table", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDSpring");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        DataList.click();
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        DataList.click();
        searchBar.blur();
        AddButton.click();
        const nodes = screen.queryAllByTestId("CISC 275");
        expect(nodes.length).toEqual(1);
    });
    test("Random letters should not be added to the table", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDSpring");
        searchBar.click();
        userEvent.type(searchBar, "jaskdfhlakjdfsh");
        const AddButton: HTMLElement = screen.getByText("+");
        AddButton.click();
        const nodes = screen.queryAllByText("jaskdfhlakjdfsh");
        expect(nodes.length).toEqual(0);
    });
});
