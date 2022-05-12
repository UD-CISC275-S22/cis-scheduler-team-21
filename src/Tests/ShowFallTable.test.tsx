import React from "react";
import { render, screen } from "@testing-library/react";
import { ShowFallTable } from "../TableComponents/ShowFallTable";
//import { SetFallProp } from "../Interfaces/semesterInterfaces";
//import userEvent from "@testing-library/user-event";

const setFallElement = () => {
    return;
};
const setPlanCourses = () => {
    return;
};

describe("ShowFallTable Component tests", () => {
    beforeEach(() =>
        render(
            <ShowFallTable
                setFall={setFallElement}
                Visible={false}
                SearchVisible={false}
                planCourses={[]}
                setPlanCourses={setPlanCourses}
            />
        )
    );
    test("renders Fall Semester somewhere", () => {
        const name = screen.getByText(/Fall Semester/i);
        expect(name).toBeInTheDocument();
    });
});
