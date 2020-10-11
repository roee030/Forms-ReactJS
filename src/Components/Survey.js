import React, { useState, useEffect } from "react";
import DisplayFormSurvey from "./DisplayFormSurvey";
import DisplaySurveyAnswer from "./DisplaySurveyAnswer";
import "./Survey.css";
export default function Survey(props) {
  const [Survey, setSurvey] = useState();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const mySurveyArray = JSON.parse(
      localStorage.getItem("ArrayOfQuestionsAndAnswers")
    );
    const mySurvey = mySurveyArray.filter(
      (element) => element.id == props.match.params.id
    );
    setSurvey(mySurvey[0]);
  }, []);

  return (
    <div>
      <div className="toggle">
        <button onClick={() => setToggle(!toggle)}>Survey</button>
        <button onClick={() => setToggle(!toggle)}>Answer</button>
      </div>
      {Survey && toggle ? <DisplaySurveyAnswer survey={Survey} /> : ""}
      {Survey && !toggle ? <DisplayFormSurvey survey={Survey} /> : ""}
    </div>
  );
}
