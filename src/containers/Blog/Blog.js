import React, { Component } from 'react';
import Axios from "../../axios";

import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPost: 0,
        error: false
    }

    componentDidMount() {
        Axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Kiryl"
                    }
                });
                this.setState({
                    posts: updatedPosts
                });
            })
            .catch(err => {
                this.setState({
                    error: true
                })
            });
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPost: id
        });
    }

    render () {


        let posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={ post.title }
                author={ post.author }
                clicked={ () => this.postSelectedHandler(post.id)}
            />;
        });

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
                <section className="Posts">
                    { posts }
                </section>
            </div>
        );
    }
}

export default Blog;