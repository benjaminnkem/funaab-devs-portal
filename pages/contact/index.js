import { useState } from 'react';
import Head from "next/head"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    department: '',
    college: '',
    message: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform any other necessary action
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.department) {
      errors.department = 'Department is required';
    }

    if (!formData.college) {
      errors.college = 'College is required';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  return (
    <>
    <Head>
      <title>Contact - Funaab Devs</title>
    </Head>
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-purple-800 text-center">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`border rounded-md p-2 w-full ${errors.firstName ? 'border-red-500' : ''}`}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`border rounded-md p-2 w-full ${errors.lastName ? 'border-red-500' : ''}`}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="department" className="block text-gray-700 font-bold mb-2">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={`border rounded-md p-2 w-full ${errors.department ? 'border-red-500' : ''}`}
          />
          {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="college" className="block text-gray-700 font-bold mb-2">
            College
          </label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className={`border rounded-md p-2 w-full ${errors.college ? 'border-red-500' : ''}`}
          />
          {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`border rounded-md p-2 w-full ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border rounded-md p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default ContactForm;
