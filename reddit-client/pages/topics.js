import React from 'react'
import axios from "axios";
import Link from 'next/link'

export default class extends React.Component {
  
  static async getInitialProps () {
    const res = await axios.get('https://www.reddit.com/r/javascript.json');  
    const result = res.data;
    return {result}      
  } 

  render(){
    return(
      <div>
        <h1>Topics</h1>    
 
        {this.props.result.data.children.map((u) => {
          return( 
            <p>
              <Link href='/api/discussions/[tag]' as ={`/api/discussions/${u.data.author}`}>
                {u.data.author}
              </Link> 
            </p>
          )})}
      </div>
    )
  }
}