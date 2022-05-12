import React from "react";
import { SystemsAndNetworks } from "../Concentrations/SystemsAndNetworks";
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
