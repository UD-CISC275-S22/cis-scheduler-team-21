export interface SetSpringProp {
    setSpring: (springSemester: JSX.Element) => void;
}

export interface SetFallProp {
    setFall: (fallSemester: JSX.Element | null) => void;
    Visible: boolean;
}

export interface setSpringProp {
    setSpring: (springSemester: JSX.Element | null) => void;
    Visible: boolean;
}

export interface SetWinterProp {
    setWinter: (winterSession: JSX.Element) => void;
    Visible: boolean;
}

export interface SetSummerProp {
    setSummer: (summerSession: JSX.Element) => void;
    Visible: boolean;
}
