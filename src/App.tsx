import { useContext } from 'react'
import './App.css'
import { FormContext } from './context/FormProvider'
import FormNavBar from './components/form-nav-bar'
import FormContent from './components/form-content'
import FullPageLoader from './components/full-page-loader'
import ThankYou from './components/thank-you-page'

function App () {
  const {
    formStep,
    userData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    showThankYou
  } = useContext(FormContext)

  return (
    <div className="app">
      {isLoading && <FullPageLoader />}
      {showThankYou
        ? (<ThankYou username={userData.name} confirmForm={confirmForm}/>)
        : (
        <>
          <FormNavBar currentStep={formStep} />
          <FormContent
            currentStep={formStep}
            updateUserData={updateUserData}
            userData={userData}
            confirmForm={confirmForm}
            backToPreviousStep={backToPreviousStep}
          />
        </>
          )}
    </div>
  )
}

export default App
