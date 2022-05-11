import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { SystemsAndNetworks } from "../Concentrations/SystemsAndNetworks";
import { Course } from "../Interfaces/Courses";
import { degreeProps } from "../Interfaces/degreeInterface";

export function DegreeRequirement({
    planCourses,
    concentration
}: degreeProps): JSX.Element {
    return (
        <div>
            <div
                style={{
                    display:
                        concentration === "Systems And Networks"
                            ? "blcok"
                            : "none"
                }}
            >
                <SystemsAndNetworks
                    planCourses={planCourses}
                ></SystemsAndNetworks>
            </div>
        </div>
    );
}
