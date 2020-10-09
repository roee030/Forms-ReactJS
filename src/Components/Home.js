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
      localStorage.getItem("ArrayOfQuestionsAndAnswers")
    );
  });
  return <div>Home</div>;
}
