const mockSaveData = jest.fn(async () => {
  // Mock implementation of saveAndResetData
  // eslint-disable-next-line promise/param-names
  await new Promise((res) => {
    setTimeout(res, 1500);
  });
});

const mockSaveAndResetData = jest.fn(async () => {
  try {
    await mockSaveData(); //will run after user clicks Confirm
    // Opens Thank You Page
    // setFormStep(4);
    mockFormStep = 4;
    // setIsLoading(false); // Loading turns to false after 1500ms due to the mockSaveData function
    mockIsLoading = false;
  } catch (e) {
    console.error(e);
  }
});

// Mock values for context
let mockFormStep = 1;
let mockUserData = { name: "", income: 0, education: "" };
let mockIsLoading = false;
const mockUpdateUserData = jest.fn((updatedUserData) => {
  console.log("mockUpdateUserData - updatedUserData", updatedUserData);
  // Mock implementation of updateUserData
  // Here you can simulate updating user data and form step
  if (updatedUserData.name && updatedUserData.income >= 0 && formStep === 1) {
    // setFormStep(2);
    mockFormStep = 2;
  }
  if (updatedUserData.education && formStep === 2) {
    // setFormStep(3);
    mockFormStep = 3;
  }
  // setUserData(updatedUserData);
  mockUserData = updatedUserData;
});

const mockConfirmForm = jest.fn(() => {
  // Mock implementation of confirmForm
  // setIsLoading(true);
  mockIsLoading = true;
  // This will reset our form
  mockSaveAndResetData();
});

const mockBackToPreviousStep = jest.fn(() => {
  // Mock implementation of backToPreviousStep
  // setFormStep((prev) => prev - 1);
  console.log("mockBackToPreviousStep");
  mockFormStep -= 1;
});

const mockSubmitAnotherForm = jest.fn(() => {
  // Mock implementation of submitAnotherForm
  console.log("Mock: Submit Another BTN clicked, redirecting user to step 1");
  // setUserData(new User());
  mockUserData = new User();
  // setFormStep(1);
  mockFormStep = 1;
});

export {
  mockSaveData,
  mockSaveAndResetData,
  mockFormStep,
  mockUserData,
  mockIsLoading,
  mockUpdateUserData,
  mockConfirmForm,
  mockBackToPreviousStep,
  mockSubmitAnotherForm,
};
