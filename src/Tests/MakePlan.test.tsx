import React from "react";
import { render, screen } from "@testing-library/react";
import { MakePlan } from "../Components/MakePlan";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("AddSemester Component tests", () => {
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
    test("The popup window contains a dropdown menu", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        userEvent.click(newPlanButton);

        const dropMenu = screen.getByTestId("degree-dropdown");
        expect(dropMenu).toBeInTheDocument();
    });
    test("The popup window contains an input bar to change the year", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        userEvent.click(newPlanButton);

        const yearInput = screen.getByTestId("change-year");
        expect(yearInput).toBeInTheDocument();
    });
});
