export interface setYearProp {
    year: Year;
    setYear: (years: Year[]) => void;
    yearList: Year[];
}
export interface Year {
    title: string;
    id: number;
}
