import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Have a question or inquiry? Fill out the form below and we will get
            back to you as soon as possible.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-wrap -mx-4 mb-4">
              <div className="w-full px-4 mb-4">
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="w-full px-4 mb-4">
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="w-full px-4 mb-4">
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-block px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
