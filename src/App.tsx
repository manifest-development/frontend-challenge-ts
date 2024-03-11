import { useContext } from "react";
import "./App.css";
import { FormContext } from "./context/FormProvider";
import FormNavBar from "./components/form-nav-bar";
import FormContent from "./components/form-content";
import FullPageLoader from "./components/full-page-loader";

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function App() {
  const { formStep, userData, updateUserData, confirmForm, backToPreviousStep, isLoading, submitAnotherForm } =
    useContext(FormContext);

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
        submitAnotherForm={submitAnotherForm}
      />
    </div>
  );
}

export default App;
