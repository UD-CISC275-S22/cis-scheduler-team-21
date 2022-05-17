export interface course {
    id: string;
    code: string;
    name: string;
    descr: string;
    credits: string;
    preReq: string;
    restrict: string;
    breadth: string;
    typ: string;
}

export interface courseJSON {
    code: string;
    name: string;
    descr: string;
    credits: string;
    preReq: string;
    restrict: string;
    breadth: string;
    typ: string;
}

export interface section {
    course: course[];
}

export interface plan {
    //Defines what a plan is
    title: string;
    id: number;
    description: string;
    degree: string;
}
