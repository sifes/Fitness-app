import { RouterProvider } from 'react-router-dom'
import './styles/index.scss'
import { router } from './routing/router'

const App: React.FC = () => <RouterProvider router={router} />

export default App
