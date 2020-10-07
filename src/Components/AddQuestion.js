import React, { useState } from "react";
import { MDBSelect, MDBIcon } from "mdbreact";
import "./AddQuestion.css";
export default function AddQuestion({ addQuestionToForm }) {
  const [typeOfQuestions, setTypeOfQuestions] = useState("1");

  return (
    <div className="add-question-wraper">
      <div className="add-question-form">
        <MDBIcon
          onClick={() => {
            addQuestionToForm(typeOfQuestions);
          }}
          className="plus-btn"
          far
          icon="plus-square"
        />
        <select
          onChange={(e) => setTypeOfQuestions(e.target.value)}
          className="browser-default custom-select"
        >
          <option value="1">Open Question</option>
          <option value="2">Linear Question</option>
          <option value="3">Radio Question</option>
        </select>
      </div>
    </div>
  );
}
