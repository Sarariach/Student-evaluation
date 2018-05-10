import * as request from 'superagent'
//import {isExpired} from '../jwt'
import { baseUrl } from '../constants'

export const POST_BATCH = 'POST_BATCH'
export const GET_BATCH = 'GET_BATCH'
export const GET_BATCHES = 'GET_BATCHES'


// export const sendBatchWHook = (webHook, batchId) => {
//   console.log("Submit webhook:", webHook, batchId)
//   request
//     .patch(`${baseUrl}/postbatchwh`)
//     .send({url: `${baseUrl}/${webHook}`, bid: batchId} )
//     .then(result => console.log("This webhook has been saved:",webHook))
//     .catch(err => console.error(err))
// }

const addBatch = batch => ({
    type: POST_BATCH,
    payload: batch
  })

  export const createBatch = (data) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

      // if (isExpired(jwt)) return dispatch(logout())
   console.log(data)
    request
      .post(`${baseUrl}/batches`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(data)
      .then(result => dispatch(addBatch(result.body)))
      .catch(err => console.error(err))
  }

  export const getAllBatches = () => (dispatch, getState) => {
   const state = getState()
   const jwt = state.currentUser.jwt

    request
      .get(`${baseUrl}/batches`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => {
        dispatch({
          type: GET_BATCHES,
          payload: result.body
        })
      })
      .catch(err => console.error(err))
  }

  export const getBatch = (id) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt
  
    request
      .get(`${baseUrl}/batches/${id}`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(response => {
        dispatch({
          type: GET_BATCH,
          payload: response.body
        })
      })
      .catch(err => console.log(err))
  }  







  //result => dispatch(getAllBatches(result.body)))