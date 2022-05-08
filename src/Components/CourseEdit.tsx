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
                style={{
                    zIndex: "2",
                    height: "500px",
                    maxWidth: "500px"
                }}
            >
                <div
                    style={{
                        marginLeft: "20ch",
                        width: "100%",
                        height: "100%",
                        display: "flex"
                    }}
                >
                    dang
                    <Button onClick={() => setPopup(null)}>Done</Button>
                </div>
            </div>
        </div>
    );
}
