import { useState } from "react"
import {useActions} from '../hooks/useActions'
import {useTypedSelector} from '../hooks/useTypedSelector'

const RepositoriesList:React.FC = () => {
  const [term, setTerm] = useState('')
  const serachRepositories = useActions()
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );  const submitHandler = (event:any) =>{
    event.preventDefault()
    serachRepositories(term)
    setTerm('')
  }
  return (
    <form onSubmit={submitHandler}>
      <input value={term} onChange={(e)=>setTerm(e.target.value)}/>
      <button>search</button>
      {error && <h3>{error}</h3>}
      {loading&&<h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </form>
  )
}
export default RepositoriesList