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
  const handleClick = () => {
    for (let index = 0; index < props.survey.Questions.length; index++) {
      if (answerArray[index] == undefined) {
        answerArray[index] = "empty";
      }
      if (props.survey.Answers[index] !== undefined) {
        props.survey.Answers[index] = [
          ...props.survey.Answers[index],
          answerArray[index],
        ];
      }
      if (props.survey.Answers[index] == undefined) {
        props.survey.Answers[index] = [...[answerArray[index]]];
      }
      const tempArrayOfObjFromLocalStorage = JSON.parse(
        localStorage.getItem("ArrayOfQuestionsAndAnswers")
      );
      let indexNeedToChange = -1;
      tempArrayOfObjFromLocalStorage.forEach((element, index) => {
        if (element.id == props.survey.id) indexNeedToChange = index;
      });
      console.log(props.survey);
      tempArrayOfObjFromLocalStorage[indexNeedToChange] = props.survey;
      localStorage.setItem(
        "ArrayOfQuestionsAndAnswers",
        JSON.stringify(tempArrayOfObjFromLocalStorage)
      );
      console.log(answerArray[index]);
      //   answerArrayFromObj.push(answerArray[index]);
      //   props.survey.Answers[index].push([answerArray[index]]);
    }
  };
  console.log(answerArray);
  return (
    <div className="displayFormSurveyWraper">
      <form className="displayFormSurvey">
        <h1>{props.survey.title}</h1>
        <h1>{props.survey.subtitle}</h1>
        {FormSurvey}
        <button
          onClick={(e) => (
            e.preventDefault(), handleClick(), console.log(props.survey)
          )}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
