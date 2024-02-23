import React, {
  type FunctionComponent,
  type PropsWithChildren,
  createContext,
  useState
} from 'react'
import { User } from '../class/user'
import { useNavigate } from 'react-router-dom'

const CreateProviderValue = () => {
  const [formStep, setFormStep] = useState<number>(1)
  const [userData, setUserData] = useState<User>(new User())
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const updateFormStep = (updatedUserData: User) => {
    if (updatedUserData.name && updatedUserData.income >= 0) {
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

  const resetData = async () => {
    try {
      setUserData(new User())
      setFormStep(1)
      setIsLoading(false)
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  const confirmForm = async () => {
    setIsLoading(true)
    try {
      await mockSaveData()
      // ADD THANK YOU PAGE HERE
      navigate('/thank-you')
    } catch (e) {
      console.error(e)
    }
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
    resetData,
    isLoading
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
