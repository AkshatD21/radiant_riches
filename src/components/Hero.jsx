import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCircleCheck,
  faCaretDown,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import CardTwo from "./CardTwo";
import CardOne from "./CardOne";
import CardThree from "./CardThree";
import CardOneChange from "./CardOneChange";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="font-inter py-6 bg-FBFCFD">
      <h1 className="text-4xl font-regular text-gray-800 py-0.5">
        Best Website builders in the US
      </h1>

      <div className="midline flex justify-between border-t border-gray-300 border-b py-2 my-4">
        <div className="first flex px-2">
          <p className="text-sm text-gray-500 flex items-center">
            <FontAwesomeIcon icon={faCircleCheck} className="mr-3" />
            Last Updated - February 22, 2020
          </p>
          <p className="text-sm text-gray-500 ml-5 flex items-center">
            <FontAwesomeIcon icon={faCircleInfo} className="mr-3" />
            Advertising Disclosure
          </p>
        </div>

        <div className="second text-sm text-gray-500 flex items-center mr-4">
          Top Relevant
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
        </div>
      </div>

      <div className="subheading flex justify-between">
        <div className="flex space-x-12">
          <span className="text-gray-500 ml-4">Tools</span>
          <span className="text-gray-500">AWS Builder</span>
          <span className="text-gray-500">Start Build</span>
          <span className="text-gray-500">Brand Supplies</span>
          <span className="text-gray-500">Tooling</span>
          <span className="text-gray-500">BlueHosting</span>
        </div>
      </div>

      <div className="subheading flex justify-between py-4">
        <div className="flex space-x-4">
          <span className="text-gray-500 text-xs">
            Home{" "}
            <FontAwesomeIcon icon={faGreaterThan} className="ml-2 text-xxs" />
          </span>
          <span className="text-gray-500 text-xs">
            Hosting for all{" "}
            <FontAwesomeIcon icon={faGreaterThan} className="ml-2 text-xxs" />
          </span>
          <span className="text-gray-500 text-xs">
            Hosting{" "}
            <FontAwesomeIcon icon={faGreaterThan} className="ml-2 text-xxs" />
          </span>
          <span className="text-gray-500 text-xs">
            Hosting6{" "}
            <FontAwesomeIcon icon={faGreaterThan} className="ml-2 text-xxs" />
          </span>
          <span className="text-gray-500 text-xs">Hosting5</span>
        </div>
      </div>
      <CardOne />
      <CardTwo />
      <CardOneChange />
      <CardThree />
      <div style={{ fontSize: "25px" }} className="text-gray-700 pt-6">
        <h1>Related deals you might like for</h1>
      </div>
      <Card />
    </div>
  );
};

export default Hero;
