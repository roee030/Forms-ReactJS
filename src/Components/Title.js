import React, { useState, useRef } from "react";
import { MDBInput } from "mdbreact";
import "./Title.css";

export default function Title({ addTitleToSurveyObject }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  addTitleToSurveyObject({ title, subtitle });
  return (
    <div className="title-warpper">
      <form className="title-warpper-form">
        <MDBInput label="Headline" onChange={(e) => setTitle(e.target.value)} />
        <MDBInput
          label="Form describe"
          size="sm"
          onChange={(e) => {
            setSubtitle(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
