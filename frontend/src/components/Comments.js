import { IoSend } from 'react-icons/io5'
import Comment from "./Comment"
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import {useRef, useState} from "react"

const Comments = (props) => {
    
const [allComments, setAllComments] = useState(props.itineraryComments)

   const inputHandler = useRef() 

    const sendComment =  () => {
        let commentValue = inputHandler.current.value
        props.addCommentPerItinerary(props.itineraryId, commentValue, props.token)
        .then((res)=> setAllComments(res))
        .catch((error) => console.log(error))
     }
    const eraseComment=(itineraryId, token,commentId)=>{
        props.deleteAComment(itineraryId, token, commentId)
        .then((res) =>{
            if(res.success){
                setAllComments(allComments.filter(comment => comment._id !== commentId))
            }else{
                throw new Error ()
            }
        })
        .catch((error) => console.log(error))
     }

return(
    <div className="commentsConstruction">
            <div className="commentsTittle">
                <h4>Comments</h4>
            </div>
                 {/* <div className="noComments">
                    <p>No comments yet</p>
                    <p>Be the first to post one!</p>
                </div> */}
                
                <div className="comments">
                    {allComments.map((comment) => <Comment key={comment._id} newComment={comment} deleteComment={eraseComment} itinerary_id={props.itineraryId}/>)}
                    
                </div>
            <div className="containerInputComment">
                <input ref={inputHandler} className="inputComment" type="text"/>
                <IoSend onClick={sendComment} className="sendIcon" />
            </div>
    </div>
)
}

const mapStateToProps = (state) => {
    return{
        token:state.users.token
    }

}

const mapDispatchToProps = {
    addCommentPerItinerary: itinerariesActions.addCommentPerItinerary,
    editAComment: itinerariesActions.editAComment,
    deleteAComment: itinerariesActions.deleteAComment
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)