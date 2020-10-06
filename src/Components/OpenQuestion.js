import React from "react";
import { MDBInput, MDBIcon } from "mdbreact";
import "./OpenQuestion.css";
export default function OpenQuestion() {
  return (
    <div className="open-question-wraper">
      <div className="open-question-form">
        <MDBInput label="Open question" />
        <MDBIcon far icon="trash-alt" />
      </div>
    </div>
  );
}
