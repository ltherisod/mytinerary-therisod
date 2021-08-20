const itinerariesReducer = (state={allItineraries:[]}, action) => {
    switch(action.type){
        case "GET_ALL_ITINERARIES":
            return{
                ...state,
                allItineraries: action.payload
            }
      default:
          return state          
    }
}

export default itinerariesReducer 