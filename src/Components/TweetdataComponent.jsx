import React, { Component,useState } from 'react';
import TweetdisplayComponent from './TweetdisplayComponent';

class TweetdataComponent extends Component{

    render(){
        console.log("In tweet data", this.props)
        return(
            <div>
                {this.props.tweetarray.tweets.map(tw => <TweetdisplayComponent key = {tw.id} id={tw.id} sentiment={tw.sentiment}/>)}
            </div>
        );
    }
}

export default TweetdataComponent;