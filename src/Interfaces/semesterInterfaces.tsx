import { course } from "./Courses";

export interface setFallProp {
    setFall: (fallSemester: JSX.Element | null) => void;
    visible: boolean;
    searchVisible: boolean;
    planCourses: course[];
    setPlanCourses: (courses: course[]) => void;
    yearID: number;
    planID: number;
}

export interface setSpringProp {
    setSpring: (springSemester: JSX.Element | null) => void;
    visible: boolean;
    searchVisible: boolean;
    planCourses: course[];
    setPlanCourses: (courses: course[]) => void;
    yearID: number;
    planID: number;
}

export interface setWinterProp {
    setWinter: (winterSession: JSX.Element | null) => void;
    visible: boolean;
    searchVisible: boolean;
    planCourses: course[];
    setPlanCourses: (courses: course[]) => void;
    yearID: number;
    planID: number;
}

export interface setSummerProp {
    setSummer: (summerSession: JSX.Element | null) => void;
    visible: boolean;
    searchVisible: boolean;
    planCourses: course[];
    setPlanCourses: (courses: course[]) => void;
    yearID: number;
    planID: number;
}

export interface addSemesterProps {
    planCourses: course[];
    setPlanCourses: (courses: course[]) => void;
    yearID: number;
    planID: number;
}
