// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, color, date, deleteItem} = props
  const {id, name, comment, letter} = commentDetails
  const time = formatDistanceToNow(date)

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="listContainer">
      <div className="listItem">
        <span className={color}>{letter}</span>
        <div className="name-comment">
          <div className="name-time">
            <p className="commenterName">{name}</p>
            <p className="timeStamp">{time} ago</p>
          </div>
          <p className="commentPara">{comment}</p>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="likeContainer ">
          <button type="button" className="btnLike">
            <img
              className="like"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
          </button>
          <p>Like</p>
        </div>
        <button
          type="button"
          testid="delete"
          className="deleteBtn"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hrLine" />
    </li>
  )
}
export default CommentItem
