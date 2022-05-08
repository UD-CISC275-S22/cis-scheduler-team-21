import { Course } from "./Courses";

export interface coursePopupProps {
    setPopup: (popup: JSX.Element | null) => void;
    setCourse: (courseObject: Course) => void;
    course: Course | undefined;
}
