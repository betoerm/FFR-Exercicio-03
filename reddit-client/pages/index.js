import React from 'react'
import Link from 'next/link'

const Home = () => {
    return(
    <div>
        <ul>
            <li>
                <Link href='/topics'>
                    <a>Topics</a>
                </Link>
            </li>
            <li>
                <Link href="/post">
                    <a> Post</a>
                </Link>
            </li>
        </ul>
    </div>);
} 

export default Home;