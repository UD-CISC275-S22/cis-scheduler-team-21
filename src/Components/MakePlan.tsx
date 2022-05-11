import React, { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import { Plan } from "../Interfaces/Courses";
import { PlanContainer, PlanProps } from "./PlanContainer";
//import { Year } from "../Interfaces/yearInterface";
//import { useParams } from "react-router-dom";

export interface makePlanProps {
    DataKey: string;
    PlansArray: Plan[];
    setPlan: (Plans: Plan[]) => void;
}

export function MakePlan({
    DataKey,
    PlansArray,
    setPlan
}: makePlanProps): JSX.Element {
    //const [Plans, setPlans] = useState<Plan[]>([]);
    const [Counter, setCounter] = useState<number>(1);
    const [Visible, setVisible] = useState<boolean>(false);
    const [Degree, setDegree] = useState<string>("Select Degree");
    const [Year, setYear] = useState<string>("2022");

    function newPlan(): void {
        setVisible(false);
        const newPlan: Plan = {
            Title: "Plan " + Counter,
            id: Counter,
            description: ""
        };
        //const planList: Plan[] = [...PlansArray, newPlan];
        const planList: Plan[] = [...PlansArray, newPlan];
        const counterCopy: number = Counter + 1;
        setPlan(planList);
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
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <button
                        className="create-btn"
                        onClick={newPlan}
                        disabled={Degree == "Select Degree"}
                    >
                        Create Plan
                    </button>
                </div>
            </div>
        );
    }
    /**const [pageContent, setPageContent] = React.useState(null);
    const { planContents } = useParams();
    React.useEffect(() => {
        fetch(
            `https://ud-cisc275-s22.github.io/cis-scheduler-team-21/${planContents}`
        )
            .then((res) => res.json())
            .then((data) => setPageContent(data));
    }, [planContents]);*/

    //if (!pageContent) return null;
    /***/
    return (
        <div className="makePlan-background">
            <div>
                {/* {visible && <div></div>} */}

                {PlansArray.map((plan: Plan) => (
                    <div key={plan.id}>
                        <PlanContainer
                            plan={plan}
                            PlansArray={PlansArray}
                            setPlans={setPlan}
                            years={Year}
                            DataKey={DataKey}
                        ></PlanContainer>
                        <hr></hr>
                    </div>
                ))}
                <Button onClick={() => setVisible(true)}>New Plan</Button>
                <div className="main">
                    {Visible && <Popup data-testid="popup-window"></Popup>}
                </div>
            </div>
        </div>
    );
}
