import React, { useState } from "react";
import { MDBContainer, MDBIcon, MDBInput } from "mdbreact";
import "./RadioQuestion.css";
export default function RadioQuestion({ AddQuestionToArray, index }) {
  const [radioQuestion, setRadiorQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  AddQuestionToArray(
    { type: "radio", radioQuestion, option1, option2, option3, option4 },
    index
  );

  return (
    <div className="radio-question-wraper">
      <div className="radio-question-form">
        <MDBInput
          label="Question"
          onChange={(e) => setRadiorQuestion(e.target.value)}
        />
        <div className="radio-question-option">
          <MDBInput
            label="Option"
            onChange={(e) => setOption1(e.target.value)}
          />
        </div>
        <div className="radio-question-option">
          <MDBInput
            label="Option"
            onChange={(e) => setOption2(e.target.value)}
          />
        </div>
        <div className="radio-question-option">
          <MDBInput
            label="Option"
            onChange={(e) => setOption3(e.target.value)}
          />
        </div>
        <div className="radio-question-option">
          <MDBInput
            label="Option"
            onChange={(e) => setOption4(e.target.value)}
          />
        </div>
        <MDBIcon far icon="trash-alt" />
      </div>
    </div>
  );
}
