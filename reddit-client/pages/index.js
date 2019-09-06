import React from 'react'
import axios from "axios";
import Link from 'next/link'

export default class extends React.Component {

 // Async operation with getInitialProps
  static async getInitialProps () {
      // res is assigned the response once the axios
      // async get is completed
      const res = await axios.get('https://www.reddit.com/r/javascript.json');
      // Return properties
      const result = res.data;
      return {result}      
    }

    render(){
      return(
        <div>
          <h1>Teste</h1>
         
          {this.props.result.data.children.map((u) => {
           return( <p>
             <Link href='/api/discussions/[tag]' as ={`/api/discussions/${u.data.author}`}>
              {u.data.author}
             </Link> 
              </p>)
          })}
        
        </div>
      )
    }
}