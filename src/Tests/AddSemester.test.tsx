import React from "react";
import { render, screen } from "@testing-library/react";
import { AddSemester } from "../Components/AddSemester";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const setPlanCourses = () => {
    return;
};

describe("AddSemester Component tests", () => {
    beforeEach(() =>
        render(
            <MemoryRouter>
                <AddSemester
                    planCourses={[]}
                    setPlanCourses={setPlanCourses}
                    yearID={0}
                    planID={0}
                />
            </MemoryRouter>
        )
    );
    test("There is a button named Add Fall Semester", () => {
        const fallButton = screen.getByRole("button", {
            name: /Add Fall Semester/i
        });
        expect(fallButton).toBeInTheDocument();
    });
    test("There is a button named Add Spring Semester", () => {
        const springButton = screen.getByRole("button", {
            name: /Add Spring Semester/i
        });
        expect(springButton).toBeInTheDocument();
    });
    test("There is a button named Add Winter Session", () => {
        const winterButton = screen.getByRole("button", {
            name: /Add Winter Session/i
        });
        expect(winterButton).toBeInTheDocument();
    });
    test("There is a button named Add Summer Session", () => {
        const summerButton = screen.getByRole("button", {
            name: /Add Summer Session/i
        });
        expect(summerButton).toBeInTheDocument();
    });
    test("Fall button reveals a table when clicked", () => {
        const fallButton = screen.getByRole("button", {
            name: /Add Fall Semester/i
        });
        userEvent.click(fallButton);

        const fallTable = screen.getByTestId("fall-table");
        expect(fallTable).toBeInTheDocument();
    });
    test("Spring button reveals a table when clicked", () => {
        const springButton = screen.getByRole("button", {
            name: /Add Spring Semester/i
        });
        userEvent.click(springButton);

        const springTable = screen.getByTestId("spring-table");
        expect(springTable).toBeInTheDocument();
    });
    test("Winter button reveals a table when clicked", () => {
        const winterButton = screen.getByRole("button", {
            name: /Add Winter Session/i
        });
        userEvent.click(winterButton);

        const winterTable = screen.getByTestId("winter-table");
        expect(winterTable).toBeInTheDocument();
    });
    test("Summer button reveals a table when clicked", () => {
        const summerButton = screen.getByRole("button", {
            name: /Add Summer Session/i
        });
        userEvent.click(summerButton);

        const summerTable = screen.getByTestId("summer-table");
        expect(summerTable).toBeInTheDocument();
    });
    test("There is a button named Edit Mode", () => {
        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        expect(editButton).toBeInTheDocument();
    });
    test("There is a button named Toggle Search", () => {
        const searchButton = screen.getByRole("button", {
            name: /Toggle Search/i
        });
        expect(searchButton).toBeInTheDocument();
    });
    test("Delete table works fall", () => {
        const fallButton = screen.getByRole("button", {
            name: /Add Fall Semester/i
        });
        userEvent.click(fallButton);
        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        editButton.click();
        const fallTable = screen.getByTestId("fall-table");
        const deleteButton: HTMLElement = screen.getByText("Delete Fall");
        deleteButton.click();
        expect(fallTable).not.toBeInTheDocument();
    });
    test("Delete table works spring", () => {
        const fallButton = screen.getByRole("button", {
            name: /Add Spring Semester/i
        });
        userEvent.click(fallButton);
        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        editButton.click();
        const fallTable = screen.getByTestId("spring-table");
        const deleteButton: HTMLElement = screen.getByText("Delete Spring");
        deleteButton.click();
        expect(fallTable).not.toBeInTheDocument();
    });
    test("Delete table works winter", () => {
        const fallButton = screen.getByRole("button", {
            name: /Add Winter Session/i
        });
        userEvent.click(fallButton);
        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        editButton.click();
        const fallTable = screen.getByTestId("winter-table");
        const deleteButton: HTMLElement = screen.getByText("Delete Winter");
        deleteButton.click();
        expect(fallTable).not.toBeInTheDocument();
    });
    test("Delete table works summer", () => {
        const fallButton = screen.getByRole("button", {
            name: /Add Summer Session/i
        });
        userEvent.click(fallButton);
        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        editButton.click();
        const fallTable = screen.getByTestId("summer-table");
        const deleteButton: HTMLElement = screen.getByText("Delete Summer");
        deleteButton.click();
        expect(fallTable).not.toBeInTheDocument();
    });
    test("When Edit Mode is clicked it reveals a series of edit buttons for the fall semester", () => {
        const fallButton = screen.getByRole("button", {
            name: /Add Fall Semester/i
        });
        userEvent.click(fallButton);

        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        userEvent.click(editButton);

        const fallEdit = screen.getByTestId("fall-edit-mode");
        expect(fallEdit).toBeInTheDocument();
    });
    test("When Edit Mode is clicked it reveals a series of edit buttons for the spring semester", () => {
        const springButton = screen.getByRole("button", {
            name: /Add Spring Semester/i
        });
        userEvent.click(springButton);
        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        userEvent.click(editButton);

        const springEdit = screen.getByTestId("spring-edit-mode");
        expect(springEdit).toBeInTheDocument();
    });
    test("When Edit Mode is clicked it reveals a series of edit buttons for the winter session", () => {
        const winterButton = screen.getByRole("button", {
            name: /Add Winter Session/i
        });
        userEvent.click(winterButton);
        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        userEvent.click(editButton);

        const winterEdit = screen.getByTestId("winter-edit-mode");
        expect(winterEdit).toBeInTheDocument();
    });
    test("When Edit Mode is clicked it reveals a series of edit buttons for the summer session", () => {
        const summerButton = screen.getByRole("button", {
            name: /Add Summer Session/i
        });
        userEvent.click(summerButton);
        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        userEvent.click(editButton);

        const summerEdit = screen.getByTestId("summer-edit-mode");
        expect(summerEdit).toBeInTheDocument();
    });
    test("When Toggle Search is clicked it reveals a search bar for the fall semester", () => {
        const fallButton = screen.getByRole("button", {
            name: /Add Fall Semester/i
        });
        userEvent.click(fallButton);

        const searchButton = screen.getByRole("button", {
            name: /Toggle Search/i
        });
        userEvent.click(searchButton);
        userEvent.click(searchButton);

        const fallSearch = screen.getByTestId("fall-search-mode");
        expect(fallSearch).toBeInTheDocument();
    });
    test("When Toggle Search is clicked it reveals a search bar for the spring semester", () => {
        const springButton = screen.getByRole("button", {
            name: /Add Spring Semester/i
        });
        userEvent.click(springButton);

        const searchButton = screen.getByRole("button", {
            name: /Toggle Search/i
        });
        userEvent.click(searchButton);
        userEvent.click(searchButton);

        const springSearch = screen.getByTestId("spring-search-mode");
        expect(springSearch).toBeInTheDocument();
    });
    test("When Toggle Search is clicked it reveals a search bar for the winter session", () => {
        const winterButton = screen.getByRole("button", {
            name: /Add Winter Session/i
        });
        userEvent.click(winterButton);

        const searchButton = screen.getByRole("button", {
            name: /Toggle Search/i
        });
        userEvent.click(searchButton);
        userEvent.click(searchButton);

        const winterSearch = screen.getByTestId("winter-search-mode");
        expect(winterSearch).toBeInTheDocument();
    });
    test("When Toggle Search is clicked it reveals a search bar for the summer session", () => {
        const summerButton = screen.getByRole("button", {
            name: /Add Summer Session/i
        });
        userEvent.click(summerButton);

        const searchButton = screen.getByRole("button", {
            name: /Toggle Search/i
        });
        userEvent.click(searchButton);
        userEvent.click(searchButton);

        const summerSearch = screen.getByTestId("summer-search-mode");
        expect(summerSearch).toBeInTheDocument();
    });
    test("There is a button named Remove All Semester", () => {
        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        editButton.click();
        const removeAllButton = screen.getByRole("button", {
            name: /Remove All/i
        });
        expect(removeAllButton).toBeInTheDocument();
    });
    test("Clicking the remove all button removes all the semester tables", () => {
        const fallButton = screen.getByRole("button", {
            name: /Add Fall Semester/i
        });
        const springButton = screen.getByRole("button", {
            name: /Add Spring Semester/i
        });
        const winterButton = screen.getByRole("button", {
            name: /Add Winter Session/i
        });
        const summerButton = screen.getByRole("button", {
            name: /Add Summer Session/i
        });
        fallButton.click();
        springButton.click();
        winterButton.click();
        summerButton.click();
        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        editButton.click();
        const fallTable = screen.getByTestId("fall-table");
        const springTable = screen.getByTestId("spring-table");
        const winterTable = screen.getByTestId("winter-table");
        const summerTable = screen.getByTestId("summer-table");

        const removeAllButton = screen.getByRole("button", {
            name: /Remove All/i
        });
        removeAllButton.click();

        expect(fallTable).not.toBeInTheDocument();
        expect(springTable).not.toBeInTheDocument();
        expect(winterTable).not.toBeInTheDocument();
        expect(summerTable).not.toBeInTheDocument();
    });
    test("Clicking the Delete Fall button deletes the Fall Semester table", () => {
        const fallButton = screen.getByRole("button", {
            name: /Add Fall Semester/i
        });
        fallButton.click();

        const fallTable = screen.getByTestId("fall-table");
        expect(fallTable).toBeInTheDocument();

        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        editButton.click();

        const deleteFallButton = screen.getByRole("button", {
            name: /Delete Fall/i
        });
        deleteFallButton.click();

        expect(fallTable).not.toBeInTheDocument();
    });
    test("Clicking the Delete Spring button deletes the Fall Semester table", () => {
        const springButton = screen.getByRole("button", {
            name: /Add Spring Semester/i
        });
        springButton.click();

        const springTable = screen.getByTestId("spring-table");
        expect(springTable).toBeInTheDocument();

        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        editButton.click();

        const deleteSpringButton = screen.getByRole("button", {
            name: /Delete Spring/i
        });
        deleteSpringButton.click();

        expect(springTable).not.toBeInTheDocument();
    });
    test("Clicking the Delete Winter button deletes the Winter Session table", () => {
        const winterButton = screen.getByRole("button", {
            name: /Add Winter Session/i
        });
        winterButton.click();

        const winterTable = screen.getByTestId("winter-table");
        expect(winterTable).toBeInTheDocument();

        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        editButton.click();

        const deleteWinterButton = screen.getByRole("button", {
            name: /Delete Winter/i
        });
        deleteWinterButton.click();

        expect(winterTable).not.toBeInTheDocument();
    });
    test("Clicking the Delete Summer button deletes the Summer Session table", () => {
        const summerButton = screen.getByRole("button", {
            name: /Add Summer Session/i
        });
        summerButton.click();

        const summerTable = screen.getByTestId("summer-table");
        expect(summerTable).toBeInTheDocument();

        const editButton = screen.getByRole("button", {
            name: /Edit Mode/i
        });
        editButton.click();

        const deleteSummerButton = screen.getByRole("button", {
            name: /Delete Summer/i
        });
        deleteSummerButton.click();

        expect(summerTable).not.toBeInTheDocument();
    });
});
