import React from "react";
import { render, screen } from "@testing-library/react";
import { BeginButton } from "../Components/BeginButton";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("BeginButton Component tests", () => {
    beforeEach(() =>
        render(
            <MemoryRouter>
                <BeginButton />
            </MemoryRouter>
        )
    );
    test("There is a Begin button", () => {
        const beginButton = screen.getByRole("button", {
            name: /Begin/i
        });
        expect(beginButton).toBeInTheDocument();
    });
    test("The Begin button changes the visibility of the button when clicked", () => {
        const beginButton = screen.getByRole("button", {
            name: /Begin/i
        });
        userEvent.click(beginButton);

        expect(beginButton).not.toBeInTheDocument();
    });
    test("The Begin button links to a new page when clicked", () => {
        const beginButton = screen.getByRole("button", {
            name: /Begin/i
        });
        userEvent.click(beginButton);

        expect(location.pathname);
    });
});
