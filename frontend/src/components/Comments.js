import { IoSend } from 'react-icons/io5'
import Comment from "./Comment"
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import {useRef, useState} from "react"
import toasty from "./Toast"


const Comments = (props) => {
    const [renderComments, setRenderComments]= useState(false)
    const [allComments, setAllComments] = useState(props.itineraryComments)
    
    
    const inputHandler = useRef() 

    const sendComment =  () => {
        let commentValue = inputHandler.current.value
        props.addCommentPerItinerary(props.itineraryId, commentValue, props.token)
        .then((res)=> {
            if(props.token){
                setAllComments(res)
                inputHandler.current.value=""
            }else{
                toasty ('error', 'You must be logged in to comment this post')
            }
           
        })
        .catch((error) => console.log(error))
     }

    const handlerEnter = (e) => {
        if (e.key === 'Enter') {
            sendComment()
        }
    }

    const eraseComment=(itineraryId, token,commentId)=>{
        props.deleteAComment(itineraryId, token, commentId)
        .then((res) =>{
            if(res.success){
                setAllComments(allComments.filter(comment => comment._id !== commentId))
            }else{
                throw new Error()
            }
        })
        .catch((error) => console.log(error))
     }

     const editComment = (commentId, comment, token) => {
         props.editAComment(commentId, comment, token)
         .then((res) => {
             if(res.success){
                allComments.forEach((editComment) =>{
                    if(editComment._id === commentId){
                        editComment.comment = comment
                    }
                })
                setAllComments(allComments)
                setRenderComments(!renderComments)
             }
             
         })
         .catch((error) => console.log(error))
     }

    


return(
    <div className="commentsConstruction">
            <div className="commentsTittle">
                <h4>Comments</h4>
            </div>
                <div className="comments">
                    {allComments.map((comment) => <Comment key={comment._id} newComment={comment} deleteComment={eraseComment} itinerary_id={props.itineraryId} editNewComment={editComment} render={renderComments}/>)}
                    
                </div>
            <div className="containerInputComment">
                <input ref={inputHandler} className="inputComment" type="text" onKeyPress={handlerEnter} placeholder={!props.token && "You must be logged in to comment"}/>
                <IoSend onClick={sendComment} className="sendIcon"/>
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