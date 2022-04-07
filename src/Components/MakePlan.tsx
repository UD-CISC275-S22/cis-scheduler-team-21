import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function MakePlan(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            {visible && <div></div>}
            <Button onClick={() => setVisible(!visible)}>New Plan</Button>
        </div>
    );
}
