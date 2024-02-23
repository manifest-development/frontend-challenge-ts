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
    isLoading
  } = useContext(FormContext)

  return (
    <div className="app">
      {isLoading && <FullPageLoader />}
      <FormNavBar currentStep={formStep} />
      <FormContent
        currentStep={formStep}
        updateUserData={updateUserData}
        userData={userData}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        confirmForm={confirmForm}
        backToPreviousStep={backToPreviousStep}
      />
    </div>
  )
}

export default App
