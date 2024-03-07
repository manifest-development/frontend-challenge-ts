import { useContext } from 'react'
import './App.css'
import { FormContext } from './context/FormProvider'
import FormNavBar from './components/form-nav-bar'
import FormContent from './components/form-content'
import FullPageLoader from './components/full-page-loader'

function App () {
  const {
    formStep,
    userData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    submitAnother
  } = useContext(FormContext)

  return (
    <div className="app">
      {isLoading && <FullPageLoader />}
      <FormNavBar currentStep={formStep} />
      <FormContent
        currentStep={formStep}
        updateUserData={updateUserData}
        userData={userData}
        confirmForm={confirmForm}
        backToPreviousStep={backToPreviousStep}
        submitAnother={submitAnother}
      />
    </div>
  )
}

export default App
