import React from 'react'
import axios from "axios";
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            value: '',
            result: '',
            isLoaded: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);       
    }    

    handleChange(event){
        this.setState({value: event.target.value});        
    }

    async handleSubmit(event){         
        event.preventDefault(); 
        await axios.get(`http://localhost:3000/api/discussions/${this.state.value}`).then(
            Response => {               
                if(Response.status === 200){
                    this.setState({isLoaded: true});
                    const res = Response.data;
                    this.setState({result: res});
                }
            }
        )
    }

    get renderResponse (){
        if(this.state.isLoaded){
            this.state.result.data.children.map(
                (u) => {
                    return(
                       <div>
                            <ul>
                                <li>{u.data.author}</li>
                                <li>{u.data.title}</li>
                                <li>{u.data.selftext}</li>
                            </ul>
                        </div>
                    )
                }
            )           
        } else {
            return(
                <div>
                    <p></p>
                </div>
            )
        }
  
    }

    render(){
        return (
            <div>
                <h1>Post</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" value = {this.state.value} onChange = {this.handleChange}></input>
                    <input type="submit" value="Search"></input>
                </form> 
                <p>{this.renderResponse}</p>                   
            </div>
        );        
    }   
}
