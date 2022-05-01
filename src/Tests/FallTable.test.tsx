import React from "react";
import { render, screen } from "@testing-library/react";
import { FallTable } from "../Components/FallTable";
import userEvent from "@testing-library/user-event";

const setFallElement = () => {
    return;
};

describe("FallDataToArrayTests", () => {
    beforeEach(() => {
        render(
            <FallTable
                setFall={setFallElement}
                Visible={true}
                SearchVisible={true}
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
        const AddButton: HTMLElement = screen.getByTestId("add-button");
        expect(AddButton).toBeInTheDocument();

        AddButton.click();
        const courseInTable: HTMLElement = screen.getByTestId("CISC 275");
        expect(courseInTable).toBeInTheDocument();
    });
    test("Delete Course works", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        DataList.click();
        const AddButton: HTMLElement = screen.getByTestId("add-button");
        AddButton.click();
        const courseInTable: HTMLElement = screen.getByTestId("CISC 275");

        const deleteCourse: HTMLElement = screen.getByTestId("CISC 275 delete");
        expect(deleteCourse).toBeInTheDocument();
        deleteCourse.click();
        expect(courseInTable).not.toBeInTheDocument();
    });
});
