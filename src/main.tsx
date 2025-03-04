import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { store } from './store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
			<ToastContainer position='bottom-right' />
		</Provider>
	</StrictMode>
)
