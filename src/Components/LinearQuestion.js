import React, { useState, useRef } from "react";
import { MDBInput, MDBIcon } from "mdbreact";
import "./LinearQuestion.css";
export default function LinearQuestion({ AddQuestionToArray, index }) {
  const [linearQuestion, setLinearQuestion] = useState("");
  const [level1label, setLevel1label] = useState("");
  const [level5label, setLevel5label] = useState("");
  AddQuestionToArray(
    { type: "linear", linearQuestion, level1label, level5label },
    index
  );
  return (
    <div className="linear-question-wraper">
      <div className="linear-question-form">
        <MDBInput
          label="Linear Question 1 to 5"
          onChange={(e) => setLinearQuestion(e.target.value)}
        />
        <MDBInput
          label="1 Label (optional)"
          onChange={(e) => setLevel1label(e.target.value)}
        />
        <MDBInput
          label="5 Label (optional)"
          onChange={(e) => setLevel5label(e.target.value)}
        />
        <MDBIcon far icon="trash-alt" />
      </div>
    </div>
  );
}
