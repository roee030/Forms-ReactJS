import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Survey from "./Survey";
import "./Home.css";
export default function Home() {
  const [arrayOfQuestionsAndAnswers, setArrayOfQuestionsAndAnswers] = useState(
    []
  );
  useEffect(() => {
    if (localStorage.getItem("ArrayOfQuestionsAndAnswers") == null) {
      localStorage.setItem(
        "ArrayOfQuestionsAndAnswers",
        JSON.stringify(arrayOfQuestionsAndAnswers)
      );
    }
    setArrayOfQuestionsAndAnswers(
      JSON.parse(localStorage.getItem("ArrayOfQuestionsAndAnswers"))
    );
  }, []);

  const surveyHomeDisplayCard = arrayOfQuestionsAndAnswers.map((element) => {
    return (
      <div className="survey-wraper">
        <Link to={`survey/${element.id}`} className="survey-card-wraper">
          {element.title}
        </Link>
      </div>
    );
  });

  return <div>{surveyHomeDisplayCard}</div>;
}
