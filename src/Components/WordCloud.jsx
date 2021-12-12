import React from "react";
import ReactWordcloud from "react-wordcloud";
import globalwords from "./globalwords.json";

const words = globalwords;

function WordCloud() {
  return (
    <div>
      <h1>Global Word Cloud</h1>
      <ReactWordcloud
        words={words}
        options={{
          fontFamily: "courier new",
          fontSizes: [20, 60],
        }}
        size={[800, 700]}
      />
    </div>
  );
}

export default WordCloud;
