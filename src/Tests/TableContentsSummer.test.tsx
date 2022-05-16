import React from "react";
import { render, screen } from "@testing-library/react";
import { TableContentsSummer } from "../TableComponents/TableContentsSummer";
import userEvent from "@testing-library/user-event";

const setSummerElement = () => {
    return;
};
const setPlanCourses = () => {
    return;
};

describe("SummerDataToArrayTests", () => {
    beforeEach(() => {
        render(
            <TableContentsSummer
                setSummer={setSummerElement}
                Visible={true}
                SearchVisible={true}
                planCourses={[]}
                setPlanCourses={setPlanCourses}
            />
        );
    });
    test("Search Courses button works", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDSummer");
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
    test("Delete Course works", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDSummer");
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
        const searchBar: HTMLElement = screen.getByTestId("searchIDSummer");
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
        const clearButton = screen.getByText("Clear Summer");
        clearButton.click();

        expect(course275).not.toBeInTheDocument();
        expect(course220).not.toBeInTheDocument();
    });
    test("Courses cannot be duplicated in table", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDSummer");
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
        const searchBar: HTMLElement = screen.getByTestId("searchIDSummer");
        searchBar.click();
        userEvent.type(searchBar, "jaskdfhlakjdfsh");
        const AddButton: HTMLElement = screen.getByText("+");
        AddButton.click();
        const nodes = screen.queryAllByText("jaskdfhlakjdfsh");
        expect(nodes.length).toEqual(0);
    });
});
