import React from 'react'
import axios from "axios";

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            value: '',
            children: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }    

    handleChange(event){
        this.setState({value: event.target.value});        
    }

    async handleSubmit(event){         
        event.preventDefault(); 
        axios.get(`'http://localhost:3000/api/discussions/'${this.state.value}`).then(
            Response => {
                
                if(Response.status === 200){
                    this.setState({children: Response.data});
                } else {
                    this.setState({children: []});
                }
            }
        )
    }

    render(){
        return (
            <div>
                <h1>Post</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" value = {this.state.value} onChange = {this.handleChange}></input>
                    <input type="submit" value="Search"></input>
                </form>    

                
                {this.state.children.map((u) => {
                    return( 
                        <p>{u.children.author}</p>
                )})}

                
            </div>

        );
    }

   /* async componentDidMount(){
        alert(this.state.value);
        let result = await axios.get(`'http://localhost:3000/api/discussions/'${this.state.value}`)
            .then(response => {
                console.log(response)
            });
        this.state.data = result.data;
    }*/
}
