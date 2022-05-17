import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { YearContainer } from "../Components/YearContainer";
import { year } from "../Interfaces/yearInterface";

const setPlanCourses = () => {
    return;
};
const setYearList = () => {
    return;
};
const year: year = { title: "year 1", id: 1 };
//const year2: year = { title: "year 2", id: 2 };
describe("year Container tests", () => {
    beforeEach(() => {
        render(
            <YearContainer
                year={year}
                setYearList={setYearList}
                yearList={[year]}
                editVis={true}
                planCourses={[]}
                setPlanCourses={setPlanCourses}
                planID={0}
            ></YearContainer>
        );
    });
    test("There is a button named Show/Hide", () => {
        const showHideButton = screen.getByTestId("show-hide-button");
        expect(showHideButton).toBeInTheDocument();
    });
    test("The show/hide button reveals the add semester component", () => {
        const showHideButton = screen.getByTestId("show-hide-button");
        showHideButton.click();

        expect(screen.getByTestId("add-semester-buttons")).toBeInTheDocument();
    });
    test("There is a delete button", () => {
        const deleteButton = screen.getByRole("button", {
            name: /Delete/i
        });
        expect(deleteButton).toBeInTheDocument();
    });
    test("Typing in the input changes the year's name", () => {
        /**const yearName = (
            document.getElementById("nameTxt") as HTMLInputElement
        ).value;*/
        const yearName = screen.getByTestId(
            "year-name-edit"
        ) as HTMLInputElement;
        fireEvent.change(yearName, {
            target: { value: "new value" }
        });
        expect(yearName).not.toBeInTheDocument();
    });
    test("Clicking the delete button deletes a year", () => {
        const yearTitle = screen.getByText("year 1");
        expect(yearTitle).toBeInTheDocument();
        const deleteButton = screen.getByRole("button", {
            name: /Delete/i
        });
        deleteButton.click();

        expect(yearTitle).not.toBeInTheDocument();
    });
});
