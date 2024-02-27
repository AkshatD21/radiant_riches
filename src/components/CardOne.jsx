import React from "react";
import laptopImage from "../assets/Laptop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faStar,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const CardOne = () => {
  return (
    <div className="relative bg-FFFF rounded-md flex pt-6 pb-4">
      <div className="absolute top-2 left-0 bg-orange-500 text-white px-2 py-1 rounded-r-md">
        <FontAwesomeIcon icon={faTrophy} />
        <span className="px-2">Best Choice</span>
      </div>

      <div className="first flex flex-col items-center py-10 flex-1 text-gray-600">
        <img src={laptopImage} alt="Laptop" />
        <p>Builder 1</p>
      </div>

      <div className="second flex-1">
        <p className="text-xs text-gray-600 mb-3">
          <span className="text-xs text-gray-600 font-bold text-gray-600">
            WixPro 72-Inch Responsive Website Builder-
          </span>{" "}
          Comprehensive Digital Platform Creation Tool, Streamlined Design
          Interface for Professional Websites and Online Stores (Black/Blue)
        </p>
        <p className="text-xs text-gray-600 font-bold mb-2">Main Highlights:</p>
        <p className="text-xs text-gray-600 pl-4 mb-4">
          [What You Get]: Receive the WixPro website builder suite, access to
          premium design templates, an extensive library of widgets and apps,
          and detailed step-by-step guides.
        </p>
        <p className="text-sm text-blue-500 mb-0">
          Show More <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
        </p>
      </div>

      <div className="third flex-1 relative flex flex-col justify-between items-center">
        <div className="flex w-2/4 bg-blue-200 p-4 rounded-b-md items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl text-blue-500">9.8</h3>
            <p className="text-blue-500">Exceptional</p>
            <div className="my-4 flex items-center">
              <FontAwesomeIcon
                icon={faStar}
                className="ml-2 text-xs text-yellow-500"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="ml-2 text-xs text-yellow-500"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="ml-2 text-xs text-yellow-500"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="ml-2 text-xs text-yellow-500"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="ml-2 text-xs text-yellow-500"
              />
            </div>
          </div>
        </div>
        <button className="w-3/4 bg-blue-500 text-white py-2 px-4 mt-4 rounded-md">
          View
        </button>
      </div>
    </div>
  );
};

export default CardOne;
