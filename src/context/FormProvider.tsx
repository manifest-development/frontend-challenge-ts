import React, {
  type FunctionComponent,
  type PropsWithChildren,
  createContext,
  useState
} from 'react'
import { User } from '../class/user'

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState<number>(1)
  const [userData, setUserData] = useState<User>(new User())
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [thankYouPage, setThankYouPage] = useState<boolean>(false)

  const updateFormStep = (updatedUserData: User) => {
    if (updatedUserData.name && (updatedUserData.income || updatedUserData.income === 0)) {
      setFormStep(2)
    }
    if (updatedUserData.education) {
      setFormStep(3)
    }
  }

  const updateUserData = (updatedUserData: User) => {
    updateFormStep(updatedUserData)
    setUserData(updatedUserData)
  }

  const mockSaveData = async () =>
    // eslint-disable-next-line promise/param-names
    await new Promise((res) => {
      setTimeout(res, 1500)
    })

  const saveAndResetData = async () => {
    try {
      await mockSaveData()

      // ADD THANK YOU PAGE HERE
      setThankYouPage(true)

      setIsLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  const confirmForm = () => {
    setIsLoading(true)
    saveAndResetData()
  }

  const endThankYou = () => {
    setThankYouPage(false)
    setUserData(new User())
    setFormStep(1)
  }

  const backToPreviousStep = () => {
    setFormStep((prev) => prev - 1)
  }

  return {
    formStep,
    userData,
    setUserData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    thankYouPage,
    endThankYou
  }
}

type FormProviderValue = ReturnType<typeof CreateProviderValue>
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const FormContext = createContext({} as FormProviderValue)

const FormProvider: FunctionComponent<PropsWithChildren> = ({
  children
}: PropsWithChildren) => {
  return (
    <FormContext.Provider value={CreateProviderValue()}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
