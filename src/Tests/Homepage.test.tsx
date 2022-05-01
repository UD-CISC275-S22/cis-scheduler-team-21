import React from "react";
import { render, screen } from "@testing-library/react";
import { Homepage } from "../Components/Homepage";
import { MemoryRouter } from "react-router-dom";

describe("Homepage Component tests", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Homepage />
            </MemoryRouter>
        );
    });
    /**test("There is a header", () => {
        const header = screen.getByRole("heading");
        expect(header).toBeInTheDocument();
    });*/
    test("renders Kiefer's name somewhere", () => {
        const name = screen.getByText(/Kiefer Yost/i);
        expect(name).toBeInTheDocument();
    });
    test("renders Chritian's name somewhere", () => {
        const name = screen.getByText(/Christian Rullan/i);
        expect(name).toBeInTheDocument();
    });
});
