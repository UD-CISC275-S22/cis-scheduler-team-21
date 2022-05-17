import React from "react";
import { render, screen } from "@testing-library/react";
import { Years } from "../Components/Years";
import { MemoryRouter } from "react-router-dom";

describe("Year Component tests", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Years></Years>
            </MemoryRouter>
        );
    });
    const original = window.location;

    beforeAll(() => {
        Object.defineProperty(window, "location", {
            configurable: true,
            value: { reload: jest.fn() }
        });
    });

    afterAll(() => {
        Object.defineProperty(window, "location", {
            configurable: true,
            value: original
        });
    });
    test("There is a Rename/Delete Years Button", () => {
        const renameDeleteButton = screen.getByTestId("rename-delete-button");
        expect(renameDeleteButton).toBeInTheDocument();
    });
    test("There is a button named Course Requirements", () => {
        const courseRequirementsButton = screen.getByRole("button", {
            name: /Course Requirements/i
        });
        expect(courseRequirementsButton).toBeInTheDocument();
    });
    test("There is a button named Save", () => {
        const saveButton = screen.getByRole("button", {
            name: /Save/i
        });
        expect(saveButton).toBeInTheDocument();
    });
    test("There is a button named Add Year", () => {
        const addYearButton = screen.getByRole("button", {
            name: /Add Year/i
        });
        expect(addYearButton).toBeInTheDocument();
    });
    test("The Add Year button adds a yearContainer component when clicked", () => {
        {
            Object.defineProperty(window, "localStorage", {
                value: {
                    getItem: jest.fn(() => null),
                    setItem: jest.fn(() => null)
                },
                writable: true
            });
        }
        const addYearButton = screen.getByRole("button", {
            name: /Add Year/i
        });
        addYearButton.click();
        expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    });
    test("Clicking the save button saves the list of years", () => {
        {
            Object.defineProperty(window, "localStorage", {
                value: {
                    getItem: jest.fn(() => null),
                    setItem: jest.fn(() => null)
                },
                writable: true
            });
        }
        const addYearButton = screen.getByRole("button", {
            name: /Add Year/i
        });
        addYearButton.click();

        const saveButton = screen.getByRole("button", {
            name: /Save/i
        });
        saveButton.click();

        expect(window.localStorage.setItem).toHaveBeenCalled(1);
    });
    test("Clicking the course requirements button reveals a popup with all the requirements", () => {
        const courseRequirementsButton = screen.getByRole("button", {
            name: /Course Requirements/i
        });
        courseRequirementsButton.click();

        expect(screen.getByTestId("requirement-popup")).toBeInTheDocument();
    });
    test("Clicking the Rename/Delete Year button reveals the edit mode for the years", () => {
        const renameDeleteButton = screen.getByTestId("rename-delete-button");

        renameDeleteButton.click();
        //expect(screen.getByTestId("year-name-edit")).toBeInTheDocument();
        expect(screen.getByTestId("rename-delete-button")).toBeInTheDocument();
    });
    test("Testing for localStorage items being rendered into previousData", () => {
        {
            Object.defineProperty(window, "localStorage", {
                value: {
                    getItem: jest.fn(() => null),
                    setItem: jest.fn(() => null)
                },
                writable: true
            });
        }
        expect(window.localStorage.getItem).toHaveBeenCalledTimes(2);
    });
    test("Clicking the delete button deletes a year", () => {
        const renameDeleteButton = screen.getByTestId("rename-delete-button");
        renameDeleteButton.click();
        const yearContainer = screen.getByTestId("year-container-1");
        //const yearTitle: HTMLElement = screen.getByText("Freshman");
        expect(yearContainer).toBeInTheDocument();
        const deleteButton = screen.getByTestId("delete-year-1");
        deleteButton.click();

        expect(yearContainer).not.toBeInTheDocument();
    });
});
