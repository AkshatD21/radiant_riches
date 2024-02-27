import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="main flex flex-col md:flex-row md:space-x-32">
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg mb-4">Categories</h3>
          <ul>
            <li className="text-sm text-gray-400 mb-2">Web Builder</li>
            <li className="text-sm text-gray-400 mb-2">Hosting</li>
            <li className="text-sm text-gray-400 mb-2">Data Center</li>
            <li className="text-sm text-gray-400 mb-2">Robotic Automation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg mb-4">Contact</h3>
          <ul>
            <li className="text-sm text-gray-400 mb-2">Contact</li>
            <li className="text-sm text-gray-400 mb-2">Privacy Policy</li>
            <li className="text-sm text-gray-400 mb-2">Terms of Services</li>
            <li className="text-sm text-gray-400 mb-2">Categories</li>
            <li className="text-sm text-gray-400 mb-2">About</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
