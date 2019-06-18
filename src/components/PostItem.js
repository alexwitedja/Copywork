import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import '../assets/PostItem.css'
import placeholder from '../assets/placeholder.png'

class PostItem extends Component {
    
    render() {
        const {id, title, voteCount, commentsCount, author} = this.props.post;
        return (
            <div className="postContainer">
                <div className="voteContainer">
                    <button onClick={this.props.incVote.bind(this, id)}>
                        <FontAwesomeIcon icon={faArrowUp}/>
                    </button>
                    <span>{voteCount}</span>
                    <button onClick={this.props.decVote.bind(this, id)}>
                        <FontAwesomeIcon icon={faArrowDown}/>
                    </button>
                </div>
                <div className="postBody">
                    <div className="postIcon">
                        <img alt="Post icon" style={{cursor:"pointer"}}src={placeholder}/>
                    </div>
                    <div className="postDetails">
                        <div className="postHeader">
                            <span>
                                <h2>{title}</h2>
                            </span>
                        </div>
                        <div className="postAuthor">
                            Submitted 4 hours ago by {author}
                        </div>
                        <div className="postActions">
                            {commentsCount} comments share save 
                            <button style={hideStyle} onClick={this.props.hidePost.bind(this, id)}>hide</button> 
                            report pocket
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//Prop types
PostItem.propTypes = {
    post:PropTypes.object.isRequired,
    incVote:PropTypes.func.isRequired,
    decVote:PropTypes.func.isRequired,
    hidePost:PropTypes.func.isRequired
}

const hideStyle = {
    width: "40px",
}
export default  PostItem