import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "./DisplaySurveyAnswer.css";
export default function DisplaySurveyAnswer({ survey }) {
  console.log(survey);
  var Data = {};
  var pieData = {};
  const getAllLinearAnswerByIndex = (index) => {
    let dataset = [0, 0, 0, 0, 0];
    Data = {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          label: survey.Questions[index].linearQuestion,
          data: dataset,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
        },
      ],
    };
    try {
      return survey.Answers[index].map((element) => {
        dataset[element - 1]++;
      });
    } catch (e) {
      return;
    }
  };
  const getAllOpenAnswerByIndex = (index) => {
    try {
      return survey.Answers[index].map((element) => {
        console.log(element);
        return <div>{element}</div>;
      });
    } catch (e) {
      return;
    }
  };
  const getAllRadioAnswerByIndex = (index) => {};
  const displayCharts = survey.Questions.map((element, index) => {
    if (element.type == "open") {
      return (
        <div className="openQuestionAndAnswerWarper">
          <div className="questionWarper">{element.openQuestion}</div>
          <div className="answerWraper">{getAllOpenAnswerByIndex(index)}</div>
        </div>
      );
    }
    if (element.type == "linear") {
      return (
        <div className="linearQuestionAndAnswerWarperr chart">
          {getAllLinearAnswerByIndex(index)}
          <Bar
            className="linearQuestionAndAnswerWarper chart"
            data={Data}
          ></Bar>
          {/* <Bar data={Data}></Bar> */}
        </div>
      );
    }
    if (element.type == "radio") {
      return (
        <div className="radioQuestionAndAnswerWarper chart">
          {getAllLinearAnswerByIndex(index)}
          <Pie data={Data}></Pie>
        </div>
      );
    }
  });
  return <div className="Warper">{displayCharts}</div>;
}
