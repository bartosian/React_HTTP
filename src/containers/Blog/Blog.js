import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import Posts  from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from "./FullPost/FullPost";

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact activeStyle={{ color: "red"}} to="/">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                search: "?logged=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={ Posts }/>
                <Route path="/:id" exact component={ FullPost }/>
                <Route path="/new-post" exact component={ NewPost }/>
            </div>
        );
    }
}

export default Blog;