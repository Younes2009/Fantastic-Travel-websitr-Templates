import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';  // ثيم PrimeReact
import 'primereact/resources/primereact.min.css';          // النمط الرئيسي لواجهة PrimeReact
import 'primeicons/primeicons.css';                        // الأيقونات الخاصة بـ PrimeReact


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
     <App />
    </PrimeReactProvider>
  </StrictMode>,
)
