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
} from "reactstrap";

class TestTweetComponent extends Component {
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
            <Card>
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {this.props.id}
                </CardSubtitle>
                <CardText>
                  {this.props.date}
                  {this.props.country}
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </ToastBody>
        </Toast>
      </div>
    );
  }
}

export default TestTweetComponent;
