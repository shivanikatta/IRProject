import React, { Component,useState } from 'react';
import { Tweet } from 'react-twitter-widgets';
//import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import TweetEmbed from 'react-tweet-embed';
import { Toast,ToastHeader,ToastBody} from 'reactstrap';

class TweetdisplayComponent extends Component{

    render(){

        let sentiment= "postive sentiment";
        if(this.props.senti == "danger"){
            sentiment= "negative sentiment";
        }

        return(
        

            <div >
                <Toast width='50'>
                <ToastHeader icon={this.props.senti} width='50'> {sentiment}</ToastHeader>
                <ToastBody max-width>
                <TweetEmbed  id={this.props.id} options={{cards: 'hidden', align : 'center', width: '550px' }} hide_media="true" align = "center"/>
                </ToastBody>
                </Toast>
                
            </div>
        );
    }

    //{this.state.tweetarray.map(tw => <Tweet key = {tw} tweetId = {tw} />)}
    //{this.state.tweetarray.map(tw => <TweetEmbed key = {tw} id={tw} options={{cards: 'hidden', align : 'center', width: '550px' }} hide_media="true" align = "center"/>)}
 
}
 export default TweetdisplayComponent;