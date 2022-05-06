export interface setYearProp {
    year: Year;
    setYearList: (years: Year[]) => void;
    yearList: Year[];
    editVis: boolean;
}
export interface Year {
    title: string;
    id: number;
}
