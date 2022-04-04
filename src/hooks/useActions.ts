import {useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import {serachRepositories} from '../redux/action-creators'


export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(serachRepositories,dispatch)
}
