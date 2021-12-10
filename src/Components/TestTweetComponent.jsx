import React, { Component } from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  Toast,
  ToastHeader,
  ToastBody,
  Row,
  Col,
} from "reactstrap";
import { FcCalendar } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

class TestTweetComponent extends Component {
  render() {
    let sentiment = " ";
    let colour = " ";
    let verified = " ";
    if (this.props.sentiment == "Positive") {
      sentiment = "positive sentiment";
      colour = "success";
    } else if (this.props.sentiment == "Negative") {
      sentiment = "negative sentiment";
      colour = "danger";
    } else {
      sentiment = "neutral sentiment";
      colour = "secondary";
    }
    console.log("props in test tweet component", this.props);
    if (this.props.verified == "True") {
      verified = <FcApproval xs="auto" size={25} />;
    }
    return (
      <div>
        <Toast width="50">
          <ToastHeader icon={colour} width="50">
            {" "}
            {sentiment}{" "}
            <Button
              type="submit"
              color={colour}
              onClick={() =>
                this.props.onClick(this.props.country, this.props.date)
              }
            >
              Tweet Visual
            </Button>{" "}
            {verified}
          </ToastHeader>
          <ToastBody max-width>
            <Card>
              <CardBody>
                <CardTitle tag="h5">{this.props.tweet}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {this.props.poiName}
                </CardSubtitle>
                <CardText>
                  <Row>
                    <Col xs="auto">
                      <FcCalendar size={20} />
                    </Col>
                    <Col>{this.props.date}</Col>
                  </Row>
                  <Row>
                    <Col xs="auto">
                      <FcGlobe size={20} />
                    </Col>
                    <Col>{this.props.country}</Col>
                  </Row>
                </CardText>
              </CardBody>
            </Card>
          </ToastBody>
        </Toast>
      </div>
    );
  }
}

export default TestTweetComponent;
