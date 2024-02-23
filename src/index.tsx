import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import FormProvider from './context/FormProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThankYouPage from './pages/ThankYouPage/ThankYouPage'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
)
