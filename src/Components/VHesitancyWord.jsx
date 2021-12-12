import React from "react";
import ReactWordcloud from "react-wordcloud";
import VHesitancyWordcount from "./VHesitancyWordcount.json";

const words = VHesitancyWordcount;

function VHesitancyWord() {
  return (
    <div>
      <h3>Vaccine Persuasion Word Cloud</h3>
      <ReactWordcloud
        words={words}
        options={{
          fontFamily: "courier new",
          fontSizes: [20, 60],
        }}
        size={[700, 600]}
      />
    </div>
  );
}

export default VHesitancyWord;
