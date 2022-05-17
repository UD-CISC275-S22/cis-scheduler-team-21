import { course } from "./Courses";

export interface setYearProp {
    year: year;
    setYearList: (years: year[]) => void;
    yearList: year[];
    editVis: boolean;
    planCourses: course[];
    setPlanCourses: (courses: course[]) => void;
    planID: number;
}
export interface year {
    title: string;
    id: number;
}

/**export interface Year {
    DataKey: string;
}*/
