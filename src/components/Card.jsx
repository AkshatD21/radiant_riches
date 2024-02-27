import React from "react";
import laptopImage from "../assets/Laptop.png";

const Card = () => {
  return (
    <div className="main flex space-x-8">
      <div className="card flex flex-col pl-4">
        <div
          style={{
            width: "100%",
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="container"
        >
          <img src={laptopImage} alt="Laptop" />
        </div>

        <div className="offers flex space-x-2">
          <p
            style={{ borderRadius: "5px" }}
            className="text-sm bg-gray-300 text-blue-900 px-1 py-0.5 flex items-center"
          >
            25% Off
          </p>
          <p
            style={{ borderRadius: "5px" }}
            className="text-sm bg-gray-300 text-blue-800 px-1 py-0.5 flex items-center"
          >
            Limited Time
          </p>
        </div>

        <strong className=" text-md head text-gray-600 flex justify-center pt-2">
          Webbuilder 1
        </strong>
        <div className="text-md details-container flex flex-col pl-4">
          <p className="head text-gray-600 pt-2">
            Computer Modern classic with wix support
          </p>
          <div className="cost flex items-baseline py-2">
            <p style={{ fontSize: "25px" }} className="head text-gray-600">
              $39.96
            </p>
            <p className="head text-gray-500 text-xs-600 px-4">
              $49.96
              <span className="text-red-600 px-1">(20% Off)</span>
            </p>
          </div>
          <button
            style={{
              width: "100%",
            }}
            className="bg-blue-500 text-white py-2 px-4 mt-auto rounded-md mx-auto"
          >
            View Deal
          </button>
        </div>
      </div>

      <div className="card flex flex-col pl-4">
        <div
          style={{
            width: "100%",
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="container"
        >
          <img src={laptopImage} alt="Laptop" />
        </div>

        <div className="offers flex space-x-2">
          <p
            style={{ borderRadius: "5px" }}
            className="text-sm bg-gray-300 text-blue-900 px-1 py-0.5 flex items-center"
          >
            25% Off
          </p>
          <p
            style={{ borderRadius: "5px" }}
            className="text-sm bg-gray-300 text-blue-800 px-1 py-0.5 flex items-center"
          >
            Limited Time
          </p>
        </div>

        <strong className="text-md head text-gray-600 flex justify-center pt-2">
          Webbuilder 1
        </strong>
        <div className="text-md details-container flex flex-col pl-4">
          <p className="head text-gray-600 pt-2">
            Computer Modern classic with wix support
          </p>
          <div className="cost flex items-baseline py-2">
            <p style={{ fontSize: "25px" }} className="head text-gray-600">
              $39.96
            </p>
            <p className="head text-gray-500 text-xs-600 px-4">
              $49.96
              <span className="text-red-600 px-1">(20% Off)</span>
            </p>
          </div>
          <button
            style={{
              width: "100%",
            }}
            className="bg-blue-500 text-white py-2 px-4 mt-auto rounded-md mx-auto"
          >
            View Deal
          </button>
        </div>
      </div>

      <div className="card flex flex-col pl-4">
        <div
          style={{
            width: "100%",
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="container"
        >
          <img src={laptopImage} alt="Laptop" />
        </div>

        <div className="offers flex space-x-2">
          <p
            style={{ borderRadius: "5px" }}
            className="text-sm bg-gray-300 text-blue-900 px-1 py-0.5 flex items-center"
          >
            25% Off
          </p>
          <p
            style={{ borderRadius: "5px" }}
            className="text-sm bg-gray-300 text-blue-800 px-1 py-0.5 flex items-center"
          >
            Limited Time
          </p>
        </div>

        <strong className="text-md head text-gray-600 flex justify-center pt-2">
          Webbuilder 1
        </strong>
        <div className="text-md details-container flex flex-col pl-4">
          <p className="head text-gray-600 pt-2">
            Computer Modern classic with wix support
          </p>
          <div className="cost flex items-baseline py-2">
            <p style={{ fontSize: "25px" }} className="head text-gray-600">
              $39.96
            </p>
            <p className="head text-gray-500 text-xs-600 px-4">
              $49.96
              <span className="text-red-600 px-1">(20% Off)</span>
            </p>
          </div>
          <button
            style={{
              width: "100%",
            }}
            className="bg-blue-500 text-white py-2 px-4 mt-auto rounded-md mx-auto"
          >
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
