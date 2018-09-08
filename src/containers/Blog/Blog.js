import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts  from './Posts/Posts';
import NewPost from './NewPost/NewPost';

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
                    <Route path="/posts"  component={ Posts }/>
                    <Route path="/new-post" exact component={ NewPost }/>
                </Switch>
            </div>
        );
    }
}

export default Blog;