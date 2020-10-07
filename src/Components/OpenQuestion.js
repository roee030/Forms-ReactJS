import React, { useState } from "react";
import { MDBInput, MDBIcon } from "mdbreact";
import "./OpenQuestion.css";
export default function OpenQuestion() {
  const [openQuestion, setOpenQuestion] = useState("");
  return (
    <div className="open-question-wraper">
      <div className="open-question-form">
        <MDBInput
          label="Open question"
          onChange={(e) => setOpenQuestion(e.target.value)}
        />
        <MDBIcon far icon="trash-alt" />
      </div>
    </div>
  );
}
