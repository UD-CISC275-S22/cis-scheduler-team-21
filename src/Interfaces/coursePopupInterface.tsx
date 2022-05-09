import { Course } from "./Courses";

export interface coursePopupProps {
    setPopup: (popup: JSX.Element | null) => void;
    setSelectedCourses: (courses: Course[]) => void;
    SelectedCourses: Course[];
    course: Course;
}
