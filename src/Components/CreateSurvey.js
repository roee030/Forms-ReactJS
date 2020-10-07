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
    OpenQuestions: [],
    LinearQuestions: [],
    RadioQuestions: [],
  });
  const [formQuestionsDisplay, setFormQuestionsDisplay] = useState([]);
  const addTitleToObject = (obj) => {
    formQuestionsArray.title = obj.title;
    formQuestionsArray.subtitle = obj.subtitle;
    console.log(formQuestionsArray);
  };
  //   const addOpenQuestion
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
  const displayForm = formQuestionsDisplay.map((element, index) => {
    switch (element) {
      case "OpenQuestion":
        return <OpenQuestion key={index} />;
        break;
      case "LinearQuestion":
        return <LinearQuestion key={index} />;

        break;
      case "RadioQuestion":
        return <RadioQuestion key={index} />;
        break;
    }
  });
  return (
    <div>
      <Title addTitleToObject={addTitleToObject} />
      {displayForm}
      <AddQestion addQuestionToForm={addQuestionToForm} />
      <SaveSurvey />
    </div>
  );
}
