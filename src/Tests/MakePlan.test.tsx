import React from "react";
/**import { render, screen, fireEvent } from "@testing-library/react";
import { MakePlan } from "../Components/MakePlan";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("MakePlan Component tests", () => {
    beforeEach(() =>
        render(
            <MemoryRouter>
                <MakePlan />
            </MemoryRouter>
        )
    );
    test("There is a button named New Plan", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        expect(newPlanButton).toBeInTheDocument();
    });
    test("Clicking the New Plan button sets the visibility of the popup to true", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        expect(newPlanButton.click()).toBeTruthy;
    });
    test("Clicking the New Plan button popup that contains a dropdown", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        expect(screen.getByTestId("degree-dropdown")).toBeInTheDocument();
    });
    test("Clicking the New Plan button popup that contains a Form.Group that allows the user to set the year", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        expect(screen.getByTestId("change-year")).toBeInTheDocument();
    });
    test("Clicking the New Plan button popup that contains a Create Plan button", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const createButton = screen.getByRole("button", {
            name: /Create Plan/i
        });
        expect(createButton).toBeInTheDocument();
    });
    test("Clicking the New Plan button popup that contains a close button", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const closeButton = screen.getByRole("button", {
            name: /close/i
        });
        expect(closeButton).toBeInTheDocument();
    });
    test("Clicking the close button within the popup sets the visibility of the popup to false", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const closeButton = screen.getByRole("button", {
            name: /close/i
        });

        expect(closeButton.click()).not.toBeTruthy();
    });
    test("Clicking the Bachelor of Science within the dropdown sets the degree to bachelor of science", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const dropdownItem = screen.getByTestId(
            "bachelor-science-dropdownItem"
        );
        dropdownItem.click();

        const name = screen.getByText("Bachelor of Science");
        expect(name).toBeInTheDocument();
    });
    test("Clicking the Bachelor of Art within the dropdown sets the degree to bachelor of art", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const dropdownItem = screen.getByTestId("bachelor-art-dropdownItem");
        dropdownItem.click();

        const name = screen.getByText("Bachelor of Art");
        expect(name).toBeInTheDocument();
    });
    test("Changing the year sets the year", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const year = screen.getByDisplayValue("2022");
        fireEvent.change(year, {
            target: { value: "new value" }
        });
        expect(year).not.toBeInTheDocument();
    });
    test("Delete plan works when its created", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        userEvent.click(newPlanButton);
        const dropMenu: HTMLElement = screen.getByTestId("degree-dropdown2");
        dropMenu.click();
        const option: HTMLElement = screen.getByTestId(
            "bachelor-science-dropdownItem"
        );
        option.click();
        const createButton: HTMLElement = screen.getByText("Create Plan");
        createButton.click();
        const plan: HTMLElement = screen.getByText("Plan 1");
        const deleteButton: HTMLElement = screen.getByText("Delete");
        deleteButton.click();
        expect(plan).not.toBeInTheDocument();
    });
});
*/
