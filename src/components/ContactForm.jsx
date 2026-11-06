import { useState } from 'react';

const ContactForm = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: 'General Inquiry',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting || isSubmitted) {
      return;
    }

    setIsSubmitting(true);

    fetch('https://formspree.io/f/mpzvvebg', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        setIsSubmitted(true);
        setFormData(initialFormData);
        setIsSubmitting(false);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 60000);
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FAF9F6] border border-stone-300 p-6 sm:p-8 text-left"
      >
        <div className="mb-6 pb-3 border-b border-stone-300 flex items-baseline justify-between gap-2">
          <h2 className="ty-subheading text-stone-900">
            Contact Us
          </h2>
          <span className="ty-support text-stone-500">
            Response within 1–2 school days
          </span>
        </div>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-300 text-green-900 ty-support">
            <p className="font-semibold">Thank you for contacting St. Joseph’s Academy.</p>
            <p className="mt-0.5 text-green-800">
              Your inquiry has been received by our administration office.
            </p>
          </div>
        )}

        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              className="block text-stone-700 ty-support font-medium mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none ty-body bg-white border-b-2 border-stone-300 focus:border-indigo-900 w-full py-2.5 px-3 text-stone-800 leading-tight focus:outline-none transition-colors"
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-stone-700 ty-support font-medium mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none ty-body bg-white border-b-2 border-stone-300 focus:border-indigo-900 w-full py-2.5 px-3 text-stone-800 leading-tight focus:outline-none transition-colors"
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              className="block text-stone-700 ty-support font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none ty-body bg-white border-b-2 border-stone-300 focus:border-indigo-900 w-full py-2.5 px-3 text-stone-800 leading-tight focus:outline-none transition-colors"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-stone-700 ty-support font-medium mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="appearance-none ty-body bg-white border-b-2 border-stone-300 focus:border-indigo-900 w-full py-2.5 px-3 text-stone-800 leading-tight focus:outline-none transition-colors"
              id="phone"
              type="text"
              placeholder="Optional"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            className="block text-stone-700 ty-support font-medium mb-2"
            htmlFor="department"
          >
            Department / Topic
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="ty-body bg-white border-b-2 border-stone-300 focus:border-indigo-900 w-full py-2.5 px-3 text-stone-800 leading-tight focus:outline-none transition-colors"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Admissions & Campus Tour">Admissions &amp; Campus Tour</option>
            <option value="Academics & Curriculum">Academics &amp; Curriculum</option>
            <option value="Student Welfare & Counseling">Student Welfare &amp; Counseling</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            className="block text-stone-700 ty-support font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="appearance-none ty-body bg-white border-b-2 border-stone-300 focus:border-indigo-900 w-full py-2.5 px-3 text-stone-800 leading-tight focus:outline-none transition-colors"
            id="message"
            placeholder="Something to chat about."
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            className={`border border-indigo-900 bg-indigo-900 hover:bg-white hover:text-indigo-900 text-[15px] text-white font-semibold py-2.5 px-7 transition-colors duration-300 focus:outline-none ${
              isSubmitting || isSubmitted ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted' : 'Submit'}
          </button>
          <span className="ty-support text-stone-500">
            Direct line: (123) 456-7890
          </span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
