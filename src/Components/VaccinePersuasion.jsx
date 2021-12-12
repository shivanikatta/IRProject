import React, { Component } from "react";
import { Chart } from "react-google-charts";

class VaccinePersuasion extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Top 10 Vaccine Persuasion Tweets</h3>
        </div>
        <Chart
          width={"1100px"}
          height={"600px"}
          chartType="Table"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "string", label: "country" },
              { type: "string", label: "Tweeted Date " },
              { type: "string", label: "Tweet" },
              { type: "string", label: "Tweet id" },
            ],
            [
              "Usa",
              "2020-12-18",
              "#Vaccines are safe and effective, and any #COVID19 vaccine made available will meet the @US_FDA’s gold standard. Learn more: https://t.co/Bb6iP4IaQl https://t.co/fbHNIDUTZu",
              "1339978750423920642",
            ],
            [
              "Usa",
              "2021-07-30",
              "The vaccine was developed and authorized under a Republican Administration, and it’s been distributed and administered under a Democratic one.\n \nThe vaccines are safe, they are highly effective, and there’s nothing political about them.",
              "1421218596643123200",
            ],
            [
              "Usa",
              "2021-09-16",
              "The vaccine requirements under my COVID plan will cover one hundred million workers. Today, I met with businesses that are leading the way. Because vaccine requirements keep businesses open and workers safe. https://t.co/zx1J2oOOPx",
              "1438300851144122370",
            ],
            [
              "Usa",
              "2021-07-04",
              "Yesterday, I stopped by a mobile vaccine clinic in Las Vegas where members of the community are getting their shots. \n \nWe can end this pandemic. The vaccine is safe, effective, and saves lives. https://t.co/7zO21a3Wfx",
              "1411760939691614210",
            ],
            [
              "Usa",
              "2020-11-13",
              "#Vaccines are safe, effective, and have saved millions of lives. Stay up to date on the development of the #COVID19 #vaccine here: https://t.co/kYUUKs6kiJ. #OWS https://t.co/RpQwMuyGD8",
              "1327305227251421184",
            ],
            [
              "Usa",
              "2021-03-24",
              "All #COVID19 vaccines currently available in the U.S. are safe and effective at preventing COVID-19. To learn more about how @CDCgov measures vaccine effectiveness, visit https://t.co/a3xAKFTuVc. https://t.co/KPGq8HS6zR",
              "1374762189098262531",
            ],
            [
              "Usa",
              "2021-07-19",
              "Recommended childhood vaccinations are an important part of children’s safe return to school. Check with your child’s doctor to make sure they’re protected against vaccine-preventable diseases. https://t.co/6zGZrbWuVI #VaccinesWork https://t.co/ScGMS4NYr3",
              "1417142692446941192",
            ],
            [
              "Usa",
              "2020-10-21",
              "Vaccines are safe, effective, and can protect against diseases such as #COVID19. Any COVID-19 #vaccine made available will meet the @US_FDA’s gold standard. Learn more: https://t.co/Lz3HBZs5lk. (@NIH @NIAIDNews) https://t.co/qPbj7s50ex",
              "1318942943756115968",
            ],
            [
              "Usa",
              "2021-08-09",
              "As of August 9, more than 195.2 million people have received at least one dose of a #COVID19 vaccine. Of those, 166.7 million are fully vaccinated. Getting vaccinated is safe, easy, and free. Make your vaccine appointment today. More: https://t.co/zYLe3H12re. https://t.co/0EPue8DWRJ",
              "1424837922214354948",
            ],
            [
              "Usa",
              "2021-09-10",
              "My message to unvaccinated Americans is this: What more is there to wait for? What more do you need to see?\n\nWe have made the vaccinations free, safe, and convenient. The vaccine has FDA approval. Over 200 million Americans have gotten at least one shot.\n\nDo the right thing.",
              "1436366944886837260",
            ],
          ]}
          options={{
            showRowNumber: true,
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}

export default VaccinePersuasion;
