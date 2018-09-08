import React, { Component } from 'react';

import './Blog.css';
import Posts  from './Posts/Posts';

class Blog extends Component {

    render () {

        if(this.state.error) posts = <p style={{textAlign: "center" }}>ERROR!</p>;
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;