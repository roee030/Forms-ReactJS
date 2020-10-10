import React, { useState, useEffect } from "react";
import DisplayFormSurvey from "./DisplayFormSurvey";
import DisplaySurveyAnswer from "./DisplaySurveyAnswer";
export default function Survey(props) {
  useEffect(() => {
    const mySurveyArray = JSON.parse(
      localStorage.getItem("ArrayOfQuestionsAndAnswers")
    );
    const mySurvey = mySurveyArray.filter(
      (element) => element.id == props.match.params.id
    );
    console.log(mySurvey);
  }, []);
  return <div></div>;
}
