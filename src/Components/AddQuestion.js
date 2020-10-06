import React from "react";
import { MDBSelect, MDBIcon } from "mdbreact";
import "./AddQuestion.css";
export default function AddQuestion() {
  return (
    <div className="add-question-wraper">
      <div className="add-question-form">
        <MDBIcon className="plus-btn" far icon="plus-square" />
        <select className="browser-default custom-select">
          <option value="1">Open Question</option>
          <option value="2">Linear Question</option>
          <option value="3">Radio Question</option>
        </select>
      </div>
    </div>
  );
}
