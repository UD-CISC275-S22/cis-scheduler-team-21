export interface Course {
    code: string;
    name: string;
    descr: string;
    credits: string;
    preReq: string;
    restrict: string;
    breadth: string;
    typ: string;
}

export interface Section {
    course: Course[];
}

export interface Plan {
    //Defines what a plan is
    Title: string;
    id: number;
}
