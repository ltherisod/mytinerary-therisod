import {useState} from "react"
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import { IoSend } from 'react-icons/io5'
import {connect} from "react-redux"


const Comment =(props)=>{
    // const [allowUser, setAllowUser] = useState(false)
    const [updateComment, setUpdateComment] = useState (false)
    // const [shown, setShown] = useState (false)
    const editText = () =>{
        setUpdateComment(!updateComment)
    }
    return(
        <div className="commentData">
            <div className="userComment">
                <div className="userIcon"></div>
                <div className="userName">
                    <p>User'S name</p>
                </div>
            </div>
            
               <div className="commentContainer">
               {!updateComment
                    ? <div className="comment">
                         <p>{props.newComment.comment}</p>
                       </div>
                    : <div className="inputContainerEdit">
                        <input type="text" value={props.newComment.comment}/>
                      </div>  
                }      
                <IoSend className="iconSendEdit" onClick={editText} /> 
                <FaTrashAlt className="iconDelete" onClick={()=> props.deleteComment(props.itinerary_id,props.token,props.newComment._id)}/>
                {/* <button onClick={editText}>edit</button> */}
            </div>
                {/* {
                    allowUser &&
                    <div className="contenedorButtonsOptions">
                        <div onClick={() => { setUpdateComment(!updateComment)}}>
                            {!updateComment ? <FaPencilAlt /> : <TiDelete />}
                        </div>
                        <FaTrashAlt onClick={() =>setUpdateComment(!updateComment)}></FaTrashAlt>
                    </div>
                } */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        token:state.users.token
    }

}

export default connect (mapStateToProps)(Comment)