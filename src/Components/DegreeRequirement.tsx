import React from "react";
import { Button } from "react-bootstrap";
import { AI } from "../Concentrations/AI";
import { Bioinformatics } from "../Concentrations/Bioinformatics";
import { Cybersecurity } from "../Concentrations/Cybersecurity";
import { DataScience } from "../Concentrations/DataScience";
import { HPC } from "../Concentrations/HPC";
import { SystemsAndNetworks } from "../Concentrations/SystemsAndNetworks";
import { Theory } from "../Concentrations/Theory";
import { Traditional } from "../Concentrations/Traditional";
import { degreeProps } from "../Interfaces/degreeInterface";

export function DegreeRequirement({
    planCourses,
    concentration,
    setDegreeReq
}: degreeProps): JSX.Element {
    function removePopup(): void {
        setDegreeReq(null);
    }
    return (
        <div
            className="popup"
            style={{ zIndex: 3 }}
            data-TestId="requirement-popup"
        >
            <div
                className="popup-inner"
                style={{ height: "600px", maxWidth: "1200px" }}
            >
                <div>
                    <Button onClick={removePopup}>Back</Button>
                </div>
                <b style={{ marginLeft: "40ch" }}>Concentration Requirements</b>
                <div
                    style={{
                        display:
                            concentration === "Systems And Networks"
                                ? "block"
                                : "none"
                    }}
                >
                    <SystemsAndNetworks
                        planCourses={planCourses}
                        //data-testId="systems-and-networks-requirements"
                    ></SystemsAndNetworks>
                </div>
                <div
                    style={{
                        display: concentration === "AI" ? "block" : "none"
                    }}
                >
                    <AI planCourses={planCourses}></AI>
                </div>
                <div
                    style={{
                        display:
                            concentration === "Cybersecurity" ? "block" : "none"
                    }}
                >
                    <Cybersecurity planCourses={planCourses}></Cybersecurity>
                </div>
                <div
                    style={{
                        display:
                            concentration === "Bioinformatics"
                                ? "block"
                                : "none"
                    }}
                >
                    <Bioinformatics planCourses={planCourses}></Bioinformatics>
                </div>
                <div
                    style={{
                        display:
                            concentration === "DataScience" ? "block" : "none"
                    }}
                >
                    <DataScience planCourses={planCourses}></DataScience>
                </div>
                <div
                    style={{
                        display: concentration === "HPC" ? "block" : "none"
                    }}
                >
                    <HPC planCourses={planCourses}></HPC>
                </div>
                <div
                    style={{
                        display: concentration === "Theory" ? "block" : "none"
                    }}
                >
                    <Theory planCourses={planCourses}></Theory>
                </div>
                <div
                    style={{
                        display:
                            concentration === "Traditional" ? "block" : "none"
                    }}
                >
                    <Traditional planCourses={planCourses}></Traditional>
                </div>
            </div>
        </div>
    );
}
