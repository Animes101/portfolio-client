// import { useState } from "react";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formData.name || !formData.email || !formData.message) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     // For now, just log data
//     console.log("Form submitted:", formData);
//     setSubmitted(true);

//     // Clear form
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="bg-backgroundDark  h-screen dark:bg-backgroundDark text-textColor ">
//       <div className="container mx-auto py-20 px-4">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold mb-4 text-center text-buttonBankground dark:text-textColor">Contact Me</h1>
//       <hr className="border-t-2 border-buttonBankground dark:border-textColor w-full mb-10" />

//       {submitted && (
//         <div className="bg-green-100 text-green-800 p-4 mb-6 rounded">
//           Your message has been sent successfully!
//         </div>
//       )}

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-xl mx-auto p-8 rounded-lg shadow-md  border-2 border-buttonBankground dark:border-textColor "
//       >
//         <div className="mb-6">
//           <label className="block mb-2 font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="input input-bordered w-full bg-transparent border-textColor"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block mb-2 font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="your@email.com"
//             className="input input-bordered w-full bg-transparent border-textColor o"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block mb-2 font-medium">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your message..."
//             className="textarea textarea-bordered w-full bg-transparent border-textColor"
//             rows={5}
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="btn bg-buttonBankground text-buttonTextColor w-full"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default ContactPage;


import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-backgroundDark min-h-screen dark:bg-backgroundDark text-textColor">
      <div className="container mx-auto py-20 px-4">

        {/* Heading */}
        <h1
          data-aos="fade-down"
          className="text-4xl font-bold mb-4 text-center text-buttonBankground dark:text-textColor"
        >
          Contact Me
        </h1>

        {/* Line */}
        <hr
          data-aos="zoom-in"
          data-aos-delay="200"
          className="border-t-2 border-buttonBankground dark:border-textColor w-full mb-10"
        />

        {/* Success Message */}
        {submitted && (
          <div
            data-aos="fade-up"
            className="bg-green-100 text-green-800 p-4 mb-6 rounded"
          >
            Your message has been sent successfully!
          </div>
        )}

        {/* Form */}
        <form
          data-aos="fade-up"
          data-aos-delay="300"
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto p-8 rounded-lg shadow-md border-2 border-buttonBankground dark:border-textColor"
        >
          {/* Name */}
          <div data-aos="fade-right" data-aos-delay="400" className="mb-6">
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full bg-transparent border-textColor"
              required
            />
          </div>

          {/* Email */}
          <div data-aos="fade-left" data-aos-delay="500" className="mb-6">
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="input input-bordered w-full bg-transparent border-textColor"
              required
            />
          </div>

          {/* Message */}
          <div data-aos="fade-right" data-aos-delay="600" className="mb-6">
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="textarea textarea-bordered w-full bg-transparent border-textColor"
              rows={5}
              required
            ></textarea>
          </div>

          {/* Button */}
          <div data-aos="zoom-in" data-aos-delay="700">
            <button
              type="submit"
              className="btn bg-buttonBankground text-buttonTextColor w-full"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ContactPage;
