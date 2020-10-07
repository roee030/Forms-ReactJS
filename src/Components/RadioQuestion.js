import React, { useState } from "react";
import { MDBContainer, MDBIcon, MDBInput } from "mdbreact";
import "./RadioQuestion.css";
export default function RadioQuestion() {
  const [radioQuestion, setRadiorQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

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
        <MDBIcon far icon="trash-alt" />
      </div>
    </div>
  );
}
