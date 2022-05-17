import React from "react";
import { render, screen } from "@testing-library/react";
import { PlanContainer } from "../Components/PlanContainer";
import { plan } from "../Interfaces/Courses";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

const setPlans = () => {
    return;
};

const newPlan: plan = {
    title: "Test",
    id: 1,
    description: "Hello",
    degree: "Bachelor of Art"
};

const newplanList: plan[] = [newPlan];

describe("PlanContainer component test", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <PlanContainer
                    plan={newPlan}
                    plans={newplanList}
                    setPlans={setPlans}
                />
            </MemoryRouter>
        );
    });
    test("user typing in the description and title textboxes will update those fields accordingly", () => {
        const editButton: HTMLElement = screen.getByText("Edit");
        editButton.click();
        const titleInput: HTMLElement = screen.getByTestId("titleEdit");
        const descriptionInput: HTMLElement =
            screen.getByTestId("descriptionEdit");
        expect(titleInput).toBeInTheDocument();
        expect(descriptionInput).toBeInTheDocument();

        titleInput.click();
        userEvent.clear(titleInput);
        userEvent.type(titleInput, "xyz");
        descriptionInput.click();
        userEvent.clear(descriptionInput);
        userEvent.type(descriptionInput, "New Description");
        editButton.click();
        expect(screen.getByText("xyz")).toBeInTheDocument();
        expect(screen.getByText("New Description")).toBeInTheDocument();
    });
    test("Clicking the edit mode button and not editing anything, keeps the original values for title and description", () => {
        const editButton: HTMLElement = screen.getByText("Edit");
        editButton.click();
        const titleInput: HTMLElement = screen.getByTestId("titleEdit");
        const descriptionInput: HTMLElement =
            screen.getByTestId("descriptionEdit");
        expect(titleInput).toBeInTheDocument();
        expect(descriptionInput).toBeInTheDocument();

        editButton.click();
        const title = screen.getByText("Test");
        const descr = screen.getByText("Hello");
        expect(title).toBeInTheDocument();
        expect(descr).toBeInTheDocument();
    });
    test("Clicking Show button links to a new page", () => {
        const showButton: HTMLElement = screen.getByText("Show");
        expect(showButton).toBeInTheDocument();
        const currentURL = window.location.href;
        showButton.click();
        expect(window.location.href !== currentURL);
    });
});
