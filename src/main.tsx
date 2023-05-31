import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes.tsx'
import store from './store/store.ts'
import 'moment/locale/ru';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
)
