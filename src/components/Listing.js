import React, { useState } from "react";
import PlaceholderImage from "../images/placeholder-img.jpg";
import ShipDetailModal from "../components/ShipDetailModal";

const Listing = ({ shipData }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full md:w-1/3 p-6 flex flex-col">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          <img
            className="hover:grow hover:shadow-lg w-full h-52 object-cover"
            src={shipData.image ?? PlaceholderImage}
            alt="Ship"
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="">{shipData.ship_name}</p>
          </div>
        </a>
      </div>
      {showModal && (
        <ShipDetailModal
          shipData={shipData}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default Listing;
