import React, { useState } from "react";

const CustomModal = ({
  title,
  body,
  firstAction,
  onDecline,
  onCancel,
  secondAction,
  icon: IconComponent,
  onCreateStore,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [newStoreData, setNewStoreData] = useState({
    step1: {
      name: "",
      description: "",
      category: "",
    },
    step2: {
      seller: "",
    },
  });

  const handleInputChange = (e, step) => {
    const { name, value } = e.target;
    setNewStoreData((prevData) => ({
      ...prevData,
      [step]: {
        ...prevData[step],
        [name]: value,
      },
    }));
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCreateStore = () => {
    onCreateStore(newStoreData);
    setNewStoreData({
      step1: {
        name: "",
        description: "",
        category: "",
        
      },
      step2: {
        seller: "",
      },
    });
    setCurrentStep(1);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                {IconComponent && (
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {IconComponent}
                  </div>
                )}
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    class="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">{body}</p>
                  </div>

                  {/* Render different content based on the current step */}
                  {currentStep === 1 && (
                    <>
                      <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">
                          Store Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={newStoreData.step1.name}
                          onChange={(e) => handleInputChange(e, "step1")}
                          class="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                      </div>

                      <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          name="description"
                          value={newStoreData.step1.description}
                          onChange={(e) => handleInputChange(e, "step1")}
                          rows="3"
                          class="mt-1 p-2 w-full border rounded-md"
                          required
                        ></textarea>
                      </div>

                      <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">
                          Category
                        </label>
                        <input
                          type="text"
                          name="category"
                          value={newStoreData.step1.category}
                          onChange={(e) => handleInputChange(e, "step1")}
                          class="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                      </div>
                    </>
                  )}

                  {currentStep === 2 && (
                    <div class="mt-4">
                      <label class="block text-sm font-medium text-gray-700">
                        Seller's Name
                      </label>
                      <input
                        type="text"
                        name="seller"
                        value={newStoreData.step2.seller}
                        onChange={(e) => handleInputChange(e, "step2")}
                        class="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="bg-gray-50 gap-3 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {currentStep < 2 && (
                <div className="inline-flex gap-3">
                <button
                  type="button"
                  onClick={onCancel}
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-inherit px-3 py-2 text-sm font-semibold text-black shadow-sm border-2 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 sm:mt-0 sm:w-auto"
                >
                  Next
                </button>
                </div>
              )}
              {currentStep === 2 && (
                <button
                  type="button"
                  onClick={handleCreateStore}
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 sm:mt-0 sm:w-auto"
                >
                  Create Store
                </button>
              )}
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Previous
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
