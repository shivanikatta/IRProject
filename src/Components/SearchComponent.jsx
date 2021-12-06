import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col ,Row} from 'reactstrap';
import TweetdisplayComponent from './TweetdisplayComponent';
import FilterComponent from './FilterComponent';
import LinegraphComponent from './LinegraphComponent';



class SearchComponent extends Component{
    state = {
        query:null,
        searchresult:null
       
    }

  

    handleClick = () => {
        //do something
        console.log("on click button ",this.state);
        var obj = this.getResponse()
      }

    async getResponse()
{
    //console.log("id in getresponse for polling",this.state.name.sub_id);
    //console.log("id in getresponse for polling",this.props.subselected.sub_id);
    var url = "http://3.143.229.250:5000/search?query="+this.state.query;
    const res = await fetch (url)
    console.log(url)
    const ret = await res.json()
    console.log("Inside Get Response :", ret)
    this.setState({ searchresult: ret })
    return ret
}

   
      
      handleChange = (e) => {    
        this.setState({
          [e.target.name]: e.target.value
        })
        console.log("in handlechange ",this.state);
      }

       

    render(){
        // <input type="text" name="query" onChange={this.handleChange}/>
        // <button type="submit" onClick={this.handleClick}/>
        console.log("In render of search component");
        console.log("searchresult in render",this.state.searchresult);
        if(this.state.searchresult){
        return(
            <div>

<div className="container">
            <div className="col-12 col-md-9">
 
                <FormGroup row>
                    <Col md={10}>
                    <Input type="text" id="search" name="query" onChange={this.handleChange}/>
                    </Col>                             
                </FormGroup>                        
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}}>
                    <Button type="submit" color="primary" onClick={ () => this.handleClick()}> Search </Button>
                    </Col>          
                </FormGroup>
             </div>
             </div>
             <div>
            <Row xs="4">
            <Col className="bg-light border" >
                <FilterComponent/>
            </Col>
            <Col className="bg-light border" >
                {this.state.searchresult.tweets.map(tw => <TweetdisplayComponent key = {tw.id} id={tw.id} sentiment={tw.sentiment}/>)}
                
            </Col>
            <Col className="bg-light border" >
                <LinegraphComponent/>
            </Col>
          </Row>
          </div>
             </div>
        );
        }
        else{
            return(
            <div>

            <div className="container">
            <div className="col-12 col-md-9">
 
                <FormGroup row>
                    <Col md={10}>
                    <Input type="text" id="search" name="query" placeholder="Search" onChange={this.handleChange}/>
                    </Col>                             
                </FormGroup>                        
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}}>
                    <Button type="submit" color="primary" onClick={ () => this.handleClick()}> Search </Button>
                    </Col>          
                </FormGroup>
             </div>
             </div>
             <div>
            <Row xs="4">
            <Col className="bg-light border" >
                <FilterComponent/>
            </Col>
          </Row>
          </div>
             </div>
            );
            
        }
    }

    
        
    //<TweetdataComponent tweetarray ={this.state.searchresult}/>


//     handleClick(){
       
//         console.log('You clicked submit.');
//         //do something
//         console.log("on click button ",this.state);
//         var obj = this.getResponse()
//       }

//     async getResponse()
// {
//     //console.log("id in getresponse for polling",this.state.name.sub_id);
//     //console.log("id in getresponse for polling",this.props.subselected.sub_id);
//     var url = "http://3.143.229.250:5000/search?query=vaccine";
//     const res = await fetch (url)
//     console.log(url)
//     const ret = await res.json()
//     console.log("Inside Get Response :", ret)
//     this.setState({ searchresult: ret })
//     return ret
// }
}

export default SearchComponent;