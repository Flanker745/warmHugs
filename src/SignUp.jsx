import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email";
    }
    if (!passRegex.test(formData.password)) {
      errors.password =
        "Password should contain at least one number and special character";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!formData.mobile || formData.mobile.length !== 10) {
      errors.mobile = "Invalid mobile number";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("user", JSON.stringify(formData)); // Save user data in localStorage
      navigate("/login");
    }
  };

  return (
    <div className="sign-up-container p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name (Optional)"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Street, Colony, Nearby"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>
        <button className="bg-blue-500 text-white w-full p-3 rounded-lg">
          Sign Up
        </button>
      </form>
      <div className="flex text-neutral-700 text-[18px]  mt-6  gap-4">
        <p>Already have account?</p>
        <Link className="underline text-blue-500" to={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
