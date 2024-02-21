import { useContext } from 'react'
import './App.css'
import { FormContext } from './context/FormProvider'
import FormNavBar from './components/form-nav-bar'
import FormContent from './components/form-content'
import FullPageLoader from './components/full-page-loader'
import ThankYou from './components/thank-you'

function App () {
  const {
    formStep,
    userData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    isSubmitted,
    resetForm
  } = useContext(FormContext)

  return (
    <div className="app">
      {isLoading && <FullPageLoader />}

      {!isSubmitted
        ? <><FormNavBar currentStep={formStep} />
      <FormContent
        currentStep={formStep}
        updateUserData={updateUserData}
        userData={userData}
        confirmForm={confirmForm}
        backToPreviousStep={backToPreviousStep}
      /></>
        : <ThankYou username={userData.name} resetForm={resetForm} />}
    </div>
  )
}

export default App
