import React from "react";
import { render, screen } from "@testing-library/react";
import { ShowFallSemester } from "../TableComponents/ShowFallSemester";
//import { SetFallProp } from "../Interfaces/semesterInterfaces";
//import userEvent from "@testing-library/user-event";

const setFallElement = () => {
    return;
};

describe("ShowFallSemester Component tests", () => {
    beforeEach(() =>
        render(
            <ShowFallSemester
                setFall={setFallElement}
                Visible={false}
                SearchVisible={false}
            />
        )
    );
    test("renders Fall Semester somewhere", () => {
        const name = screen.getByText(/Fall Semester/i);
        expect(name).toBeInTheDocument();
    });
});
