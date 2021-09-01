import axios from "axios"
const itinerariesActions = {
    getItinerariesPerCity : (id) => {
        return async (dispatch, getState) => {
            let res = await axios.get(`http://localhost:4000/api/itineraries/${id}`)
            if(!res.data.success){
                throw new Error ('Backend-Data Base problems')
            }
            dispatch ({ type:'GET_ITINERARIES_PER_CITY', payload:res.data.response})
        }
    },
    likeItinerary: (id, token) =>{console.log(id,token)
        return async () => {
                try{
                    let response = await axios.put(`http://localhost:4000/api/itinerary/like/${id}`, {},{
                    headers:{
                        Authorization: 'Bearer '+token
                    }
                })
                return response
            
                }catch (error){
                    console.log(error)
                }
            
        }
    },
    getActivitiesPerItinerary : (id)=>{
        return async () => {
            try{
                let response = await axios.get(`http://localhost:4000/api/activities/${id}`)
                if(response.data.success){
                    return response.data.response[0].activities
                }
            }catch(error){
                console.log(error)
            }
        }

    },
    addCommentPerItinerary:(id, comment, token)=>{
        return async () => {
                    try{
                        let response = await axios.post(`http://localhost:4000/api/itinerary/comments/${id}`, {comment} ,{
                            headers : {
                                Authorization: 'Bearer '+token
                            }
                        })
                        return response
                    }catch (error){
                        console.log(error)
                    }
        }
    }
}

export default itinerariesActions