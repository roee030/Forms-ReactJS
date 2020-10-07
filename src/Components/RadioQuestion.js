import React from "react";
import { MDBContainer, MDBInput } from "mdbreact";
import "./RadioQuestion.css";
export default function RadioQuestion() {
  return (
    <div className="radio-question-wraper">
      <div className="radio-question-form">
        <MDBInput label="Question" />
        <div className="radio-question-option">
          <MDBInput type="radio" />
          <MDBInput label="Option" />
        </div>
        <div className="radio-question-option">
          <MDBInput type="radio" />
          <MDBInput label="Option" />
        </div>
        <div className="radio-question-option">
          <MDBInput type="radio" />
          <MDBInput label="Option" />
        </div>
        <div className="radio-question-option">
          <MDBInput type="radio" />
          <MDBInput label="Option" />
        </div>
      </div>
    </div>
  );
}
