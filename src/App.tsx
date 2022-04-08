//import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

interface RevealButtonsProps {
    setVisible: (newVisibility: boolean) => void;
}

function RevealButtons({ setVisible }: RevealButtonsProps): JSX.Element {
    return (
        <div>
            <Button onClick={() => setVisible(true)}>
                Show Common 4 Year Plan
            </Button>
            <Button onClick={() => setVisible(false)}>
                Hide Common 4 Year Plan
            </Button>
        </div>
    );
}

function App(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h2>Kiefer</h2>
            <div>
                <RevealButtons setVisible={setVisible}></RevealButtons>
                {visible && (
                    <img
                        src={
                            "https://i.postimg.cc/CLSS3cqj/Screen-Shot-2022-04-07-at-2-34-26-PM.png"
                        }
                    ></img>
                )}
            </div>
            <p>
                ChristianRullan
                <br></br>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
