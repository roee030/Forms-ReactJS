import React from "react";
import { MDBInput, MDBIcon } from "mdbreact";
import "./LinearQuestion.css";
export default function LinearQuestion() {
  return (
    <div className="linear-question-wraper">
      <div className="linear-question-form">
        <MDBInput label="Linear Question 1 to 5" />
        <MDBInput label="1 Label (optional)" />
        <MDBInput label="5 Label (optional)" />
        <MDBIcon far icon="trash-alt" />
      </div>
    </div>
  );
}
