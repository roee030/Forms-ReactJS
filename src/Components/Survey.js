import React, { useState, useEffect } from "react";
import DisplayFormSurvey from "./DisplayFormSurvey";
import DisplaySurveyAnswer from "./DisplaySurveyAnswer";
export default function Survey(props) {
  const [Survey, setSurvey] = useState();
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
      {Survey ? <DisplaySurveyAnswer survey={Survey} /> : ""}
      {Survey ? <DisplayFormSurvey survey={Survey} /> : ""}
    </div>
  );
}
