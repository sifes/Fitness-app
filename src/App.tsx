import { RouterProvider } from 'react-router-dom'
import './styles/index.scss'
import { router } from './routing/router'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App: React.FC = () => (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)


export default App
