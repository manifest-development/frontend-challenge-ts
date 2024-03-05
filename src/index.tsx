import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import FormProvider from './context/FormProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThankYou from './components/thank-you'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
)
