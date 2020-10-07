import React, { useState } from "react";
import Title from "./Title";
import OpenQuestion from "./OpenQuestion";
import AddQestion from "./AddQuestion";
import LinearQuestion from "./LinearQuestion";
import RadioQuestion from "./RadioQuestion";
import SaveSurvey from "./SaveSurvey";
export default function CreateSurvey() {
  const [formQuestionsArray, setFormQuestionsArray] = useState([]);
  const [formQuestionsDisplay, setFormQuestionsDisplay] = useState([]);
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
  const displayForm = formQuestionsDisplay.map((element) => {
    switch (element) {
      case "OpenQuestion":
        return <OpenQuestion />;
        break;
      case "LinearQuestion":
        return <LinearQuestion />;

        break;
      case "RadioQuestion":
        return <RadioQuestion />;
        break;
    }
  });
  return (
    <div>
      <Title />
      {displayForm}
      <AddQestion addQuestionToForm={addQuestionToForm} />
      <SaveSurvey />
    </div>
  );
}
