// You will not need to modify this file

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { PlanProps } from "./Components/PlanContainer";
//import { Plan } from "./Interfaces/Courses";

/**const setPlanElement = () => {
    return;
};
 plan={plan} plans={plans} setPlans={setPlanElement}*/

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
