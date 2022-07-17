import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  updateName = event => {
    this.setState({name: event.target.value})
  }

  updateComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name.length !== 0 && comment.length !== 0) {
      const newComment = {
        id: uuidv4(),
        letter: name[0],
        name,
        date: new Date(),
        comment,
        isLiked: false,
        color:
          initialContainerBackgroundClassNames[
            Math.floor(
              Math.random() * initialContainerBackgroundClassNames.length,
            )
          ],
      }
      this.setState(prevState => ({
        commentList: [...prevState.commentList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  isLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteItem = id => {
    const {commentList} = this.state
    const filterItem = commentList.filter(eachItem => eachItem.id !== id)
    this.setState({commentList: filterItem})
  }

  render() {
    const {commentList, name, comment} = this.state

    return (
      <div className="container">
        <div className="commentContain">
          <div>
            <h1 className="mainHeading">Comments</h1>
            <p className="paragraph">Say something about 4.0 technologies</p>
            <form className="formContainer" onSubmit={this.addComment}>
              <input
                key="name"
                value={name}
                placeholder="Your Name"
                onChange={this.updateName}
              />
              <textarea
                key="comment"
                value={comment}
                rows="5"
                placeholder="Your Comment"
                onChange={this.updateComment}
              />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="commentImage"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <div className="counterContainer">
          <span className="counter">{commentList.length}</span>
          <p className="paragraph">Comments</p>
        </div>
        <ul>
          {commentList.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              commentDetails={eachItem}
              deleteItem={this.deleteItem}
              isLike={this.isLike}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
