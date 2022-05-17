import { course } from "./Courses";

export interface degreeProps {
    planCourses: course[];
    concentration: string;
    setDegreeReq: (degree: JSX.Element | null) => void;
}

export interface planCoursesProp {
    planCourses: course[];
}
