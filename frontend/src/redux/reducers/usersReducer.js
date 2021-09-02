const usersReducer = (state= {token:null, firstName:null, profilePhoto:null, _id:null}, action) => {
    switch (action.type){
        case "LOG_USER" :
            localStorage.setItem('token',action.payload.token)
            localStorage.setItem('firstName', action.payload.firstName)
            localStorage.setItem('profilePhoto', action.payload.profilePhoto)
            localStorage.setItem('id', action.payload._id)
            return {
                ...state,
                token: action.payload.token,
                firstName:action.payload.firstName,
                profilePhoto: action.payload.profilePhoto,
                _id:action.payload._id
            }
        case "LOG_OUT_USER" :
            localStorage.removeItem('token')
            localStorage.removeItem('firstName')
            localStorage.removeItem('profilePhoto')
            localStorage.removeItem('id')
            return{
                token:null,
                firstName:null,
                profilePhoto:null,
                _id:null
            }
    default: 
    return state    
    }
}

export default usersReducer 