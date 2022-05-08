import React from "react";
import { Button } from "react-bootstrap";
import { coursePopupProps } from "../Interfaces/coursePopupInterface";

export function CourseEdit({
    setPopup,
    setCourse,
    course
}: coursePopupProps): JSX.Element {
    return (
        <div className="popup">
            <div
                className="popup-inner"
                style={{ zIndex: "2", height: "500px", maxWidth: "500px" }}
            >
                dang
                <Button onClick={() => setPopup(null)}>Back</Button>
            </div>
        </div>
    );
}
