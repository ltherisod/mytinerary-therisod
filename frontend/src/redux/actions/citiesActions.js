import axios from "axios"
const citiesActions = {
    
 getCities : (token) => {
    return async (dispatch, getState) => {
        let response = await axios.get('http://localhost:4000/api/citiesData', {
            headers :{
                Authorization: 'Bearer '+ token,
            }
        })
        if(!response.data.success){
            throw new Error ('Backend-Data Base problems')
        }
        dispatch({type:'GET_ALL_CITIES', payload:response.data.response}) 
    }
 },
 filterCities: (e) => {
     return (dispatch, getState) => {
         dispatch ({type: 'FILTER_CITIES', payload:e})
     }
 },
 getOneCity: (id) => {
     return(dispatch, getState) => {
         dispatch ({type: 'GET_ONE_CITY', payload: id})
     }
 }
}

export default citiesActions 