import React from "react";
import { render, screen } from "@testing-library/react";
import { AI } from "../Concentrations/AI";
import { Bioinformatics } from "../Concentrations/Bioinformatics";
import { Cybersecurity } from "../Concentrations/Cybersecurity";
import { DataScience } from "../Concentrations/DataScience";
import { HPC } from "../Concentrations/HPC";
import { SystemsAndNetworks } from "../Concentrations/SystemsAndNetworks";
import { Theory } from "../Concentrations/Theory";
import { Traditional } from "../Concentrations/Traditional";
import { planCoursesProp } from "../Interfaces/degreeInterface";
import { Years } from "../Components/Years";
import { TableContentsFall } from "../TableComponents/TableContentsFall";

/**describe("AI Component tests", () => {
    beforeEach(() => render(
        <div>
    <AI planCourses={[]}></AI>
    <Years></Years>
    </div>
    ));

    test("Testing if core requirements are rendered", () => {
        expect(screen.getByTestId("core-requirements-AI")).toBeInTheDocument();
    });

    test("Testing if additional requirements are rendered", () => {
        expect(
            screen.getByTestId("additional-requirements-AI")
        ).toBeInTheDocument();
    });
});*/
