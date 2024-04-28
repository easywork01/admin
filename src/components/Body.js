import React, { useState } from "react";

const Body3 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (inputPhoneNumber.length <= 10) {
      // Ensure length is less than or equal to 10
      setPhoneNumber(inputPhoneNumber);
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmitPhoneNumber = (e) => {
    e.preventDefault();
    // Here you would typically send the phone number to your server to request OTP
    // For demonstration purposes, let's simulate OTP sent successfully
    setOtpSent(true);
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    // Here you would typically send the OTP to your server for verification
    console.log("OTP verified successfully");
    // After OTP verification, you can proceed with login or other actions
  };
  return (
    <div className="body-container bg-stone-200 h-screen flex justify-center items-center">
      {!otpSent ? (
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
          onSubmit={handleSubmitPhoneNumber}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="tel"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Send OTP
            </button>
          </div>
        </form>
      ) : (
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
          onSubmit={handleSubmitOtp}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Verify OTP</h2>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="otp"
            >
              OTP
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="otp"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Verify OTP
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default Body3;
