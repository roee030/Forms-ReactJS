import React, { useState } from "react";
import { MDBInput, MDBIcon } from "mdbreact";
import "./OpenQuestion.css";
var shortid = require("shortid");
// shortid.generate()
export default function OpenQuestion({ index, AddQuestionToArray }) {
  const [openQuestion, setOpenQuestion] = useState("");
  AddQuestionToArray(
    { type: "open", openQuestion, id: shortid.generate() },
    index
  );
  //TODO: check why its get the question without the last character
  return (
    <div className="open-question-wraper">
      <div className="open-question-form">
        <MDBInput
          label="Open question"
          onChange={(e) => {
            setOpenQuestion(e.target.value);
          }}
        />
        <MDBIcon far icon="trash-alt" />
      </div>
    </div>
  );
}
