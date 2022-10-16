import React from "react";
import PlaceholderImage from "../images/placeholder.png";

const ShipDetailModal = ({ shipData, showModal, setShowModal }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{shipData.ship_name}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(!showModal)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="flex flex-row">
                <div className="w-full md:w-1/2">
                  <img
                    className="hover:grow hover:shadow-lg"
                    src={shipData.image ?? PlaceholderImage}
                    alt="Ship"
                  />
                </div>
                <div className="w-full md:w-1/2 ml-5">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Ship ID: {shipData.ship_id}
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Ship Type: {shipData.ship_type}
                  </p>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(!showModal)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ShipDetailModal;
