import { useContext } from 'react'
import './App.css'
import { FormContext } from './context/FormProvider'
import FormNavBar from './components/form-nav-bar'
import FormContent from './components/form-content'
import FullPageLoader from './components/full-page-loader'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ThankYou from './components/ThankYou/ThankYou'

// import ThankYou from './components/ThankYou'
function App () {
  const {
    formStep,
    userData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    resetData,
    isLoading
  } = useContext(FormContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app">
            {isLoading && <FullPageLoader />}
            <FormNavBar currentStep={formStep}/>
            <FormContent
              currentStep={formStep}
              updateUserData={updateUserData}
              userData={userData}
              confirmForm={confirmForm}
              backToPreviousStep={backToPreviousStep}
            />
          </div>
        }/>
        <Route
         path="/thank-you"
        element={
          <div className="app">
        <ThankYou
          userData={userData}
          resetData={resetData}
          backToPreviousStep={backToPreviousStep}
           />
           </div>
          }/>

      </Routes>
    </Router>
  )
}

export default App
