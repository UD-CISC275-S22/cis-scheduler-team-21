import React, { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Plan } from "../Interfaces/Courses";
import { PlanContainer } from "./PlanContainer";

//The total plans a person has made

export function MakePlan(): JSX.Element {
    const [Plans, setPlans] = useState<Plan[]>([]);
    const [Counter, setCounter] = useState<number>(1);
    const [Visible, setVisible] = useState<boolean>(false);
    const [Title, setTitle] = useState<string>("Select Degree");
    const [Year, setYear] = useState<string>("2022");

    function newPlan(): void {
        setVisible(false);
        const newPlan: Plan = {
            Title: "Plan " + Counter,
            id: Counter
        };
        //const planListCopy: Plan[] = [...planList, newPlan];
        const planList: Plan[] = [...Plans, newPlan];
        const counterCopy: number = Counter + 1;
        setPlans(planList);
        setCounter(counterCopy);
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
                        <Form.Group controlId="formStartYear">
                            <Form.Control
                                value={Year}
                                type="number"
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setYear(event.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Dropdown className="degreedropdown">
                            <Dropdown.Toggle id="degree" variant="secondary">
                                {Title}
                            </Dropdown.Toggle>
                            <DropdownMenu variant="dark">
                                <DropdownItem
                                    onClick={() => setTitle("Bachelor of Art")}
                                >
                                    Bachelor of Art
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() =>
                                        setTitle("Bachelor of Science")
                                    }
                                >
                                    Bachelor of Science
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <button
                        className="create-btn"
                        onClick={newPlan}
                        disabled={Title == "Select Degree"}
                    >
                        Create Plan
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>
                {/* {visible && <div></div>} */}
                {Plans.map((plan: Plan) => (
                    <div key={plan.id}>
                        <PlanContainer
                            plan={plan}
                            plans={Plans}
                            setPlans={setPlans}
                        ></PlanContainer>
                    </div>
                ))}
                <Button onClick={() => setVisible(true)}>New Plan</Button>
                <div className="main">{Visible && <Popup></Popup>}</div>
            </div>
        </div>
    );
}
