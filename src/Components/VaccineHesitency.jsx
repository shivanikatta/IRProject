import React, { Component } from "react";
import { Chart } from "react-google-charts";

class VaccineHesitency extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Top 10 Vaccine Hesitancy Tweets</h3>
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
              "India",
              "2021-09-21",
              "@HHSGov @US_FDA What a joke people wake up this is one giant lie it’s poison the vaccine is more harmful that the Covid it’s self 99.7 % survival rate , unless you take the vaccine then well there taking no responsibility ever ask why? Here’s why follow the money https://t.co/xzwwjsjgmc",
              "1440431126426767361",
            ],
            [
              "Usa",
              "2021-09-23",
              "@kalliekriel If it does not prevent illness- it is not a vaccine…\nIf the vaccine works, then the vaccinated has nothing to fear from the unvaccinated . Freedom is paramount- ask the Boer ancestors.",
              "1440883554930544641",
            ],
            [
              "Usa",
              "2021-09-22",
              "@Coqui6190 @davidfrum Some of us have natural antibodies, we don't need the shot. We have higher immunity than either vaccine. 13 months now still testing safe. Fear fills your thought with irrationality.",
              "1440769950214340610",
            ],
            [
              "India",
              "2021-09-22",
              "@VP What are the side effects of vaccine?",
              "1440783914931421187",
            ],
            [
              "Usa",
              "2021-09-23",
              "@LarryTenney @inminivanhell @nickwattcnn Heart problems after the vaccine are side effects.\nhttps://t.co/f97qO5LmlT",
              "1440839411436982276",
            ],
            [
              "Usa",
              "2021-09-23",
              "Is it disinformation for doctors not to make vaccine side effects totally clear to people before being vaccinated?\nhttps://t.co/Ju5CqHTWfP\n #NoLicenseForDisinformation",
              "1440843594022080522",
            ],
            [
              "Usa",
              "2021-09-20",
              "@ayethereohwow @scrowder Novavax will be available soon, it's not mRNA, but rather a virus-like particle vaccine. Less adverse side effects and better reported efficacy and can be stored at warmer temps. Option for many who are worried or skeptical about side effects and lack of long-term studies.",
              "1440045216283594758",
            ],
            [
              "Usa",
              "2021-09-23",
              "@DarrenPlane It is alleged that due to the gene altering mixture of oxcide carbon and Pronognal and other gene altering substance of this jab there is/will be a culling of vaccinated people.\nThe substances indentified in this so called vaccine are not good for humans.",
              "1440844808717684746",
            ],
            [
              "Usa",
              "2021-09-23",
              "@MonicaGandhi9 @jakescottMD Unfortunately, it appears to support idea that Pfizer vaccine isn't so great. Not so much efficacy, esp. for over 50 (which is more than one-3rd of people in US). Add 'waning' &amp; Pfizer really isn't so good.",
              "1440893369421549570",
            ],
            [
              "Usa",
              "2021-09-22",
              "@IAmGMishra Covaxin le lo aap\n\nKam side effects hai iske comparatively covishield",
              "1440590457524813826",
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

export default VaccineHesitency;
