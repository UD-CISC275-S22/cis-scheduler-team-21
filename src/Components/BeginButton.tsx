import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function BeginButton(): JSX.Element {
    const [visibility, setVisibility] = useState<boolean>(true);

    return (
        <li>
            <Link to="/makeplan">
                {visibility && (
                    <Button onClick={() => setVisibility(false)}>Begin</Button>
                )}
            </Link>
        </li>
    );
}
