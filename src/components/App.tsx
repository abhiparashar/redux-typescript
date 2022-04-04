import {Provider} from 'react-redux'
import { store } from '../redux/store';
import RepositoriesList from './RepositoriesList'

function App() {
  return (
    <Provider store={store}>
     <div>
     <h1>search repositories</h1>
      <RepositoriesList/>
     </div>
    </Provider>
  );
}

export default App;
