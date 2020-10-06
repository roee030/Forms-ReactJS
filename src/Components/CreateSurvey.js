import React from "react";
import Title from "./Title";
import OpenQuestion from "./OpenQuestion";
import AddQestion from "./AddQuestion";
import LinearQuestion from "./LinearQuestion";
export default function CreateSurvey() {
  return (
    <div>
      <Title />
      <OpenQuestion />
      <LinearQuestion />
      <AddQestion />
    </div>
  );
}
