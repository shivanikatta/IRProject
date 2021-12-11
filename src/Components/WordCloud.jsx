import React from "react";
import ReactWordcloud from "react-wordcloud";

const words = [
  {
    text: "told",
    value: 64,
  },
  {
    text: "mistake",
    value: 11,
  },
  {
    text: "thought",
    value: 16,
  },
  {
    text: "bad",
    value: 17,
  },
  {
    text: "told",
    value: 100,
  },
  {
    text: "mistake",
    value: 150,
  },
  {
    text: "thought",
    value: 200,
  },
  {
    text: "bad",
    value: 55,
  },
];

function WordCloud() {
  return <ReactWordcloud words={words} />;
}

export default WordCloud;
