import React from "react";
import { render, screen } from "@testing-library/react";
import { DegreeRequirement } from "../Components/DegreeRequirement";
import Data from "../Data/catalog.json";
import { course, section, courseJSON } from "../Interfaces/Courses";
import { SystemsAndNetworks } from "../Concentrations/SystemsAndNetworks";
import { AI } from "../Concentrations/AI";
import { Cybersecurity } from "../Concentrations/Cybersecurity";
import { HPC } from "../Concentrations/HPC";
import { Theory } from "../Concentrations/Theory";
import { Traditional } from "../Concentrations/Traditional";
import { DataScience } from "../Concentrations/DataScience";
import { Bioinformatics } from "../Concentrations/Bioinformatics";

const courseObjects: course[] = [];
//const [course, setCourse] = useState<course[]>(loadedData);
const StringData: string = JSON.stringify(Data);
const DataObjects: section[] = Object.values(JSON.parse(StringData));

DataObjects.map((section: section) => {
    const courseString: string = JSON.stringify(section);
    const courseList: courseJSON[] = Object.values(JSON.parse(courseString));
    courseList.map((course: courseJSON) => {
        const courseTemp: course = {
            id: course.code,
            code: course.code,
            name: course.name,
            descr: course.descr,
            credits: course.credits,
            preReq: course.preReq,
            restrict: course.restrict,
            breadth: course.breadth,
            typ: course.typ
        };
        courseObjects.push(courseTemp);
    });
});

const setDegreeRequirement = () => {
    return;
};
describe("Degree Requirement Component tests", () => {
    beforeEach(() =>
        render(
            <DegreeRequirement
                planCourses={[]}
                concentration="Systems and Networks"
                setDegreeReq={setDegreeRequirement}
            ></DegreeRequirement>
        )
    );

    test("There is a back button", () => {
        const back = screen.getByRole("button", {
            name: /Back/i
        });
        expect(back).toBeInTheDocument();
    });

    test("Clicking the back button exits out of the popup", () => {
        const back = screen.getByRole("button", {
            name: /Back/i
        });
        expect(back.click()).not.toBeTruthy();
    });
});
describe("Concentration Components tests with no courses added", () => {
    test("Correct courses are shown in Systems and Networks", () => {
        render(<SystemsAndNetworks planCourses={[]}></SystemsAndNetworks>);
        const coreList: HTMLElement = screen.getByTestId("SAN-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 108CISC 181CISC 210CISC 220CISC 260CISC 275CISC 303CISC 320MATH 210MATH 241"
        );
    });
    test("Correct courses are shown in AI", () => {
        render(<AI planCourses={[]}></AI>);
        const coreList: HTMLElement = screen.getByTestId("AI-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 304 CISC 442 CISC 481 CISC 483 CISC 484"
        );
    });
    test("Correct courses are shown in CyberSec", () => {
        render(<Cybersecurity planCourses={[]}></Cybersecurity>);
        const coreList: HTMLElement = screen.getByTestId("CYB-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 361 CISC 372 CISC 450 CISC 464 CPEG 465 CPEG 494"
        );
    });
    test("Correct courses are shown in HPC", () => {
        render(<HPC planCourses={[]}></HPC>);
        const coreList: HTMLElement = screen.getByTestId("HPC-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 360 CISC 361 CISC 372 CISC 450 CISC 471 MATH 242 MATH 243"
        );
    });
    test("Correct courses are shown in THEORY", () => {
        render(<Theory planCourses={[]}></Theory>);
        const coreList: HTMLElement = screen.getByTestId("THEORY-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 304 CISC 401 MATH 242 MATH 349"
        );
    });
    test("Correct courses are shown in Traditional", () => {
        render(<Traditional planCourses={[]}></Traditional>);
        const coreList: HTMLElement = screen.getByTestId("TRAD-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 108CISC 181CISC 210CISC 220CISC 260CISC 275CISC 303CISC 320CISC 361CISC 372MATH 210MATH 241MATH 242Six " +
                "additional credits of computer science technical electives numbered 301 or above, except for CISC 355, CISC 356, CISC 357, CISC 465, CISC 366 and CISC 466." +
                "Twelve credits in advanced courses in a focus area " +
                "approved by the student's CISC advisor and the CISC Undergraduate Coordinator."
        );
    });
    test("Correct courses are shown in Data Science", () => {
        render(<DataScience planCourses={[]}></DataScience>);
        const coreList: HTMLElement = screen.getByTestId("DATA-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 304 CISC 372 CISC 437 CISC 481 MATH 205 MATH 242 MATH 243 MATH 349"
        );
    });
    test("Correct courses are shown in Bioinformatics", () => {
        render(<Bioinformatics planCourses={[]}></Bioinformatics>);
        const coreList: HTMLElement = screen.getByTestId("BIO-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "BISC 207 BISC 208 BISC 401 CHEM 103 CHEM 133 CHEM 104 CHEM 134 CISC 372 CISC 436 MATH 242 MATH 349"
        );
    });
});
describe("Having the correct courses in planCourses updates the list with a checkmark", () => {
    test("Checkmarked courses are shown in Systems and Neworks", () => {
        render(
            <SystemsAndNetworks
                planCourses={courseObjects}
            ></SystemsAndNetworks>
        );
        const coreList: HTMLElement = screen.getByTestId("SAN-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 108✅ CISC 181✅ CISC 210✅ CISC 220✅ CISC 260✅ CISC 275✅ CISC 303✅ CISC 320✅ MATH 210✅ MATH 241✅"
        );
    });
    test("Checkmarked courses are shown in AI", () => {
        render(<AI planCourses={courseObjects}></AI>);
        const coreList: HTMLElement = screen.getByTestId("AI-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 304✅ CISC 442✅ CISC 481✅ CISC 483✅ CISC 484✅"
        );
    });
    test("Checkmarked courses are shown in CyberSec", () => {
        render(<Cybersecurity planCourses={courseObjects}></Cybersecurity>);
        const coreList: HTMLElement = screen.getByTestId("CYB-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 361✅ CISC 372✅ CISC 450✅ CISC 464✅ CPEG 465✅ CPEG 494✅"
        );
    });
    test("Checkmarked courses are shown in HPC", () => {
        render(<HPC planCourses={courseObjects}></HPC>);
        const coreList: HTMLElement = screen.getByTestId("HPC-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 360✅ CISC 361✅ CISC 372✅ CISC 450✅ CISC 471✅ MATH 242✅ MATH 243✅"
        );
    });
    test("Checkmarked courses are shown in Theory", () => {
        render(<Theory planCourses={courseObjects}></Theory>);
        const coreList: HTMLElement = screen.getByTestId("THEORY-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 304✅ CISC 401✅ MATH 242✅ MATH 349✅"
        );
    });
    test("Checkmarked courses are shown in Traditional", () => {
        render(<Traditional planCourses={courseObjects}></Traditional>);
        const coreList: HTMLElement = screen.getByTestId("TRAD-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 108✅ CISC 181✅ CISC 210✅ CISC 220✅ CISC 260✅ CISC 275✅ CISC 303✅ CISC 320✅ CISC 361✅ CISC 372✅ " +
                "MATH 210✅ MATH 241✅ MATH 242✅ Six additional credits of computer science technical electives numbered 301 or above, " +
                "except for CISC 355, CISC 356, CISC 357, CISC 465, CISC 366 and CISC 466.Twelve credits in advanced courses in a focus area approved by the student's CISC advisor and the CISC Undergraduate Coordinator."
        );
    });
    test("Checkmarked courses are shown in Data Science", () => {
        render(<DataScience planCourses={courseObjects}></DataScience>);
        const coreList: HTMLElement = screen.getByTestId("DATA-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "CISC 304✅ CISC 372✅ CISC 437✅ CISC 481✅ MATH 205✅ MATH 242✅ MATH 243✅ MATH 349✅"
        );
    });
    test("Checkmarked courses are shown in Bioinformatics", () => {
        render(<Bioinformatics planCourses={courseObjects}></Bioinformatics>);
        const coreList: HTMLElement = screen.getByTestId("BIO-core");
        expect(coreList).toBeInTheDocument();
        expect(coreList).toHaveTextContent(
            "BISC 207✅ BISC 208✅ BISC 401✅ CHEM 103✅ CHEM 133✅ CHEM 104✅ CHEM 134✅ CISC 372✅ CISC 436✅ MATH 242✅ MATH 349✅"
        );
    });
});
