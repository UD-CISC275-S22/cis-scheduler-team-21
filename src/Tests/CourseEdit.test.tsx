import React from "react";
import { render, screen } from "@testing-library/react";
import { CourseEdit } from "../Components/CourseEdit";
import { course } from "../Interfaces/Courses";
import userEvent from "@testing-library/user-event";

const setPopup = () => {
    return;
};
const setSelectedCourses = () => {
    return;
};
const setPlanCourses = () => {
    return;
};

const courseTest: course = {
    id: "",
    code: "CISC 275",
    name: "Introduction to Software Engineering",
    descr: "Object oriented software design and development through use of an object oriented programming language. Topics include team programming, design patterns, graphical user interfaces, software engineering tools (e.g., integrated development environments, version control, build management, bug tracking, automated testing).",
    credits: "3",
    preReq: "Minimum grade of C- in CISC 181 and CISC 220.",
    restrict: "",
    breadth: "University: ; A&S: ",
    typ: "Fall and Spring"
};
describe("CourseEdit Component tests", () => {
    beforeEach(() => {
        render(
            <CourseEdit
                setPopup={setPopup}
                setSelectedCourses={setSelectedCourses}
                selectedCourses={[]}
                course={courseTest}
                planCourses={[]}
                setPlanCourses={setPlanCourses}
                planKey={""}
                yearKey={""}
            ></CourseEdit>
        );
    });
    test("There is a button named Done that removes the popup when clicked", () => {
        expect(screen.getByTestId("course-edit-popup")).toBeInTheDocument();
        const doneButton = screen.getByRole("button", {
            name: /Done/i
        });
        expect(doneButton).toBeInTheDocument();
        doneButton.click();
        expect(screen.getByTestId("course-edit-popup")).not.toBeInTheDocument();
    });
    test("There is a form named Code that changes the course code when edited by the user", () => {
        const codeForm = screen.getByTestId("code-form");
        expect(screen.getByDisplayValue(courseTest.code)).toBeInTheDocument();
        codeForm.click();
        userEvent.clear(codeForm);
        userEvent.type(codeForm, "new value");
        expect(screen.getByDisplayValue("new value")).toBeInTheDocument();
        expect(screen.queryByText("CISC 275")).not.toBeInTheDocument();
    });
    test("There is a form named Name that changes the course name when edited by the user", () => {
        const nameForm = screen.getByTestId("name-form");

        expect(screen.getByDisplayValue(courseTest.name)).toBeInTheDocument();
        nameForm.click();
        userEvent.clear(nameForm);
        userEvent.type(nameForm, "new value");
        expect(screen.getByDisplayValue("new value")).toBeInTheDocument();
        expect(
            screen.queryByText("Introduction to Software Engineering")
        ).not.toBeInTheDocument();
    });
    test("There is a form named Credits that changes the course credits when edited by the user", () => {
        const creditsForm = screen.getByTestId("credits-form");

        expect(
            screen.getByDisplayValue(courseTest.credits)
        ).toBeInTheDocument();
        creditsForm.click();
        userEvent.clear(creditsForm);
        userEvent.type(creditsForm, "new value");
        expect(screen.getByDisplayValue("new value")).toBeInTheDocument();
        expect(screen.queryByText("3")).not.toBeInTheDocument();
    });
    test("There is a form named PreReq that changes the course preRequisites when edited by the user", () => {
        const preReqForm = screen.getByTestId("preReq-form");

        expect(screen.getByDisplayValue(courseTest.preReq)).toBeInTheDocument();
        preReqForm.click();
        userEvent.clear(preReqForm);
        userEvent.type(preReqForm, "new value");
        expect(screen.getByDisplayValue("new value")).toBeInTheDocument();
        expect(
            screen.queryByText("Minimum grade of C- in CISC 181 and CISC 220.")
        ).not.toBeInTheDocument();
    });
    test("There is a form named Restriction that changes the course restrictions when edited by the user", () => {
        const restrictionForm = screen.getByTestId("restriction-form");

        expect(
            screen.getByDisplayValue(courseTest.restrict)
        ).toBeInTheDocument();
        const length = courseTest.restrict.length;
        restrictionForm.click();
        userEvent.clear(restrictionForm);
        const newText = "new value";
        userEvent.type(restrictionForm, newText);

        expect(screen.getByDisplayValue(newText)).toBeInTheDocument();
        expect(length !== newText.length);
    });
    /**test("Checking the Arts and Sciences breadth", () => {
        const artBreadthsForm = screen.getByTestId("art-breadths-form");
        expect(artBreadthsForm).toBeInTheDocument();
        artBreadthsForm.click();
        const doneButton = screen.getByRole("button", {
            name: /Done/i
        });
        doneButton.click();
        const breadths = course.breadth;
        const expectedBreadths =
            "University: ; A&S:   Creative Arts and Humanities";
        expect(breadths === expectedBreadths);
    });
    test("There is a form named History Cultural Change", () => {
        const historyBreadthsForm = screen.getByTestId("history-breadths-form");
        expect(historyBreadthsForm).toBeInTheDocument();
        historyBreadthsForm.click();

        const breadths = course.breadth;
        const expectedBreadths =
            "University: ; A&S:  History & Cultural Change";
        expect(breadths === expectedBreadths);
    });
    test("There is a form named Social and Behavorial Sciences", () => {
        const scienceBreadthsForm = screen.getByTestId("science-breadths-form");
        expect(scienceBreadthsForm).toBeInTheDocument();
    });
    test("There is a form named Mathematical, Natural Sciences and Technology", () => {
        const mathBreadthsForm = screen.getByTestId("math-breadths-form");
        expect(mathBreadthsForm).toBeInTheDocument();
    });*/
    test("There is a form named Descr that changes the course description when edited by the user", () => {
        const descriptionForm = screen.getByTestId("description-form");

        expect(screen.getByDisplayValue(courseTest.descr)).toBeInTheDocument();
        descriptionForm.click();
        userEvent.clear(descriptionForm);
        userEvent.type(descriptionForm, "new value");
        expect(screen.getByDisplayValue("new value")).toBeInTheDocument();
        expect(
            screen.queryByText(
                "Object oriented software design and development through use of an object oriented programming language. Topics include team programming, design patterns, graphical user interfaces, software engineering tools (e.g., integrated development environments, version control, build management, bug tracking, automated testing)."
            )
        ).not.toBeInTheDocument();
    });
});
