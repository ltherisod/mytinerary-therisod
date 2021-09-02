const usersReducer = (state= {token:null, firstName:null, profilePhoto:null}, action) => {
    switch (action.type){
        case "LOG_USER" :
            localStorage.setItem('token',action.payload.token)
            localStorage.setItem('firstName', action.payload.firstName)
            localStorage.setItem('profilePhoto', action.payload.profilePhoto)
            return {
                ...state,
                token: action.payload.token,
                firstName:action.payload.firstName,
                profilePhoto: action.payload.profilePhoto
            }
        case "LOG_OUT_USER" :
            localStorage.removeItem('token')
            localStorage.removeItem('firstName')
            localStorage.removeItem('profilePhoto')
            return{
                token:null,
                firstName:null,
                profilePhoto:null
            }
    default: 
    return state    
    }
}

export default usersReducer 