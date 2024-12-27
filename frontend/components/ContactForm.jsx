"use client";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-[#D7E48E] py-16 px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-2">CONTACT US</h1>
          <h2 className="text-4xl font-bold mb-4">Drop a Message Here</h2>
          <p className="text-gray-700">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
                className="w-full px-4 py-3 rounded-md bg-white"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NO."
                className="w-full px-4 py-3 rounded-md bg-white"
              />
            </div>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                required
                className="w-full px-4 py-3 rounded-md bg-white"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                required
                className="w-full px-4 py-3 rounded-md bg-white"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="SUBJECT"
              required
              className="w-full px-4 py-3 rounded-md bg-white"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="WRITE MESSAGE"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-md bg-white"
            ></textarea>
          </div>
          <div className="text-sm text-gray-600">
            Your email address will not be published. Required fields are marked
            *
          </div>
          <div>
            <button
              type="submit"
              className="w-32 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
