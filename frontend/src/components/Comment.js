import {useState, useRef, useEffect } from "react"
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import { IoSend } from 'react-icons/io5'
import {connect} from "react-redux"


const Comment =(props)=>{
    const inputHandler = useRef() 
    // const [allowUser, setAllowUser] = useState(false)
    const [shown, setShown] = useState (false)
    const allowComment = props.newComment.userId._id === props._id

    useEffect(()=>{
        setShown(false)
    },[props.render])
    
    const commentShown =
                        <>
                            {!shown 
                            ? <p>{props.newComment.comment}</p>  
                            :<div>   
                            <input type="text" defaultValue={props.newComment.comment} ref={inputHandler}/>
                            <IoSend className="Send" onClick={()=> props.editNewComment(props.newComment._id,  inputHandler.current.value, props.token )}/> 
                            <FaTrashAlt className="iconDelete" onClick={()=> props.deleteComment(props.itinerary_id,props.token,props.newComment._id)}/>
                            </div>}
                            <FaPencilAlt className="iconEdit" onClick={()=>setShown(!shown)}/>
                        </>
    const commentToRender = allowComment ? commentShown : <p>{props.newComment.comment}</p>

    return(
        <div className="commentData">
            <div className="userComment">
                <div className="userIcon" style={{backgroundImage:`url('${props.newComment.userId.profilePhoto}')`}}></div>
                <div className="userName">
                    <p>{props.newComment.userId.firstName} {props.newComment.userId.lastName}</p>
                </div>
            </div>
            
               <div className="commentContainer">
                     <div className="comment">
                        {commentToRender}
                       </div>
                     {/* <div className="inputContainerEdit">
                        
                      </div>   */}
                      
                
                
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
        token:state.users.token,
        _id: state.users._id
    }

}

export default connect (mapStateToProps)(Comment)