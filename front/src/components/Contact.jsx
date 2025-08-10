import React, { useState } from "react";
import ProfileImg from '../assets/h.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thank you! Message sent ✉️");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server error!");
    }
  };


  return (
    <section id="contact" className="py-20  text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start justify-between mb-9">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">Contact Me</h2>
            <div className="h-1 w-[30%] bg-[#F2AA4CFF]"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
            <span className="text-[#F2AA4CFF]"> -- </span> 04
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around px-0 md:px-10">


          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2"
          >
            <div className="mb-2">
              <label className="block mb-1 text-xl text-[#F2AA4CFF]">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg  text-black border-0 border-b-2 border-b-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-xl text-[#F2AA4CFF]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg  text-black border-0 border-b-2 border-b-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-xl text-[#F2AA4CFF]">Message</label>
              <textarea
                name="message"
                rows="1"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg  text-black border-0 border-b-2 border-b-gray-700 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#101820FF] hover:bg-[#F2AA4CFF]-600 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>

          <div className=" flex py-10 items-end justify-center">
            <img
              src={ProfileImg}
              alt="Profile"
              className="rounded-full shadow-lg w-50 h-90 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
