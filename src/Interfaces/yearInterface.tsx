import { Course } from "./Courses";

export interface setYearProp {
    year: Year;
    setYearList: (years: Year[]) => void;
    yearList: Year[];
    editVis: boolean;
    planCourses: Course[];
    setPlanCourses: (courses: Course[]) => void;
}
export interface Year {
    title: string;
    id: number;
}

/**export interface Year {
    DataKey: string;
}*/
