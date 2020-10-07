import React, { useState } from "react";
import Title from "./Title";
import OpenQuestion from "./OpenQuestion";
import AddQestion from "./AddQuestion";
import LinearQuestion from "./LinearQuestion";
import RadioQuestion from "./RadioQuestion";
import SaveSurvey from "./SaveSurvey";
// var shortid = require("shortid");
// shortid.generate()
export default function CreateSurvey() {
  const [formQuestionsArray, setFormQuestionsArray] = useState({
    title: "",
    subtitle: "",
    Questions: [],
  });
  const [formQuestionsDisplay, setFormQuestionsDisplay] = useState([]);
  //get the title and subtitle and add to the survey object
  const addTitleToSurveyObject = (obj) => {
    formQuestionsArray.title = obj.title;
    formQuestionsArray.subtitle = obj.subtitle;
    console.log(formQuestionsArray);
  };
  //get the question ,level1label and level5label and add to the survey object inside the linear arr
  const addLinearQuestionToSurveyObject = (obj) => {
    formQuestionsArray.LinearQuestions.push({
      question: obj.linearQuestion,
      level1label: obj.level1label,
      level5label: obj.level1label,
    });
  };

  const addQuestionToForm = (value) => {
    switch (value) {
      case "1":
        setFormQuestionsDisplay((formQuestionsDisplay) => [
          ...formQuestionsDisplay,
          "OpenQuestion",
        ]);
        break;
      case "2":
        setFormQuestionsDisplay((formQuestionsDisplay) => [
          ...formQuestionsDisplay,
          "LinearQuestion",
        ]);

        break;
      case "3":
        setFormQuestionsDisplay((formQuestionsDisplay) => [
          ...formQuestionsDisplay,
          "RadioQuestion",
        ]);
        break;
    }
  };
  const AddQuestionToArray = (obj, index) => {
    let tempArr = formQuestionsArray;
    tempArr.Questions[index] = obj;
    setFormQuestionsArray(tempArr);
  };
  const displayForm = formQuestionsDisplay.map((element, index) => {
    switch (element) {
      case "OpenQuestion":
        return (
          <OpenQuestion
            key={index}
            index={index}
            AddQuestionToArray={AddQuestionToArray}
          />
        );
        break;
      case "LinearQuestion":
        return (
          <LinearQuestion
            key={index}
            addLinearQuestionToSurveyObject={addLinearQuestionToSurveyObject}
          />
        );

        break;
      case "RadioQuestion":
        return <RadioQuestion key={index} />;
        break;
    }
  });

  console.log(formQuestionsArray);
  return (
    <div>
      <Title addTitleToSurveyObject={addTitleToSurveyObject} />
      {displayForm}
      <AddQestion addQuestionToForm={addQuestionToForm} />
      <SaveSurvey />
    </div>
  );
}
