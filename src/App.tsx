import { useContext } from 'react'
import './App.css'
import { FormContext } from './context/FormProvider'
import FormNavBar from './components/form-nav-bar'
import FormContent from './components/form-content'
import FullPageLoader from './components/full-page-loader'
import ThankYouPage from './components/thank-you-page'

function App () {
  const {
    formStep,
    userData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    showThankYou,
    resetForm
  } = useContext(FormContext)

  const renderContent = () => {
    if (isLoading) {
      return <FullPageLoader />
    }

    if (showThankYou) {
      return <ThankYouPage userName={userData.name} resetForm={resetForm} />
    }

    return (
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
    )
  }

  return <div className="app">{renderContent()}</div>
}

export default App
