import React from "react";
import Title from "./Title";
import OpenQuestion from "./OpenQuestion";
import AddQestion from "./AddQuestion";
import LinearQuestion from "./LinearQuestion";
import RadioQuestion from "./RadioQuestion";
export default function CreateSurvey() {
  return (
    <div>
      <Title />
      <OpenQuestion />
      <LinearQuestion />
      <RadioQuestion />
      <AddQestion />
    </div>
  );
}
