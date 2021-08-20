import axios from "axios"
const itinerariesActions = {
    getItineraries : () => {
        return async (dispatch, getState) => {
            let res = await axios.get('http://localhost:4000/api/itineraries/')
            let info = res.data.answer
            dispatch ({ type:'GET_ALL_ITINERARIES', payload:info})
        }
    }
}

export default itinerariesActions