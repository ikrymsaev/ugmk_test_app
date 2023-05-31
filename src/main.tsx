import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes.tsx'
import store, { persistor } from './store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import 'moment/locale/ru';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={routes} />
    </PersistGate>
  </Provider>
)
