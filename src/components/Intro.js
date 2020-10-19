import React, { Component } from 'react';
import People from './People';

export default class Intro extends Component{
    constructor(props){
        super(props);
        this.state = {            
            url: "http://localhost:8080/",            
            id: 0,
            inputLinkClicked: false,
        }
    }

    isNumeric = (value) => {
        return /^\d+$/.test(value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({inputLinkClicked: false});
        this.setState({  
            url: "http://localhost:8080/"+this.state.id,                  
            inputLinkClicked: true
        })                                
    }        


    handleInputChange = (event) => {    
        event.preventDefault(); 
        this.setState({id:0});      
        if(this.isNumeric(event.target.value)){            
            var setid = parseInt(event.target.value);
            if(setid>0 && setid<84){
                this.setState({id:setid,inputLinkClicked: false});
            }                     
        }    
    }

    render(){
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label htmlFor="id">Character ID</label>
                        <input placeholder="Id" id="id" name="id" type="text" onChange={this.handleInputChange}/>
                    </div>
                    {
                        this.state.id>0?
                        <div className="row">
                            <button className="waves-effect waves-light btn" type="submit" name="action">Check</button>
                        </div>
                        :
                        ""
                    }                    
                </form>                
                {
                    this.state.inputLinkClicked?<People url={this.state.url}/>:<div></div>
                }                 
            </div>
        )
    }
}