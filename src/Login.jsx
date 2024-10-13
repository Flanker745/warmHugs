import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', pass: '' });
  const [err, setErr] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email';
    }
    if (formData.pass === '') {
      errors.pass = 'Password is required';
    }
    setErr(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.pass) {
        // Update the stored user data to include login: true
        const updatedUser = { ...storedUser, login: true };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        
        navigate('/');
        window.location.reload(); // Reload the page

      } else {
        setErr({ login: 'Invalid credentials' });
      }
    }
  };

  return (
    <div className="login-container p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border p-2 w-full"
          />
          {err.email && <p className="text-red-500 text-sm">{err.email}</p>}
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={formData.pass}
            onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
            className="border p-2 w-full"
          />
          {err.pass && <p className="text-red-500 text-sm">{err.pass}</p>}
        </div>
        {err.login && <p className="text-red-500 text-sm">{err.login}</p>}
        <button className="bg-blue-500 text-white w-full p-3 rounded-lg">Login</button>
      </form>
      <div className='flex text-neutral-700 text-[18px] mt-6 gap-4'>
        <p>Don't have an account?</p> 
        <Link className='underline text-blue-500' to={"/signUp"}>Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
