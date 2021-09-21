import axios from 'axios'

const usersActions ={
    signUpUser :(newUser) => {
        return async (dispatch, getState) => {
            try{
                let response = await  axios.post('https://mytinerary-therisod.herokuapp.com/api/user/signup', newUser)
            if(response.data.success){
                dispatch({type:"LOG_USER", payload: response.data.response})
            }
            return response   
            }catch (error){
                console.log(error)
            }
        }
    },
    signInUser: (logInUser) => {
        return async (dispatch, getState) => {
           try{
            let response = await  axios.post('https://mytinerary-therisod.herokuapp.com/api/user/signin', logInUser)
            if(response.data.success){
               
                dispatch({type:"LOG_USER", payload: response.data.response})
            }
            return response
            
           }catch (error){
               console.log(error)
           }
        }
    },
    signOutUser : () => {
        return(dispatch, getState) => {
            dispatch({type:"LOG_OUT_USER"})
        }
    },
    signInLS :  (token) =>{
        return async (dispatch, getState) => {
            try{
                let response = await axios.get('https://mytinerary-therisod.herokuapp.com/api/verifyToken', {
            headers: {
                Authorization: 'Bearer '+ token,
            }
        })
            dispatch({type:"LOG_USER", payload:{token, firstName:response.data.firstName, profilePhoto: response.data.profilePhoto, _id:response.data._id}})
            }catch(error) {
               return  dispatch({type:'LOG_OUT_USER' })
            }
        }
    }
}


export default usersActions