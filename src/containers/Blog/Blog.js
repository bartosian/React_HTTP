import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

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
                            <li><NavLink activeStyle={{ color: "red"}} to="/posts">Posts</NavLink></li>
                            <li><NavLink exact to={{
                                pathname: "/new-post",
                                search: "?logged=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/posts" exact component={ Posts }/>
                    <Route path="/new-post" exact component={ NewPost }/>
                    <Route path="/posts/:id" exact component={ FullPost }/>
                </Switch>
            </div>
        );
    }
}

export default Blog;