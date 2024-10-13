import React, { useEffect, useState } from "react";
import { IoPerson, IoMail, IoLockClosed, IoCall, IoLocationSharp } from "react-icons/io5"; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function Profile() {
  const randomNumber = Math.floor(Math.random() * 16) + 1;

// Dynamically construct the path to the image
const randomAvatar = require(`./assets/avatars/${randomNumber}.png`);
  const navigate = useNavigate(); // Initialize useNavigate
  const [profilePic] = useState(randomAvatar);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    address: "",
    email: "",
    mobile: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [successMessage, setSuccessMessage] = useState(""); 
  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData) {
      setUserData(storedData);
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        firstName: storedData.firstName,
        address: storedData.address,
        email: storedData.email,
        mobile: storedData.mobile,
      }));
    }
  }, []);

  const handleChangePassword = () => {
    setErrorMessage(""); 
    setSuccessMessage(""); 

    if (!userDetails.currentPassword || !userDetails.newPassword || !userDetails.confirmPassword) {
      setErrorMessage("All password fields are required.");
      return;
    }

    if (userDetails.newPassword === userDetails.confirmPassword) {
      if (userDetails.newPassword.length < 6) {
        setErrorMessage("New password must be at least 6 characters long.");
        return;
      }

      const updatedUserData = { ...userData, password: userDetails.newPassword };
      localStorage.setItem("user", JSON.stringify(updatedUserData)); 
      setSuccessMessage("Password changed successfully!"); 
      setIsChangingPassword(false);
    } else {
      setErrorMessage("Passwords do not match. Please try again.");
    }
  };

  const handleLogout = () => {
    if (userData) {
      const updatedUserData = { ...userData, login: false }; // Set login to false
      localStorage.setItem("user", JSON.stringify(updatedUserData)); // Update user data in localStorage
    }
    navigate('/login'); // Redirect to login page
    window.location.reload(); // Reload the page
  };
  

  return (
    <div className="min-h-screen w-full bg-white text-gray-700 p-6">
      <h1 className="border-b border-gray-300 pb-4 text-4xl font-bold text-center">Profile</h1>

      <div className="flex justify-center mt-8">
        <div className="relative w-[150px] h-[150px]">
          <img src={profilePic} alt="Profile" className="rounded-full w-full h-full object-cover shadow-lg" />
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6 mb-20">
        <div className="flex items-center mb-6">
          <IoPerson className="text-2xl text-blue-500 mr-4" />
          <div className="flex-1">
            <p className="text-sm text-gray-500">Name</p>
            <span className="text-lg font-semibold">{userDetails.firstName}</span>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <IoLocationSharp className="text-2xl text-red-500 mr-4" />
          <div className="flex-1">
            <p className="text-sm text-gray-500">Address</p>
            <span className="text-lg font-semibold">{userDetails.address}</span>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <IoMail className="text-2xl text-green-500 mr-4" />
          <div className="flex-1">
            <p className="text-sm text-gray-500">Email</p>
            <span className="text-lg font-semibold">{userDetails.email}</span>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <IoCall className="text-2xl text-purple-500 mr-4" />
          <div className="flex-1">
            <p className="text-sm text-gray-500">Mobile No.</p>
            <span className="text-lg font-semibold">{userDetails.mobile}</span>
          </div>
        </div>

        <div className="mt-8">
          {!isChangingPassword ? (
            <button
              className="flex items-center justify-center w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
              onClick={() => setIsChangingPassword(true)}
            >
              <IoLockClosed className="mr-2" />
              Change Password
            </button>
          ) : (
            <div className="mt-6">
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1" htmlFor="currentPassword">
                  Current Password
                </label>
                <input
                  id="currentPassword"
                  type="password"
                  placeholder="Enter current password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={userDetails.currentPassword}
                  onChange={(e) => setUserDetails({ ...userDetails, currentPassword: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  placeholder="Enter new password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={userDetails.newPassword}
                  onChange={(e) => setUserDetails({ ...userDetails, newPassword: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1" htmlFor="confirmPassword">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={userDetails.confirmPassword}
                  onChange={(e) => setUserDetails({ ...userDetails, confirmPassword: e.target.value })}
                />
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {successMessage && <p className="text-green-500">{successMessage}</p>}
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition"
                onClick={handleChangePassword}
              >
                Update Password
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition mt-2"
                onClick={() => setIsChangingPassword(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="mt-8">
          <button
            className="flex items-center justify-center w-full bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition"
            onClick={handleLogout} // Add logout functionality
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
