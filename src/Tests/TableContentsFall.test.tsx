import React from "react";
import { render, screen } from "@testing-library/react";
import { TableContentsFall } from "../TableComponents/TableContentsFall";
import userEvent from "@testing-library/user-event";
import { course } from "../Interfaces/Courses";
//import { ShowFallTable } from "../TableComponents/ShowFallTable";

const setFallElement = () => {
    return;
};
const setPlanCourses = () => {
    return;
};

const courseTest: course = {
    id: "",
    code: "CISC 275",
    name: "Introduction to Software Engineering",
    descr: "Object oriented software design and development through use of an object oriented programming language. Topics include team programming, design patterns, graphical user interfaces, software engineering tools (e.g., integrated development environments, version control, build management, bug tracking, automated testing).",
    credits: "3",
    preReq: "Minimum grade of C- in CISC 181 and CISC 220.",
    restrict: "",
    breadth: "University: ; A&S: ",
    typ: "Fall and Spring"
};

describe("Fall Contents tests", () => {
    beforeEach(() => {
        render(
            <TableContentsFall
                setFall={setFallElement}
                visible={true}
                searchVisible={true}
                planCourses={[courseTest]}
                setPlanCourses={setPlanCourses}
                yearID={1}
                planID={2}
            />
        );
    });
    test("Search Courses button works", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
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
    test("Delete course button removes the course from the table", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
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
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const codeButton = screen.getByTestId("CISC 275 link");
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
    test("Clear Fall courses button removes the courses within the table", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        DataList.click();
        searchBar.blur();
        const AddButton: HTMLElement = screen.getByText("+");
        AddButton.click();
        const course275: HTMLElement = screen.getByTestId("CISC 275");
        searchBar.click();
        userEvent.clear(searchBar);
        userEvent.type(searchBar, "CISC 220");
        DataList.click();
        searchBar.blur();
        AddButton.click();
        const course220: HTMLElement = screen.getByTestId("CISC 220");
        const clearButton = screen.getByTestId("clearFall");
        clearButton.click();

        expect(course275).not.toBeInTheDocument();
        expect(course220).not.toBeInTheDocument();
    });
    test("Courses cannot be duplicated in table", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        DataList.click();
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        expect(screen.getByTestId("CISC 275")).toBeInTheDocument();
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        DataList.click();
        searchBar.blur();
        AddButton.click();
        const nodes = screen.queryAllByTestId("CISC 275");
        expect(nodes.length).toEqual(1);
    });
    test("Random letters should not be added to the table", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "jaskdfhlakjdfsh");
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const nodes = screen.queryAllByText("jaskdfhlakjdfsh");
        expect(nodes.length).toEqual(0);
    });
    test("Clicking the check for the Arts and Sciences breadth", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const codeButton = screen.getByTestId("CISC 275 link");
        codeButton.click();
        const artBreadthsForm: HTMLInputElement =
            screen.getByTestId("art-breadths-form");
        expect(artBreadthsForm).toBeInTheDocument();
        artBreadthsForm.click();
        const doneButton = screen.getByRole("button", {
            name: /Done/i
        });
        doneButton.click();
        codeButton.click();
        expect(artBreadthsForm.checked).toBe(true);
        const deleteButton = screen.getByTestId("CISC 275 delete");
        deleteButton.click();
    });
    test("Un-Clicking the check for the Arts and Sciences breadth", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const codeButton = screen.getByTestId("CISC 275 link");
        expect(codeButton).toBeInTheDocument();
        codeButton.click();
        const artBreadthsForm: HTMLInputElement =
            screen.getByTestId("art-breadths-form");
        expect(artBreadthsForm).toBeInTheDocument();
        expect(artBreadthsForm.checked).toBe(false);
        artBreadthsForm.click();
        expect(artBreadthsForm.checked).toBe(true);
        const doneButton = screen.getByRole("button", {
            name: /Done/i
        });
        doneButton.click();
        codeButton.click();
        expect(artBreadthsForm.checked).toBe(true);
        artBreadthsForm.click();
        doneButton.click();
        codeButton.click();
        expect(artBreadthsForm.checked).toBe(false);
    });
    test("Clicking the check for the History Cultural Change breadth", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const codeButton = screen.getByTestId("CISC 275 link");
        codeButton.click();
        const historyBreadthsForm: HTMLInputElement = screen.getByTestId(
            "history-breadths-form"
        );
        expect(historyBreadthsForm).toBeInTheDocument();
        historyBreadthsForm.click();
        const doneButton = screen.getByRole("button", {
            name: /Done/i
        });
        doneButton.click();
        codeButton.click();
        expect(historyBreadthsForm.checked).toBe(true);
        const deleteButton = screen.getByTestId("CISC 275 delete");
        deleteButton.click();
    });
    test("Clicking the check for the Social and Behavorial Sciences breadth", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const codeButton = screen.getByTestId("CISC 275 link");
        codeButton.click();
        const scienceBreadthsForm: HTMLInputElement = screen.getByTestId(
            "science-breadths-form"
        );
        expect(scienceBreadthsForm).toBeInTheDocument();
        scienceBreadthsForm.click();
        const doneButton = screen.getByRole("button", {
            name: /Done/i
        });
        doneButton.click();
        codeButton.click();
        expect(scienceBreadthsForm.checked).toBe(true);
        const deleteButton = screen.getByTestId("CISC 275 delete");
        deleteButton.click();
    });
    test("Clicking the check for the Mathematical, Natural Sciences and Technology breadth", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const codeButton = screen.getByTestId("CISC 275 link");
        codeButton.click();
        const mathBreadthsForm: HTMLInputElement =
            screen.getByTestId("math-breadths-form");
        expect(mathBreadthsForm).toBeInTheDocument();
        mathBreadthsForm.click();
        const doneButton = screen.getByRole("button", {
            name: /Done/i
        });
        doneButton.click();
        codeButton.click();
        expect(mathBreadthsForm.checked).toBe(true);
        const deleteButton = screen.getByTestId("CISC 275 delete");
        deleteButton.click();
    });
    /**test("Testing if a course satisfies a degree requirement for AI concentration", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 484");
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        render(<AI planCourses={[]}></AI>);
        expect(screen.getByText("CISC 484✅")).toBeInTheDocument;
    });*/
});
