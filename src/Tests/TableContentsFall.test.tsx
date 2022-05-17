import React from "react";
import { render, screen } from "@testing-library/react";
import { TableContentsFall } from "../TableComponents/TableContentsFall";
import userEvent from "@testing-library/user-event";

const setFallElement = () => {
    return;
};
const setPlanCourses = () => {
    return;
};

describe("FallDataToArrayTests", () => {
    beforeEach(() => {
        render(
            <TableContentsFall
                setFall={setFallElement}
                visible={true}
                searchVisible={true}
                planCourses={[]}
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
    test("Delete course works", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        DataList.click();
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const courseInTable: HTMLElement = screen.getByTestId("CISC 275");

        const deleteCourse: HTMLElement = screen.getByTestId("CISC 275 delete");
        expect(deleteCourse).toBeInTheDocument();
        deleteCourse.click();
        expect(courseInTable).not.toBeInTheDocument();
    });
    test("Clear Courses to work", () => {
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
    test("Checking the Arts and Sciences breadth", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const AddButton: HTMLElement = screen.getByText("+");
        searchBar.blur();
        AddButton.click();
        const codeButton = screen.getByTestId("CISC 275 link");
        codeButton.click();
        const artBreadthsForm: HTMLElement =
            screen.getByTestId("art-breadths-form");
        expect(artBreadthsForm).toBeInTheDocument();
        expect(artBreadthsForm).not.toBeChecked();
        artBreadthsForm.click();
        const doneButton = screen.getByText("Done");
        doneButton.click();
        codeButton.click();
        expect(artBreadthsForm).toBeChecked();
        artBreadthsForm.click();
        expect(artBreadthsForm).not.toBeChecked();
    });
});
