import React, { useState } from "react";
import { Button } from "react-bootstrap";

export interface RevealButtonsProps {
    setVisible: (newVisibility: boolean) => void;
}

export function CommonPlan(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function RevealButtons({ setVisible }: RevealButtonsProps): JSX.Element {
        return (
            <div>
                <Button
                    data-testid="show-button"
                    onClick={() => setVisible(true)}
                    disabled={visible}
                >
                    Show Common 4 Year Plan
                </Button>
                <Button
                    data-testid="hide-button"
                    onClick={() => setVisible(false)}
                    disabled={!visible}
                >
                    Hide Common 4 Year Plan
                </Button>
            </div>
        );
    }

    return (
        <div>
            <br></br>
            <RevealButtons setVisible={setVisible}></RevealButtons>
            {visible && (
                <img
                    data-testid="common-plan-image"
                    src={
                        "https://i.postimg.cc/CLSS3cqj/Screen-Shot-2022-04-07-at-2-34-26-PM.png"
                    }
                ></img>
            )}
        </div>
    );
}
