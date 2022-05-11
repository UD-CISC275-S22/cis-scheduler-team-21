import React, { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import { Plan } from "../Interfaces/Courses";
import { PlanContainer } from "./PlanContainer";

const saveDataKey = "PlanList-Data";
let loadedData: Plan[] = [];
const previousData: string | null = localStorage.getItem(saveDataKey);
if (previousData !== null) {
    loadedData = Object.values(JSON.parse(previousData));
    console.log(loadedData);
}

export function MakePlan(): JSX.Element {
    let mostRecentID = 0;
    if (loadedData.length !== 0) {
        mostRecentID = loadedData[loadedData.length - 1].id + 1;
    }
    const [Plans, setPlans] = useState<Plan[]>(loadedData);
    //const [countList, setCountList] = useState<number[]>([]);
    const [Counter, setCounter] = useState<number>(mostRecentID);
    const [Visible, setVisible] = useState<boolean>(false);
    const [Degree, setDegree] = useState<string>("Select Degree");
    const [Year, setYear] = useState<string>("2022");

    function newPlan(): void {
        setVisible(false);
        const newPlan: Plan = {
            Title: "Plan " + Counter,
            id: Counter,
            description: "",
            degree: Degree
        };
        const planList: Plan[] = [...Plans, newPlan];
        const counterCopy: number = Counter + 1;
        setPlans(planList);
        setCounter(counterCopy);
        localStorage.setItem(saveDataKey, JSON.stringify(planList));
        location.reload();
    }
    function saveData() {
        localStorage.setItem(saveDataKey, JSON.stringify(Plans));
    }

    function Popup() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <button
                        className="close-btn"
                        onClick={() => setVisible(false)}
                    >
                        close
                    </button>
                    <div>
                        <Form.Group
                            data-testid="change-year"
                            controlId="formStartYear"
                        >
                            <Form.Control
                                data-testid="input-year"
                                value={Year}
                                type="number"
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setYear(event.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Dropdown
                            data-testid="degree-dropdown"
                            className="degreedropdown"
                        >
                            <Dropdown.Toggle
                                data-testid="degree-dropdown2"
                                id="degree"
                                variant="secondary"
                            >
                                {Degree}
                            </Dropdown.Toggle>
                            <DropdownMenu
                                data-testid="degree-dropdown-menu"
                                variant="dark"
                            >
                                <DropdownItem
                                    data-testid="bachelor-art-dropdownItem"
                                    onClick={() => setDegree("Bachelor of Art")}
                                >
                                    Bachelor of Art
                                </DropdownItem>
                                <DropdownItem
                                    data-testid="bachelor-science-dropdownItem"
                                    onClick={() =>
                                        setDegree("Bachelor of Science")
                                    }
                                >
                                    Bachelor of Science
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() =>
                                        setDegree("Systems And Networks")
                                    }
                                >
                                    Systems And Networks
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <button
                        className="create-btn"
                        onClick={newPlan}
                        disabled={Degree === "Select Degree"}
                    >
                        Create Plan
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="makePlan-background">
            <div>
                <Button
                    style={{
                        left: "60ch",
                        position: "relative",
                        backgroundColor: "green"
                    }}
                    onClick={saveData}
                >
                    Save Plans
                </Button>
                {/* {visible && <div></div>} */}
                {Plans.map((plan: Plan) => (
                    <div key={plan.id}>
                        <PlanContainer
                            plan={plan}
                            plans={Plans}
                            setPlans={setPlans}
                        ></PlanContainer>
                        <hr></hr>
                    </div>
                ))}
                <div>
                    <Button onClick={() => setVisible(true)}>New Plan</Button>
                </div>
                <div className="main">
                    {Visible && <Popup data-testid="popup-window"></Popup>}
                </div>
            </div>
        </div>
    );
}
