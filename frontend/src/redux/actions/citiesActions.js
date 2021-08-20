import axios from "axios"
const citiesActions = {
 getCities : () => {
    return async (dispatch, getState) => {
        let response = await axios.get('http://localhost:4000/api/citiesData')
        let data = response.data.answer
        dispatch({type:'GET_ALL_CITIES', payload:data}) 
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