import React, { Component } from "react";
import { Tweet } from "react-twitter-widgets";
//import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import TweetEmbed from "react-tweet-embed";
import { Toast, ToastHeader, ToastBody, Button } from "reactstrap";

class TweetdisplayComponent extends Component {
  render() {
    let sentiment = " ";
    let colour = " ";
    if (this.props.sentiment == "positive") {
      sentiment = "positive sentiment";
      colour = "success";
    } else {
      sentiment = "negative sentiment";
      colour = "danger";
    }

    return (
      <div>
        <Toast width="50">
          <ToastHeader icon={colour} width="50">
            {" "}
            {sentiment}{" "}
            <Button
              type="submit"
              color="secondary"
              onClick={() =>
                this.props.onClick(this.props.country, this.props.date)
              }
            >
              Tweet Visual
            </Button>{" "}
          </ToastHeader>
          <ToastBody max-width>
            <TweetEmbed
              id={this.props.id}
              options={{ cards: "hidden", align: "center", width: "550px" }}
              hide_media="true"
              hide_thread="true"
              align="center"
            />
          </ToastBody>
        </Toast>
      </div>
    );
  }
}
export default TweetdisplayComponent;
