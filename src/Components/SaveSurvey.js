import React from "react";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import "./SaveSurvey.css";
var shortid = require("shortid");
// shortid.generate()
export default function SaveSurvey({ formQuestionsArray }) {
  return (
    <div className="submit-form-wraper">
      <Link
        to="/"
        className="send-form"
        onClick={() =>
          localStorage.setItem(
            "formQuestionsArray",
            JSON.stringify(formQuestionsArray)
          )
        }
      >
        Submit
        <MDBIcon far icon="check-square" />
      </Link>
    </div>
  );
}
