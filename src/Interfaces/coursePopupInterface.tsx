import { course } from "./Courses";

export interface coursePopupProps {
    setPopup: (popup: JSX.Element | null) => void;
    setSelectedCourses: (courses: course[]) => void;
    selectedCourses: course[];
    planCourses: course[];
    setPlanCourses: (courses: course[]) => void;
    course: course;
    planKey: string;
    yearKey: string;
}
