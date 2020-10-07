import React, { useState } from "react";
import { MDBInput, MDBIcon } from "mdbreact";
import "./OpenQuestion.css";
export default function OpenQuestion({ index, AddQuestionToArray }) {
  const [openQuestion, setOpenQuestion] = useState("");
  //TODO: check why its get the question without the last character
  return (
    <div className="open-question-wraper">
      <div className="open-question-form">
        <MDBInput
          label="Open question"
          onChange={(e) => {
            setOpenQuestion(e.target.value);
            AddQuestionToArray({ type: "open", openQuestion }, index);
          }}
        />
        <MDBIcon far icon="trash-alt" />
      </div>
    </div>
  );
}
