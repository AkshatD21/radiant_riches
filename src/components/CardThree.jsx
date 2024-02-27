import React from "react";
import laptopImage from "../assets/Laptop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faStar,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const CardThree = () => {
  return (
    <div className="relative bg-FFFF rounded-md flex pt-6 pb-4">
      <div className="first flex flex-col items-center py-10 flex-1 text-gray-600">
        <img src={laptopImage} alt="Laptop" />
        <p className="pt-4">CDK</p>
      </div>

      <div className="second flex-1">
        <p className="text-xs text-gray-600 mb-3">
          <span className="text-xs text-gray-600 font-bold text-gray-600">
            CDK Resposive Builder:
          </span>{" "}
          An extensive library of widgets and apps, and detailed step-by-step
          guides
        </p>
        <p
          style={{ fontSize: "10px" }}
          className="bg-gray-300 text-blue-800 py-1 pl-3 rounded w-16"
        >
          25% Off
        </p>
        <p className="text-xs pt-2 text-gray-600 font-bold mb-2">
          Main Highlights:
        </p>
        <div className="leftShift pl-4">
          <p className="text-xs bg-orange-200 rounded text-gray-600 mb-4 p-2">
            <div className="lineOne flex items-center pb-1">
              <p className="bg-white rounded text-blue-600 p-1 mr-2">9.8</p>
              <p>Building Responsive</p>
            </div>
            <div className="lineTwo flex items-center pb-1">
              <p className="bg-white rounded text-blue-600 p-1 mr-2">8.9</p>
              <p>Cool</p>
            </div>
            <div className="lineThree flex items-center pb-1">
              <p className="bg-white rounded text-blue-600 p-1 mr-2">8.9</p>
              <p>Docs</p>
            </div>
          </p>
        </div>

        <div className="points">
          <p className="text-sm text-gray-800 pb-2">Why we love it</p>
          <div className="lineOne flex items-center pb-1">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-xs bg-blue-200 text-blue-500 rounded-full p-1"
            />
            <p className="pl-1 text-xs text-gray-600">Documentation</p>
          </div>
          <div className="lineOne flex items-center pb-1">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-xs bg-blue-200 text-blue-500 rounded-full p-1"
            />
            <p className="pl-1 text-xs text-gray-600">Easy Use</p>
          </div>
          <div className="lineOne flex items-center pb-1">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-xs bg-blue-200 text-blue-500 rounded-full p-1"
            />
            <p className="pl-1 text-xs text-gray-600">Out of box</p>
          </div>
        </div>
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

export default CardThree;
