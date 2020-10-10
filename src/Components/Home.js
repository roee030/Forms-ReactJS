import React, { useState, useEffect } from "react";

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
    return <div>{element.title}asd</div>;
  });

  return <div>{surveyHomeDisplayCard}</div>;
}
