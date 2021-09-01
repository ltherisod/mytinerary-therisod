import { IoSend } from 'react-icons/io5'
import Comment from "./Comment"
const Comments = () => {
    const sendComment = (e) => {

    }
return(
    <div className="commentsContainer">
            <div className="commentsTittle">Comments</div>
                 {/* <div className="noComments">
                    <p>No comments yet</p>
                    <p>Be the first to post one!</p>
                </div> */}
                
                <div className="comments">
                    <Comment/>
                </div>
            <div className="containerInputComment">
                <input className="inputComment" type="text"/>
                <IoSend onClick={sendComment} className="sendIcon" />
            </div>
    </div>
)
}

export default Comments