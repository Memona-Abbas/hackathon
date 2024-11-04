import React, { useState } from "react";

function Login() {
  const [userType, setUserType] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    disease: "",
    contactNumber: "",
    specialization: "",
    schedule: "",
  });

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setIsLoggedIn(false); // Reset login status when user type changes
    setFormData({
      username: "",
      email: "",
      password: "",
      disease: "",
      contactNumber: "",
      specialization: "",
      schedule: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    alert("You are successfully logged in!");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({
      username: "",
      email: "",
      password: "",
      disease: "",
      contactNumber: "",
      specialization: "",
      schedule: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {/* Title */}
        <div className="bg-blue-600 p-4 rounded-t-lg text-center">
          <h2 className="text-white text-xl font-bold">Login</h2>
        </div>

        {/* User Type Selection */}
        <div className="mt-4">
          <label className="block text-black font-medium mb-2">Select User Type:</label>
          <select
            value={userType}
            onChange={handleUserTypeChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">--Select--</option>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        {/* Patient Form */}
        {userType === "Patient" && (
          <form onSubmit={handleLogin} className="mt-4">
            <label className="block text-black font-medium mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Username"
              required
            />

            <label className="block text-black font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Email"
              required
            />

            <label className="block text-black font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Password"
              required
            />

            <label className="block text-black font-medium mb-2">Disease</label>
            <input
              type="text"
              name="disease"
              value={formData.disease}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Disease"
              required
            />

            <label className="block text-black font-medium mb-2">Doctor's Schedule</label>
            <input
              type="text"
              name="schedule"
              value={formData.schedule}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Timing and Day (e.g., Mon 10:00 AM - 2:00 PM)"
              required
            />

            {!isLoggedIn ? (
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
                Login
              </button>
            ) : (
              <p className="text-center text-green-600 font-semibold mt-4">
                Patient is logged in.
              </p>
            )}
          </form>
        )}

        {/* Doctor Form */}
        {userType === "Doctor" && (
          <form onSubmit={handleLogin} className="mt-4">
            <label className="block text-black font-medium mb-2">Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Name"
              required
            />

            <label className="block text-black font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Email"
              required
            />

            <label className="block text-black font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Password"
              required
            />

            <label className="block text-black font-medium mb-2">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Contact Number"
              required
            />

            <label className="block text-black font-medium mb-2">Specialization</label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Specialization"
              required
            />

            <label className="block text-black font-medium mb-2">Schedule</label>
            <input
              type="text"
              name="schedule"
              value={formData.schedule}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Timing and Day (e.g., Mon 10:00 AM - 2:00 PM)"
              required
            />

            {!isLoggedIn ? (
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
                Login
              </button>
            ) : (
              <p className="text-center text-green-600 font-semibold mt-4">
                Doctor is logged in.
              </p>
            )}
          </form>
        )}

        {/* Logout Button */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-2 rounded-md mt-4"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
