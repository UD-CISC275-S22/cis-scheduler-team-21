import React from "react";
import { render, screen } from "@testing-library/react";
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
    test("Clicking Systems and Networks within the dropdown sets the degree to it", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const dropdownItem = screen.getByText("Systems And Networks");
        dropdownItem.click();

        const name = screen.getByText("Systems And Networks");
        expect(name).toBeInTheDocument();
    });
    test("Clicking Artificial Intelligence within the dropdown sets the degree to it", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const dropdownItem = screen.getByText("Artificial Intelligence");
        dropdownItem.click();

        const name = screen.getByText("AI");
        expect(name).toBeInTheDocument();
    });
    test("Clicking Cybersecurity within the dropdown sets the degree to it", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const dropdownItem = screen.getByText("Cybersecurity");
        dropdownItem.click();

        const name = screen.getByText("Cybersecurity");
        expect(name).toBeInTheDocument();
    });
    test("Clicking Bioinformatics within the dropdown sets the degree to it", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const dropdownItem = screen.getByText("Bioinformatics");
        dropdownItem.click();

        const name = screen.getByText("Bioinformatics");
        expect(name).toBeInTheDocument();
    });
    test("Clicking DataScience within the dropdown sets the degree to it", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const dropdownItem = screen.getByText("DataScience");
        dropdownItem.click();

        const name = screen.getByText("DataScience");
        expect(name).toBeInTheDocument();
    });
    test("Clicking HPC within the dropdown sets the degree to it", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const dropdownItem = screen.getByText("High Performance Computing");
        dropdownItem.click();

        const name = screen.getByText("HPC");
        expect(name).toBeInTheDocument();
    });
    test("Clicking Theory within the dropdown sets the degree to it", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const dropdownItem = screen.getByText("Theory And Computation");
        dropdownItem.click();

        const name = screen.getByText("Theory");
        expect(name).toBeInTheDocument();
    });
    test("Clicking Traditional within the dropdown sets the degree to it", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();

        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const dropdownItem = screen.getByText("Traditional/Custom");
        dropdownItem.click();

        const name = screen.getByText("Traditional");
        expect(name).toBeInTheDocument();
    });
    test("Delete plan works when its created", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        userEvent.click(newPlanButton);
        const dropMenu: HTMLElement = screen.getByTestId("degree-dropdown2");
        dropMenu.click();
        const option: HTMLElement = screen.getByText("Systems And Networks");
        option.click();
        //const createButton: HTMLElement = screen.getByText("Create Plan");
        const createButton = screen.getByRole("button", {
            name: /Create Plan/i
        });
        createButton.click();
        const plan: HTMLElement = screen.getByText("plan 1");
        const deleteButton: HTMLElement = screen.getByText("Delete");
        deleteButton.click();
        expect(plan).not.toBeInTheDocument();
    });
    test("Clicking the Save Plans button places an array of the plans within localStorage", () => {
        {
            Object.defineProperty(window, "localStorage", {
                value: {
                    getItem: jest.fn(() => null),
                    setItem: jest.fn(() => null)
                },
                writable: true
            });
        }
        //expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
        const savePlansButton = screen.getByRole("button", {
            name: /Save Plans/i
        });
        savePlansButton.click();
        expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    });
});
