import axios from 'axios'
import {ActionTypes} from '../action-types/actionTypes'

export const serachRepositories = (term:string) => {
  return async(dispatch:any) => {
      dispatch({type:ActionTypes.SEARCH_REPOSITERIES})
      try {
        const {data} = await axios.get('https://registry.npmjs.org/-/v1/search',{
          params:{
            text:term
          }
        })        
        const names = data.objects.map((name:any)=>{
          return name.package.name
        })                
        dispatch({type:ActionTypes.SEARCH_REPOSITERIES_SUCCESS,payload:names})
       } catch (error) {
         dispatch({type:ActionTypes.SEARCH_REPOSITERIES_ERROR,payload:error,})
       }
  }
}