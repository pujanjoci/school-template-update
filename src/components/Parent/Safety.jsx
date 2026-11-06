import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import policiesData from './SafetyPolicies.json';

const Safety = () => {
  const [openSection, setOpenSection] = useState(null);
  const [expandAll, setExpandAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllPolicies, setShowAllPolicies] = useState(false);
  const [policies, setPolicies] = useState([]);
  const [email, setEmail] = useState('');
  const [popupMessage, setPopupMessage] = useState(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);

  useEffect(() => {
    setPolicies(policiesData);
  }, []);

  const toggleSection = (section) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = () => {
    if (email) {
      setPopupMessage(`Subscribed with ${email}`);
      setShowRemoveButton(true);
      setTimeout(() => {
        setPopupMessage(null);
        setShowRemoveButton(false);
      }, 3000);
    } else {
      setPopupMessage('Please enter a valid email address');
      setShowRemoveButton(false);
    }
    setEmail('');
  };

  const closePopup = () => {
    setPopupMessage(null);
    setShowRemoveButton(false);
  };

  const removeEmail = () => {
    setEmail('');
    setPopupMessage(null);
    setShowRemoveButton(false);
  };

  const toggleShowAll = () => {
    setShowAllPolicies(!showAllPolicies);
  };

  const filteredPolicies = policies.filter((policy) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;
    return (
      policy.title.toLowerCase().includes(query) ||
      policy.content.toLowerCase().includes(query)
    );
  });

  const displayedPolicies =
    showAllPolicies || searchTerm.trim().length > 0
      ? filteredPolicies
      : filteredPolicies.slice(0, 4);

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-b border-stone-300 pb-6 mb-8 text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="ty-kicker text-indigo-800 block mb-2">
              Campus Regulations &amp; Welfare
            </span>
            <h1 className="ty-section-heading text-stone-900">
              School Safety Policies
            </h1>
          </div>
          <p className="ty-support text-stone-600">
            Emergency Desk: (123) 456-7890
          </p>
        </div>

        {/* Search & Expand Controls */}
        <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search safety policies (e.g., emergency, health, cyber)..."
            aria-label="Search safety policies"
            className="flex-1 bg-white border border-stone-300 px-3.5 py-2 ty-support text-stone-800 focus:outline-none focus:border-indigo-900"
          />
          <button
            type="button"
            onClick={() => setExpandAll((prev) => !prev)}
            className="px-4 py-2 bg-white border border-stone-300 hover:border-indigo-900 ty-support font-semibold text-indigo-950 transition-colors"
          >
            {expandAll ? 'Collapse All' : 'Expand All Policies'}
          </button>
        </div>

        <div className="border-t border-stone-300 divide-y divide-stone-300 bg-white">
          {displayedPolicies.map((policy, index) => {
            const isOpen = expandAll || openSection === policy.key;
            return (
              <div
                key={policy.key}
                className="p-5 sm:p-6 cursor-pointer hover:bg-stone-50 transition-colors"
              >
                <div
                  className="flex justify-between items-center gap-4 text-left"
                  onClick={() => toggleSection(policy.key)}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="ty-support text-stone-400 font-medium">
                      0{index + 1}
                    </span>
                    <h2 className="ty-card-heading text-stone-900">
                      {policy.title}
                    </h2>
                  </div>
                  <span className="text-stone-600 text-sm flex-shrink-0">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <div
                  className={`policy-content overflow-hidden transition-all duration-300 text-left ${
                    isOpen ? 'h-auto mt-4 pt-3 border-t border-stone-200' : 'h-0'
                  }`}
                >
                  <p className="ty-body text-stone-700">{policy.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        {!showAllPolicies && searchTerm.trim().length === 0 && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShowAll}
              className="editorial-link text-indigo-900 font-semibold cursor-pointer focus:outline-none"
            >
              View All ({policies.length} Policies)
            </button>
          </div>
        )}

        <div className="mt-14 bg-white border border-stone-300 p-6 sm:p-8 text-center">
          <h2 className="ty-subheading text-stone-900 mb-2">
            Subscribe to Email Updates
          </h2>
          <p className="ty-support text-stone-600 mb-5">
            Receive campus weather advisories, health notices, and updated safety circulars.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              className="w-full p-2.5 border border-stone-300 focus:outline-none focus:border-indigo-900 transition duration-200 ty-body"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="w-full sm:w-auto border border-indigo-900 text-white bg-indigo-900 py-2.5 px-6 font-semibold text-sm hover:bg-white hover:text-indigo-900 transition duration-300"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Popup for validation message */}
      {popupMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-stone-950/60 z-50 p-4">
          <div className="bg-white p-6 sm:p-8 border border-stone-300 max-w-sm w-full text-center">
            <p className="ty-card-heading text-stone-900">{popupMessage}</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              {showRemoveButton && (
                <button
                  className="py-2 px-5 bg-yellow-400 text-stone-950 font-semibold text-sm hover:bg-stone-100 transition duration-200"
                  onClick={removeEmail}
                >
                  Remove
                </button>
              )}
              <button
                className="py-2 px-5 bg-indigo-900 text-white font-semibold text-sm hover:bg-indigo-800 transition duration-200"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Safety;
