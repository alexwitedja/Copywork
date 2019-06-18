import React, {Component} from 'react';
import './App.css';
import Post from './components/Post.js';
import Header from './layout/Header.js';
import CreatePost from './pages/CreatePost.js';
import uuid from 'uuid';

class App extends Component {

  state = {
    toggleCreate: false,
    posts: [
      {
        id: uuid.v4(),
        title: "Does anyone use selenium with react testing?",
        voteCount: 11,
        commentsCount: 2,
        author: "redbluerat",
        content: ""
      },
      {
        id: uuid.v4(),
        title: "Beginner Thread",
        voteCount: 2,
        commentsCount: 3,
        author: "username",
        content: ""
      },
    ]
  }

  incVote = (id) => {
    console.log(id)
    this.setState({ posts: this.state.posts.map(post => {
      if(post.id === id) {
        post.voteCount++;
      }
      return post;
    }) });
  }

  decVote = (id) => {
    this.setState({ posts: this.state.posts.map(post => {
      if(post.id === id) {
        post.voteCount--;
      }
    return post;
    }) });
  }

  hidePost = (id) => {
    this.setState({posts: [...this.state.posts.filter(post => post.id !== id)]});
  }

  createPost = (title, content, author) => {
    const newPost = {
      id: uuid.v4,
      title: title,
      voteCount: 0,
      commentsCount: 0,
      author: author,
      content: content,
    }
    this.setState({ posts: [...this.state.posts, newPost]})
  }

  showCreate = () => {
    this.setState({ toggleCreate: !this.state.toggleCreate});
  }

  render () {
    return (
        <div className="App">
          <div className="container">
            <Header toggleCreate={this.state.toggleCreate}/>
              <button style={btnStyle} onClick={this.showCreate.bind(this)}> Create post </button>
              {this.state.toggleCreate ? <CreatePost createPost={this.createPost}/>: null}
              <Post posts={this.state.posts} incVote={this.incVote} decVote={this.decVote}
              hidePost={this.hidePost}/>
          </div>
        </div>
    );
  }
}

const btnStyle = {
  backgroundColor: "orange",
  marginTop: "5px",
  width: "80px",
  border: "1px solid black"
}

export default App;
