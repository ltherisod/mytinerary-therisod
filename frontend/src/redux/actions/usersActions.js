import axios from 'axios'

const usersActions ={
    signUpUser :(newUser) => {
        return async (dispatch, getState) => {
            let response = await  axios.post('http://localhost:4000/api/user/signup', newUser)
            if(response.data.success){
                dispatch({type:"LOG_USER", payload: response.data.response})
            }
            return response   
        }
    },
    signInUser: (logInUser) => {
        return async (dispatch, getState) => {
            let response = await  axios.post('http://localhost:4000/api/user/signin', logInUser)
            if(response.data.success){
               
                dispatch({type:"LOG_USER", payload: response.data.response})
            }
            return response
            
        }
    },
    signOutUser : () => {
        return(dispatch, getState) => {
            dispatch({type:"LOG_OUT_USER"})
        }
    },
    signInLS :  (firstName, profilePhoto, token) =>{
        return(dispatch, getState) => {
            dispatch({type:"LOG_USER", payload:{firstName,profilePhoto,token}})
        }
    }
}


export default usersActions