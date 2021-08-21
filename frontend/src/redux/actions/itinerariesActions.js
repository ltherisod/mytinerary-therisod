import axios from "axios"
const itinerariesActions = {
    getItinerariesPerCity : (id) => {
        return async (dispatch, getState) => {
            let res = await axios.get(`http://localhost:4000/api/itineraries/${id}`)
            if(!res.data.success){
                throw new Error ('Backend-Data Base problems')
            }
            dispatch ({ type:'GET_ITINERARIES_PER_CITY', payload:res.data.answer})
        }
    }
}

export default itinerariesActions