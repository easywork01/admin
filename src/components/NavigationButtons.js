import { useState } from "react";

const NavigationButtons = () => {
  const [showDropdownSupplier, setShowDropdownSupplier] = useState(false);
  const [showDropdownTakeAway, setShowDropdownTakeAway] = useState(false);
  const [showDropdownCustomers, setShowDropdownCustomers] = useState(false);
  const [showDropdownAdmin, setshowDropdownAdmin] = useState(false);

  const dropdownItems = [
    "Reports",
    "Message Texts",
    "Meals",
    "Cuisines",
    "Categories & Tags",
    "FAQ & FSSAI Texts",
    "Menu Items",
    "Supplier Attributes",
    "Pending Approvals",
  ];

  const toggleDropdownSupplier = () => {
    setShowDropdownSupplier(!showDropdownSupplier);
  };

  const toggleDropdownTakeAway = () => {
    setShowDropdownTakeAway(!showDropdownTakeAway);
  };

  const toggleDropdownCustomers = () => {
    setShowDropdownCustomers(!showDropdownCustomers);
  };
  const toggleDropdownLogs = () => {
    setshowDropdownAdmin(!showDropdownAdmin);
  };

  return (
    <div className="relative bg-sky-700">
      <div className="relative inline-block">
        <button
          className="w-80 h-20 bg-sky-700 flex-1 border-r border-gray-500 focus:outline-none text-white hover:bg-gray-700 hover:text-white transition-colors duration-300"
          onClick={toggleDropdownSupplier}
        >
          Supplier
        </button>
        {showDropdownSupplier && (
          <div className="absolute left-0 top-full w-80 bg-white shadow-md">
            {dropdownItems.map((label, index) => (
              <button
                key={index}
                className="w-full h-20 flex justify-center items-center border border-gray-500 hover:bg-gray-600 focus:outline-none transition-colors duration-300 bg-sky-700 text-white"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative inline-block">
        <button
          className="w-80 h-20 bg-sky-700 flex-1 border-r border-gray-500 focus:outline-none text-white hover:bg-gray-700 hover:text-white transition-colors duration-300"
          onClick={toggleDropdownTakeAway}
        >
          TakeAway Points
        </button>
        {showDropdownTakeAway && (
          <div className="absolute left-0 top-full w-80 bg-white shadow-md">
            <button className="w-full h-20 flex justify-center items-center border border-gray-500 hover:bg-gray-600 focus:outline-none transition-colors duration-300 bg-sky-700 text-white">
              Reports
            </button>
          </div>
        )}
      </div>

      <div className="relative inline-block">
        <button
          className="w-80 h-20 bg-sky-700 flex-1 border-r border-gray-500 focus:outline-none text-white hover:bg-gray-700 hover:text-white transition-colors duration-300"
          onClick={toggleDropdownCustomers}
        >
          Customers
        </button>
        {showDropdownCustomers && (
          <div className="absolute left-0 top-full w-80 bg-white shadow-md">
            <button className="w-full h-20 flex justify-center items-center border border-gray-500 hover:bg-gray-600 focus:outline-none transition-colors duration-300 bg-sky-700 text-white">
              Reports
            </button>
          </div>
        )}
      </div>

      <div className="relative inline-block">
        <button
          className="w-80 h-20 bg-sky-700 flex-1 focus:outline-none text-white hover:bg-gray-700 hover:text-white transition-colors duration-300"
          onClick={toggleDropdownLogs}
        >
          Admin Setting
        </button>
        {showDropdownAdmin && (
          <div className="absolute left-0 top-full w-80 bg-white shadow-md">
            <button className="w-full h-20 flex justify-center items-center border border-gray-500 hover:bg-gray-600 focus:outline-none transition-colors duration-300 bg-sky-700 text-white">
              Logs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;
