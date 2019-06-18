import React, { Component } from 'react';
import PostItem from './PostItem.js';
import PropTypes from 'prop-types';

class Post extends Component {

    render() {
        return this.props.posts.map((post) => (
            <PostItem key={post.id} post={post} 
            incVote={this.props.incVote} decVote={this.props.decVote}
            hidePost={this.props.hidePost}/>
        ));
    }
}

// Prop types
Post.propTypes = {
    posts:PropTypes.array.isRequired,
    incVote:PropTypes.func.isRequired,
    decVote:PropTypes.func.isRequired,
}

export default Post;