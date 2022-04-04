import {ActionTypes} from '../action-types/actionTypes'

interface searchrepositoriesactions{
  type:ActionTypes.SEARCH_REPOSITERIES,
}
interface searchrepositoriessuccessactions{
  type:ActionTypes.SEARCH_REPOSITERIES_SUCCESS,
  payload:string[]
}
interface searchrepositorieserroractions{
  type:ActionTypes.SEARCH_REPOSITERIES_ERROR,
  payload:string
}

export type Actions  = searchrepositoriesactions | searchrepositoriessuccessactions | searchrepositorieserroractions

