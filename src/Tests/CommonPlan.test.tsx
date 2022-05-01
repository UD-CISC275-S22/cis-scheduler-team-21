import React from "react";
import { render, screen } from "@testing-library/react";
import { CommonPlan } from "../Components/CommonPlan";
import userEvent from "@testing-library/user-event";

describe("Common Plan Component tests", () => {
    beforeEach(() => {
        render(<CommonPlan />);
    });
    test("There is a button named Show Common Plan", () => {
        const showCommonPlan = screen.getByRole("button", {
            name: /Show Common 4 Year Plan/i
        });
        expect(showCommonPlan).toBeInTheDocument();
    });
    test("There is a button named Hide Common Plan", () => {
        const hideCommonPlan = screen.getByRole("button", {
            name: /Hide Common 4 Year Plan/i
        });
        expect(hideCommonPlan).toBeInTheDocument();
    });
    test("Clicking the show button disables it and enables the hide button", () => {
        const showCommonPlan = screen.getByRole("button", {
            name: /Show Common 4 Year Plan/i
        });
        userEvent.click(showCommonPlan);
        expect(screen.getByTestId("show-button")).toBeDisabled();
        expect(screen.getByTestId("hide-button")).toBeEnabled();
    });
    test("Clicking the hide button disables it and enables the show button", () => {
        const hideCommonPlan = screen.getByRole("button", {
            name: /Hide Common 4 Year Plan/i
        });
        userEvent.click(hideCommonPlan);
        expect(screen.getByTestId("show-button")).toBeEnabled();
        expect(screen.getByTestId("hide-button")).toBeDisabled();
    });
    test("Clicking the show button reveals the common plan image", () => {
        const showCommonPlan = screen.getByRole("button", {
            name: /Show Common 4 Year Plan/i
        });
        userEvent.click(showCommonPlan);
        expect(screen.getByTestId("common-plan-image")).toBeInTheDocument();
    });
    /**test("Clicking the hide button hides the common plan image", () => {
        const hideCommonPlan = screen.getByRole("button", {
            name: /Hide Common 4 Year Plan/i
        });
        userEvent.click(hideCommonPlan);
        expect(document.getElementsByTagName("img")).not.toBeInTheDocument();
    });*/
});
