export interface SetFallProp {
    setFall: (fallSemester: JSX.Element | null) => void;
    Visible: boolean;
    SearchVisible: boolean;
}

export interface setSpringProp {
    setSpring: (springSemester: JSX.Element | null) => void;
    Visible: boolean;
    SearchVisible: boolean;
}

export interface SetWinterProp {
    setWinter: (winterSession: JSX.Element | null) => void;
    Visible: boolean;
    SearchVisible: boolean;
}

export interface SetSummerProp {
    setSummer: (summerSession: JSX.Element | null) => void;
    Visible: boolean;
    SearchVisible: boolean;
}
