import {useState, useRef, useEffect } from "react"
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import { IoSend } from 'react-icons/io5'
import {connect} from "react-redux"
import Swal from 'sweetalert2'

const Comment =(props)=>{
    const inputHandler = useRef() 
    // const [allowUser, setAllowUser] = useState(false)
    const [shown, setShown] = useState (false)
    const allowComment = props.newComment.userId._id === props._id

    const confirmAlert = () =>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                props.deleteComment(props.itinerary_id,props.token,props.newComment._id)
              Swal.fire(
                'Deleted!',
                'Your comment has been deleted.',
                'success'
              )
            }
          })
    }

    useEffect(()=>{
        setShown(false)
    },[props.render])

    
    
    const commentShown =
                        <div className="d-flex">
                            {!shown 
                            ? <p>{props.newComment.comment}</p>  
                            :<div className="cajacolor">   
                            <input type="text" defaultValue={props.newComment.comment} ref={inputHandler} className="inputEdit"/>
                            <IoSend className="send" onClick={()=> props.editNewComment(props.newComment._id,  inputHandler.current.value, props.token )}/> 
                            <FaTrashAlt className="iconDelete" onClick={confirmAlert}/>
                            </div>}
                            <FaPencilAlt className="iconEdit" onClick={()=>setShown(!shown)}/>
                        </div>
                        
    const commentToRender = allowComment ? commentShown : <p>{props.newComment.comment}</p>
    

    return(
        <div className="commentData">
                <div className="userIcon" style={{backgroundImage:`url('${props.newComment.userId.profilePhoto}')`}}></div>
            <div className="commentContainer">
                <div className="comment">
                    <div className="userName">
                        <p>{props.newComment.userId.firstName} {props.newComment.userId.lastName}</p>
                    </div>
                    {commentToRender}
                </div>
            </div> 
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