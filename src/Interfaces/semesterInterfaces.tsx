export interface SetFallProp {
    setFall: (fallSemester: JSX.Element | null) => void;
    Visible: boolean;
    SearchVisible: boolean;
    //DataKey: string;
}

export interface setSpringProp {
    setSpring: (springSemester: JSX.Element | null) => void;
    Visible: boolean;
    SearchVisible: boolean;
    //DataKey: string;
}

export interface SetWinterProp {
    setWinter: (winterSession: JSX.Element | null) => void;
    Visible: boolean;
    SearchVisible: boolean;
    //DataKey: string;
}

export interface SetSummerProp {
    setSummer: (summerSession: JSX.Element | null) => void;
    Visible: boolean;
    SearchVisible: boolean;
    //DataKey: string;
}
