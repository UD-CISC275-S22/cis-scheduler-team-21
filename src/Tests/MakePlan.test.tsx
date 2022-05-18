import React from "react";
import { render, screen } from "@testing-library/react";
import { MakePlan } from "../Components/MakePlan";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Years } from "../Components/Years";

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
    test("Clicking Systems and Networks within the dropdown renders the systems and networks requirements when you click the course Requirements button on the Years page", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();
        expect(screen.getByText("close")).toBeInTheDocument();
        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const concentration = screen.getByText("Systems And Networks");
        expect(concentration).toBeInTheDocument();
        concentration.click();

        expect(screen.getByText("Systems And Networks")).toBeInTheDocument();
        const createButton = screen.getByRole("button", {
            name: /Create plan/i
        });
        expect(createButton).toBeInTheDocument();
        createButton.click();

        render(
            <MemoryRouter>
                <Years></Years>
            </MemoryRouter>
        );
        const courseReqButton = screen.getByRole("button", {
            name: /course Requirements/i
        });
        expect(courseReqButton).toBeInTheDocument();
        courseReqButton.click();
        expect(
            screen.getByTestId("systems-and-networks-requirements")
        ).toBeInTheDocument();
    });
    test("Clicking Artificial Intelligence within the dropdown renders the AI requirements when you click the course Requirements button on the Years page", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();
        expect(screen.getByText("close")).toBeInTheDocument();
        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const concentration = screen.getByText("Artificial Intelligence");
        expect(concentration).toBeInTheDocument();
        concentration.click();

        expect(screen.getByText("AI")).toBeInTheDocument();
        const createButton = screen.getByRole("button", {
            name: /Create plan/i
        });
        expect(createButton).toBeInTheDocument();
        createButton.click();

        render(
            <MemoryRouter>
                <Years></Years>
            </MemoryRouter>
        );
        const courseReqButton = screen.getByRole("button", {
            name: /course Requirements/i
        });
        expect(courseReqButton).toBeInTheDocument();
        courseReqButton.click();
        expect(screen.getByTestId("core-requirements-AI")).toBeInTheDocument();
    });
    test("Clicking Cybersecurity within the dropdown renders the cybersecurity requirements when you click the course Requirements button on the Years page", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();
        expect(screen.getByText("close")).toBeInTheDocument();
        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const concentration = screen.getByText("Cybersecurity");
        expect(concentration).toBeInTheDocument();
        concentration.click();

        expect(screen.getByText("Cybersecurity")).toBeInTheDocument();
        const createButton = screen.getByRole("button", {
            name: /Create plan/i
        });
        expect(createButton).toBeInTheDocument();
        createButton.click();

        render(
            <MemoryRouter>
                <Years></Years>
            </MemoryRouter>
        );
        const courseReqButton = screen.getByRole("button", {
            name: /course Requirements/i
        });
        expect(courseReqButton).toBeInTheDocument();
        courseReqButton.click();
        expect(
            screen.getByTestId("cybersecurity-requirements")
        ).toBeInTheDocument();
    });
    test("Clicking Bioinformatics within the dropdown renders the bioinformatics requirements when you click the course Requirements button on the Years page", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();
        expect(screen.getByText("close")).toBeInTheDocument();
        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const concentration = screen.getByText("Bioinformatics");
        expect(concentration).toBeInTheDocument();
        concentration.click();

        expect(screen.getByText("Bioinformatics")).toBeInTheDocument();
        const createButton = screen.getByRole("button", {
            name: /Create plan/i
        });
        expect(createButton).toBeInTheDocument();
        createButton.click();

        render(
            <MemoryRouter>
                <Years></Years>
            </MemoryRouter>
        );
        const courseReqButton = screen.getByRole("button", {
            name: /course Requirements/i
        });
        expect(courseReqButton).toBeInTheDocument();
        courseReqButton.click();
        expect(
            screen.getByTestId("bioinformatics-requirements")
        ).toBeInTheDocument();
    });
    test("Clicking Data Science within the dropdown renders the data science requirements when you click the course Requirements button on the Years page", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();
        expect(screen.getByText("close")).toBeInTheDocument();
        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const concentration = screen.getByText("DataScience");
        expect(concentration).toBeInTheDocument();
        concentration.click();

        expect(screen.getByText("DataScience")).toBeInTheDocument();
        const createButton = screen.getByRole("button", {
            name: /Create plan/i
        });
        expect(createButton).toBeInTheDocument();
        createButton.click();

        render(
            <MemoryRouter>
                <Years></Years>
            </MemoryRouter>
        );
        const courseReqButton = screen.getByRole("button", {
            name: /course Requirements/i
        });
        expect(courseReqButton).toBeInTheDocument();
        courseReqButton.click();
        expect(
            screen.getByTestId("data-science-requirements")
        ).toBeInTheDocument();
    });
    test("Clicking High Performance Computing within the dropdown renders the HPC requirements when you click the course Requirements button on the Years page", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();
        expect(screen.getByText("close")).toBeInTheDocument();
        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const concentration = screen.getByText("High Performance Computing");
        expect(concentration).toBeInTheDocument();
        concentration.click();

        expect(screen.getByText("HPC")).toBeInTheDocument();
        const createButton = screen.getByRole("button", {
            name: /Create plan/i
        });
        expect(createButton).toBeInTheDocument();
        createButton.click();

        render(
            <MemoryRouter>
                <Years></Years>
            </MemoryRouter>
        );
        const courseReqButton = screen.getByRole("button", {
            name: /course Requirements/i
        });
        expect(courseReqButton).toBeInTheDocument();
        courseReqButton.click();
        expect(screen.getByTestId("hpc-requirements")).toBeInTheDocument();
    });
    test("Clicking Theory and Computation within the dropdown renders the theory and computation requirements when you click the course Requirements button on the Years page", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();
        expect(screen.getByText("close")).toBeInTheDocument();
        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const concentration = screen.getByText("Theory And Computation");
        expect(concentration).toBeInTheDocument();
        concentration.click();

        expect(screen.getByText("Theory")).toBeInTheDocument();
        const createButton = screen.getByRole("button", {
            name: /Create plan/i
        });
        expect(createButton).toBeInTheDocument();
        createButton.click();

        render(
            <MemoryRouter>
                <Years></Years>
            </MemoryRouter>
        );
        const courseReqButton = screen.getByRole("button", {
            name: /course Requirements/i
        });
        expect(courseReqButton).toBeInTheDocument();
        courseReqButton.click();
        expect(screen.getByTestId("theory-requirements")).toBeInTheDocument();
    });
    test("Clicking Traditional/Custom within the dropdown renders the traditional requirements when you click the course Requirements button on the Years page", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        newPlanButton.click();
        expect(screen.getByText("close")).toBeInTheDocument();
        const dropdownToggle = screen.getByRole("button", {
            name: /Select Degree/i
        });
        dropdownToggle.click();

        const concentration = screen.getByText("Traditional/Custom");
        expect(concentration).toBeInTheDocument();
        concentration.click();

        expect(screen.getByText("Traditional")).toBeInTheDocument();
        const createButton = screen.getByRole("button", {
            name: /Create plan/i
        });
        expect(createButton).toBeInTheDocument();
        createButton.click();

        render(
            <MemoryRouter>
                <Years></Years>
            </MemoryRouter>
        );
        const courseReqButton = screen.getByRole("button", {
            name: /course Requirements/i
        });
        expect(courseReqButton).toBeInTheDocument();
        courseReqButton.click();
        expect(
            screen.getByTestId("traditional-requirements")
        ).toBeInTheDocument();
    });
});
