import React, { Component,useState } from 'react';
import TweetdisplayComponent from './TweetdisplayComponent';

class TweetdataComponent extends Component{

    state = {
        tweetarray : [{id:'511181794914627584',senti:'success'},{id:'841418541026877441',senti:'danger'},{id:'511181794914627584',senti:'success'},{id:'841418541026877441',senti:'danger'}]
    }

    render(){
        return(
            <div>
                {this.state.tweetarray.map(tw => <TweetdisplayComponent key = {tw.id} id={tw.id} senti={tw.senti}/>)}
            </div>
        );
    }
}

export default TweetdataComponent;