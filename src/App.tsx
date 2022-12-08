import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store/index'
import RoutesApp from './routes/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
