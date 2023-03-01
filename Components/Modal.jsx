import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ModalComp({ modalData, setModalData }) {
  function closeModal() {
    setModalData({ ...modalData, isOpen: false });
  }

  return (
    <>
      {modalData.isOpen && (
        <Transition appear show={modalData.isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                    {modalData.title === "Success" ? (
                      <FaRegCheckCircle className="text-5xl text-green-500 mx-auto" />
                    ) : (
                      <AiOutlineCloseCircle className="text-5xl text-red-500 mx-auto" />
                    )}
                    <Dialog.Title
                      as="h3"
                      className={`text-2xl font-medium leading-6 uppercase ${
                        modalData.title === "Success"
                          ? "text-green-400"
                          : "text-red-500"
                      }`}
                    >
                      {modalData.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-lg font-semibold text-gray-300">
                        {modalData.message}
                      </p>
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
export default ModalComp;
