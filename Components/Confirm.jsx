import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { Fragment } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

function Confirm({ confirmData, setConfirmData, onSubmit }) {
  const { watch, register, formState } = useForm();

  function closeConfirm() {
    setConfirmData({ ...confirmData, isOpen: false });
  }

  return (
    <>
      {confirmData.isOpen && (
        <Transition appear show={confirmData.isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeConfirm}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-center  align-middle shadow-xl transition-all">
                    <FaRegQuestionCircle className="text-5xl text-yellow-500 mx-auto" />
                    <Dialog.Title
                      as="h3"
                      className={`text-2xl font-medium leading-6 uppercase ${
                        confirmData.title === "Success"
                          ? "text-green-400"
                          : "text-red-500"
                      }`}
                    >
                      {confirmData.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-md text-gray-300">
                        Are you sure you want to delete{" "}
                        <span className="font-semibold text-red-600">
                          {confirmData.name}
                        </span>{" "}
                        from{" "}
                        <span className="font-semibold">
                          {confirmData.type}?
                        </span>
                      </p>
                    </div>
                    <div className="text-left mt-2">
                      <div className="flex flex-col">
                        <label className="text-sm tracking-wide text-gray-300 mb-1">
                          Please type{" "}
                          <span className="font-semibold text-white">
                            {confirmData.name}
                          </span>{" "}
                          to confirm
                        </label>

                        <input
                          type="text"
                          name="name"
                          {...register("name", {
                            required: {
                              value: true,
                            },
                          })}
                          className="h-8 outline-none bg-zinc-700 rounded-md border border-cyan-500 focus:border-cyan-500 text-white"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-gray-300 gap-2">
                      <button
                        className="bg-gray-600 mx-auto w-full py-2 rounded-lg"
                        onClick={() => closeConfirm()}
                      >
                        Cancel
                      </button>
                      <button
                        disabled={
                          confirmData.name === watch("name") ? false : true
                        }
                        className={`bg-red-500 disabled:bg-opacity-30 mx-auto w-full py-2 rounded-lg`}
                        onClick={() => onSubmit()}
                      >
                        Delete
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}
export default Confirm;
