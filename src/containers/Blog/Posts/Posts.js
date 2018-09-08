import React, { Component } from 'react';
import Axios from "../../../axios";
import Post from "../../../components/Post/Post";

import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
       this.props.history.push("/posts/" + id);
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
                // this.setState({
                //     error: true
                // })
                console.log(err);
            });
    }

    render() {

        let posts = this.state.posts.map(post => {
            return (
                /*<Link key={post.id} to={"/" + post.id}>*/
                    <Post key={post.id}
                    title={ post.title }
                    author={ post.author }
                    clicked={ () => this.postSelectedHandler(post.id)}
                    />
                // </Link>
            );
        });

        return (
            <section className="Posts">
                { posts }
            </section>
        );
    }
}

export default Posts;