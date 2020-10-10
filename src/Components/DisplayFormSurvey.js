import React, { useState, useEffect } from "react";
import { MDBInput, MDBFormInline } from "mdbreact";
import "./DisplayFormSurvey.css";
export default function DisplayFormSurvey(props) {
  const [answerArray, setAnswerArray] = useState([]);
  console.log(props);
  const onClick = (nr, index) => {
    console.log(index);
    const tempArray = answerArray;
    tempArray[index] = nr;
    setAnswerArray(tempArray);
    console.log(answerArray);
  };

  const FormSurvey = props.survey.Questions.map((q, index) => {
    if (q.type == "open") {
      return (
        <div className="question">
          <p>{q.openQuestion}</p>
          <input
            type="text"
            onChange={(e) => {
              const tempArray = answerArray;
              tempArray[index] = e.target.value;
              setAnswerArray(tempArray);
            }}
          ></input>
        </div>
      );
    }
    if (q.type == "linear") {
      return (
        <div className="question">
          <p>{q.linearQuestion}</p>
          <fieldset id={`group${index}`}>
            <input
              type="radio"
              name={`group${index}`}
              value={1}
              onClick={(e) => {
                onClick(e.currentTarget.value, index);
              }}
            />
            1
            <input
              type="radio"
              name={`group${index}`}
              value={2}
              onClick={(e) => {
                onClick(e.currentTarget.value, index);
              }}
            />
            2
            <input
              type="radio"
              name={`group${index}`}
              value={3}
              onClick={(e) => {
                onClick(e.currentTarget.value, index);
              }}
            />
            3
            <input
              type="radio"
              name={`group${index}`}
              value={4}
              onClick={(e) => {
                onClick(e.currentTarget.value, index);
              }}
            />
            4
            <input
              type="radio"
              name={`group${index}`}
              value={5}
              onClick={(e) => {
                onClick(e.currentTarget.value, index);
              }}
            />
            5
          </fieldset>
        </div>
      );
    }
    if (q.type == "radio") {
      return (
        <form className="question">
          <p>{q.radioQuestion}</p>
          <fieldset id={`group${index}`}>
            <input
              type="radio"
              name={`group${index}`}
              value={1}
              onClick={(e) => {
                onClick(e.currentTarget.value, index);
              }}
            />
            {q.option1}
            <br></br>
            <input
              type="radio"
              name={`group${index}`}
              value={2}
              onClick={(e) => {
                onClick(e.currentTarget.value, index);
              }}
            />{" "}
            {q.option2}
            <br></br>
            <input
              type="radio"
              name={`group${index}`}
              value={3}
              onClick={(e) => {
                onClick(e.currentTarget.value, index);
              }}
            />{" "}
            {q.option3}
            <br></br>
            <input
              type="radio"
              name={`group${index}`}
              value={4}
              onClick={(e) => {
                onClick(e.currentTarget.value, index);
              }}
            />{" "}
            {q.option4}
            <br></br>
          </fieldset>
        </form>
      );
    }
  });
  const handleClick = (e) => {
    e.preventDefault();
  };
  console.log(answerArray);
  return (
    <div className="displayFormSurveyWraper">
      <form className="displayFormSurvey">
        <h1>{props.survey.title}</h1>
        <h1>{props.survey.subtitle}</h1>
        {FormSurvey}
        <button onClick={(e) => (e.preventDefault(), console.log(answerArray))}>
          Submit
        </button>
      </form>
    </div>
  );
}
