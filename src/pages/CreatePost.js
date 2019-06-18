import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../assets/CreatePost.css'

class CreatePost extends Component {
    state = {
        title: '',
        content: '',
        author: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state.title, this.state.content, this.state.author);
        this.setState({title: '', content: '', author: ''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    
    render() {
        return (
            <div>
                <form id="postForm" onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <ul>
                        <li>
                            <input style={inputStyle}
                            type="text"
                            name="title"
                            placeholder="Add title ..."
                            value={this.state.title}
                            onChange={this.onChange}
                            required/>
                        </li>
                        <li>
                            <textarea style={inputStyle}
                            name="content"
                            form="postForm"
                            value={this.state.content}
                            onChange={this.onChange}
                            placeholder="Optional text.">
                            </textarea>
                        </li>
                        <li>
                            <input style={inputStyle}
                            type="text"
                            name="author"
                            placeholder="Enter username"
                            value={this.state.author}
                            onChange={this.onChange}
                            // required
                            />
                        </li>
                        <li>
                            <input type="submit"
                            style={inputStyle}
                            className="btn"
                            value="Post"/>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

const inputStyle = {
    marginBottom: "10px",
}

//Prop types
CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default CreatePost;

