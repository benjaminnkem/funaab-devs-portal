import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

type FormDataProps = {
  fullName: string;
  department: string;
  college: string;
  message: string;
  email: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState({} as FormDataProps);
  const [errors, setErrors] = useState({} as FormDataProps);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({} as FormDataProps);
      // Submit the form or perform any other necessary action
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors: FormDataProps = {} as FormDataProps;

    if (!formData.fullName) {
      errors.fullName = "Full Name is required";
    }

    if (!formData.department) {
      errors.department = "Department is required";
    }

    if (!formData.college) {
      errors.college = "College is required";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  return (
    <>
      <Head>
        <title>Contact - Funaab Devs</title>
      </Head>

      <Navbar bgColor="bg-white" textColor="text-gray-900" />
      <main className="bg-gray-50">
        <div className="grid items-center gap-4 grid-cols-1 md:grid-cols-2 py-14 mx-auto max-w-[1488px] w-11/12">
          <div>
            <Image
              src={`/svgs/defaults/get-in-touch.svg`}
              alt="404 Page Not Found"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>

          <div>
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-bold my-4 text-center uppercase">Send Us A Message</h2>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="sm:grid block grid-cols-2 gap-2">
                  <div className="my-1">
                    <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`border rounded-md p-2 w-full focus:outline-none ${
                        errors.fullName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="my-1">
                    <label htmlFor="department" className="block text-gray-700 font-semibold mb-2">
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={(e) => handleChange(e)}
                      className={`border rounded-md p-2 w-full focus:outline-none ${
                        errors.department ? "border-red-500" : ""
                      }`}
                    />
                    {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                  </div>

                  <div className="my-1">
                    <label htmlFor="college" className="block text-gray-700 font-semibold mb-2">
                      College
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={(e) => handleChange(e)}
                      className={`border rounded-md p-2 w-full focus:outline-none ${
                        errors.college ? "border-red-500" : ""
                      }`}
                    />
                    {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
                  </div>

                  <div className="my-1">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange(e)}
                      className={`border rounded-md p-2 w-full focus:outline-none ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="my-1" style={{ gridColumn: "1/3" }}>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleChange(e)}
                      className={`border rounded-md p-2 w-full focus:outline-none resize-none ${
                        errors.message ? "border-red-500" : ""
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-600 duration-150 text-white border-2 border-transparent font-bold py-2 px-4 rounded focus:outline-none focus:border-purple-400 active:border-purple-400"
                >
                  Submit <i className="ri-send-plane-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer bgColor="bg-gray-50" textColor="text-slate-900"></Footer>
    </>
  );
};

export default ContactForm;
