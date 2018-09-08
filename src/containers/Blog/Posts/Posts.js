import React, { Component } from 'react';
import Axios from "../../../axios";
import Post from "../../../components/Post/Post";

class Posts extends Component {

    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPost: id
        });
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
            return <Post
                key={post.id}
                title={ post.title }
                author={ post.author }
                clicked={ () => this.postSelectedHandler(post.id)}
            />;
        });

        return (
            <section className="Posts">
                { posts }
            </section>
        );
    }
}

export default Posts;