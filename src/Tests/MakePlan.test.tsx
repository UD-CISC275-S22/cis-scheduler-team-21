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
    test("Clicking the New Plan button opens a popup", () => {
        const newPlanButton = screen.getByRole("button", {
            name: /New Plan/i
        });
        userEvent.click(newPlanButton);

        const popupWindow = screen.getByTestId("popup-window");
        expect(popupWindow).toBeInTheDocument();
    });
});
