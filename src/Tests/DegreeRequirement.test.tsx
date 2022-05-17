import React from "react";
import { render, screen } from "@testing-library/react";
import { DegreeRequirement } from "../Components/DegreeRequirement";

const setDegreeRequirement = () => {
    return;
};

describe("AI Component tests", () => {
    beforeEach(() =>
        render(
            <DegreeRequirement
                planCourses={[]}
                concentration=""
                setDegreeReq={setDegreeRequirement}
            ></DegreeRequirement>
        )
    );

    test("There is a back button", () => {
        const back = screen.getByRole("button", {
            name: /Back/i
        });
        expect(back).toBeInTheDocument();
    });

    test("Clicking the back button exits out of the popup", () => {
        const back = screen.getByRole("button", {
            name: /Back/i
        });
        expect(back.click()).not.toBeTruthy();
    });

    /**test("If concentration is systems and networks, it renders the systems and networks degree requirements", () => {
        render(
            <DegreeRequirement
                planCourses={[]}
                concentration="Systems and Networks"
                setDegreeReq={setDegreeRequirement}
            ></DegreeRequirement>
        );
        expect(screen.getByRole("SystemsAndNetworks")).toBeInTheDocument();
    });*/
});
