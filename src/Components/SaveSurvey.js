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
        className="send-form myButton"
        onClick={() => {
          let myAppArray = JSON.parse(
            localStorage.getItem("ArrayOfQuestionsAndAnswers")
          );
          formQuestionsArray.id = shortid.generate();
          myAppArray.push(formQuestionsArray);
          localStorage.setItem(
            "ArrayOfQuestionsAndAnswers",
            JSON.stringify(myAppArray)
          );
        }}
      >
        Submit&nbsp;
        <MDBIcon far icon="check-square" />
      </Link>
    </div>
  );
}
