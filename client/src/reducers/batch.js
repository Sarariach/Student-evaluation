import {POST_BATCH, GET_BATCH, GET_BATCHES} from '../actions/batches'

/*
The state will contain the games in an object with the game ID as key
*/

export default (state = [], {type, payload}) => {
  switch (type) {

    case GET_BATCHES:
      return payload
    
    case GET_BATCH:
      return payload

   

    case POST_BATCH:
      return [...state,payload]
      

    
    

    default:
      return state
  }
}