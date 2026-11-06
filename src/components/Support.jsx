import { useState } from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    message: '',
  });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleSupportChange = (e) => {
    const { name, value } = e.target;
    setSupportForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    if (!supportForm.name.trim() || !supportForm.email.trim() || !supportForm.message.trim()) {
      return;
    }
    setTicketSubmitted(true);
    setSupportForm({
      name: '',
      email: '',
      category: 'General Inquiry',
      message: '',
    });
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-left">
        <div className="mb-12 pb-6 border-b border-stone-300">
          <span className="ty-kicker text-indigo-800 block mb-2">
            Assistance &amp; Inquiries
          </span>
          <h1 className="ty-section-heading text-stone-900 mb-3">
            Support
          </h1>
          <p className="ty-body-lead text-stone-700">
            Welcome to our support page. Whether you need assistance, have a question, or want to provide feedback, we&apos;re here to help!
          </p>
        </div>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="ty-subheading text-stone-900 mb-5">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-stone-300 divide-y md:divide-y-0 md:divide-x divide-stone-300 bg-white">
            <div className="p-6">
              <p className="text-stone-900 font-semibold mb-2">For general inquiries:</p>
              <ul className="list-disc list-inside text-stone-700 space-y-1 ty-body">
                <li>Email: support@yourschool.edu</li>
                <li>Phone: +123 456 7890</li>
                <li>Office Hours: Sun – Fri, 8:30 AM – 4:00 PM</li>
              </ul>
            </div>
            <div className="p-6">
              <p className="text-stone-900 font-semibold mb-2">For technical support:</p>
              <ul className="list-disc list-inside text-stone-700 space-y-1 ty-body">
                <li>Email: techsupport@yourschool.edu</li>
                <li>Phone: +123 456 7890 ext. 123</li>
                <li>Portal &amp; Online Class Helpdesk</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-12">
          <h2 className="ty-subheading text-stone-900 mb-5">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-stone-300 border-y border-stone-300 bg-white px-6">
            <div className="py-5">
              <h3 className="ty-card-heading text-stone-900">
                Where can I find the academic calendar?
              </h3>
              <p className="ty-body text-stone-700 mt-2">
                The academic calendar can be found in the{' '}
                <Link to="/learning" className="text-indigo-700 font-medium hover:underline">
                  calendar section
                </Link>{' '}
                of our website.
              </p>
            </div>
            <div className="py-5">
              <h3 className="ty-card-heading text-stone-900">
                What are the school policies regarding...?
              </h3>
              <p className="ty-body text-stone-700 mt-2">
                Detailed school policies are available in our{' '}
                <Link to="/safety" className="text-indigo-700 font-medium hover:underline">
                  policies section
                </Link>
                .
              </p>
            </div>
            <div className="py-5">
              <h3 className="ty-card-heading text-stone-900">
                How can I contact my child&apos;s teacher?
              </h3>
              <p className="ty-body text-stone-700 mt-2">
                Contact information for teachers is usually available on the{' '}
                <Link to="/about" className="text-indigo-700 font-medium hover:underline">
                  teachers&apos; page
                </Link>{' '}
                of our website.
              </p>
            </div>
            <div className="py-5">
              <h3 className="ty-card-heading text-stone-900">
                What extracurricular activities are available?
              </h3>
              <p className="ty-body text-stone-700 mt-2">
                Information about extracurricular activities can be found in the{' '}
                <Link to="/learning" className="text-indigo-700 font-medium hover:underline">
                  activities section
                </Link>{' '}
                of our website.
              </p>
            </div>
            <div className="py-5">
              <h3 className="ty-card-heading text-stone-900">
                How do I report a student absence or check uniform guidelines?
              </h3>
              <p className="ty-body text-stone-700 mt-2">
                Uniform standards, bell schedules, and our quick absence notification form are available in the{' '}
                <Link to="/parent" className="text-indigo-700 font-medium hover:underline">
                  Parents&apos; Handbook
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Support Form */}
        <section>
          <h2 className="ty-subheading text-stone-900 mb-5">
            Submit a Support Request
          </h2>
          <form
            onSubmit={handleSupportSubmit}
            className="bg-white border border-stone-300 p-6 sm:p-8"
          >
            {ticketSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-300 text-green-900 ty-support flex items-center justify-between">
                <span>
                  Your support request has been logged. A staff coordinator will respond via email shortly.
                </span>
                <button
                  type="button"
                  onClick={() => setTicketSubmitted(false)}
                  className="text-xs font-semibold underline ml-4"
                >
                  Dismiss
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block ty-support font-medium text-stone-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={supportForm.name}
                  onChange={handleSupportChange}
                  required
                  className="p-2.5 block w-full border border-stone-300 focus:outline-none focus:border-indigo-900 ty-body"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block ty-support font-medium text-stone-700 mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={supportForm.email}
                  onChange={handleSupportChange}
                  required
                  className="p-2.5 block w-full border border-stone-300 focus:outline-none focus:border-indigo-900 ty-body"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="category"
                className="block ty-support font-medium text-stone-700 mb-2"
              >
                Support Category
              </label>
              <select
                id="category"
                name="category"
                value={supportForm.category}
                onChange={handleSupportChange}
                className="p-2.5 block w-full border border-stone-300 bg-white focus:outline-none focus:border-indigo-900 ty-body"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Student Portal & Login">Student Portal &amp; Login</option>
                <option value="Admissions & Records">Admissions &amp; Records</option>
                <option value="Transport & Campus Facilities">Transport &amp; Campus Facilities</option>
              </select>
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="block ty-support font-medium text-stone-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={supportForm.message}
                onChange={handleSupportChange}
                required
                className="p-2.5 block w-full border border-stone-300 focus:outline-none focus:border-indigo-900 ty-body"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-indigo-900 border border-indigo-900 text-white font-semibold text-sm py-2.5 px-7 hover:bg-white hover:text-indigo-900 transition-colors focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Support;
