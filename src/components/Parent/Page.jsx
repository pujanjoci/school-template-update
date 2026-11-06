import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Page.css';

import Uniform from '../../assets/Parent/school_uniform.jpg';
import Holiday from '../../assets/Parent/Holiday.jpg';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [showAbsenceForm, setShowAbsenceForm] = useState(false);
  const [absenceData, setAbsenceData] = useState({ studentName: '', grade: '', reason: '' });
  const [absenceSubmitted, setAbsenceSubmitted] = useState(false);

  const goToPage = (targetPage) => {
    if (targetPage === currentPage || targetPage < 1 || targetPage > 4) return;
    setAnimationDirection(targetPage > currentPage ? 'next' : 'prev');
    setTimeout(() => {
      setCurrentPage(targetPage);
      setAnimationDirection(null);
    }, 350);
  };

  const nextPage = () => {
    if (currentPage < 4) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' && currentPage < 4) nextPage();
      if (e.key === 'ArrowLeft' && currentPage > 1) prevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleAbsenceSubmit = (e) => {
    e.preventDefault();
    setAbsenceSubmitted(true);
    setAbsenceData({ studentName: '', grade: '', reason: '' });
    setTimeout(() => {
      setAbsenceSubmitted(false);
      setShowAbsenceForm(false);
    }, 3500);
  };

  const pageTabs = [
    { id: 1, title: '1. Welcome' },
    { id: 2, title: '2. Uniform' },
    { id: 3, title: '3. Holiday & Absence' },
    { id: 4, title: '4. Safety First' },
  ];

  let pageContent;
  switch (currentPage) {
    case 1:
      pageContent = (
        <div
          className={`page page1 border border-stone-300 p-6 sm:p-10 md:p-12 ${
            animationDirection === 'next' ? 'page-next' : ''
          } ${animationDirection === 'prev' ? 'page-prev' : ''}`}
        >
          <div className="w-full flex items-center justify-between border-b border-stone-200 pb-3 ty-support font-medium text-stone-500">
            <span>Parent Information Folio</span>
            <span>Section I of IV</span>
          </div>

          <div className="text-center max-w-2xl mx-auto my-auto py-8">
            <span className="text-xl sm:text-2xl font-display text-stone-500 block">
              For the
              <h1 className="ty-section-heading text-yellow-500 mt-1 mb-5">
                PARENTS
              </h1>
            </span>
            <p className="ty-body-lead text-stone-700 mb-3">
              Dear parents, we are excited to share with you the achievements and growth of your children at our school.
            </p>
            <p className="ty-body text-stone-700 mb-8">
              Our school is a place where your childrens can learn and grow.
            </p>

            {/* Quick Daily Schedule Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border border-stone-200 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 bg-[#FAF9F6] text-left">
              <div className="p-4">
                <span className="ty-support text-indigo-800 font-semibold block">Morning Bell</span>
                <p className="ty-body font-medium text-stone-900 mt-0.5">8:00 AM Assembly</p>
                <p className="ty-support text-stone-500">Gates open at 7:40 AM</p>
              </div>
              <div className="p-4">
                <span className="ty-support text-indigo-800 font-semibold block">Dismissal</span>
                <p className="ty-body font-medium text-stone-900 mt-0.5">3:30 PM Regular</p>
                <p className="ty-support text-stone-500">Clubs until 4:30 PM</p>
              </div>
              <div className="p-4">
                <span className="ty-support text-indigo-800 font-semibold block">Parent Desk</span>
                <p className="ty-body font-medium text-stone-900 mt-0.5">Mon – Fri, 8–5 PM</p>
                <p className="ty-support text-stone-500">Room 101, Admin Block</p>
              </div>
            </div>
          </div>

          <div className="w-full pt-5 border-t border-stone-200 flex items-center justify-between">
            <h2 className="ty-card-heading text-stone-800">Page 1</h2>
            <div className="flex items-center gap-3">
              <span className="ty-support text-stone-500 hidden sm:inline">Next: Uniform Guide</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="border border-indigo-900 text-white bg-indigo-900 p-3 cursor-pointer hover:text-indigo-900 hover:bg-white transition-colors"
                onClick={nextPage}
              />
            </div>
          </div>
        </div>
      );
      break;

    case 2:
      pageContent = (
        <div
          className={`page page2 border border-stone-300 p-6 sm:p-10 md:p-12 ${
            animationDirection === 'next' ? 'page-next' : ''
          } ${animationDirection === 'prev' ? 'page-prev' : ''}`}
        >
          <div className="w-full flex items-center justify-between border-b border-stone-200 pb-3 ty-support font-medium text-stone-500">
            <span>Parent Information Folio</span>
            <span>Section II of IV</span>
          </div>

          <div className="max-w-3xl mx-auto my-auto py-6">
            <div className="text-center mb-6">
              <h1 className="ty-section-heading text-blue-600 mb-3">
                Uniform
              </h1>
              <p className="ty-body text-stone-700 max-w-xl mx-auto">
                Students are required to wear the designated school uniform every day, which includes a navy blue blazer with the school emblem, a white dress shirt, gray trousers and black dress shoes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6">
                <img
                  src={Uniform}
                  alt="School Uniform"
                  className="mx-auto max-h-56 w-full object-cover border border-stone-300"
                />
              </div>
              <div className="md:col-span-6 bg-[#FAF9F6] border border-stone-200 p-4 text-left space-y-2.5">
                <h3 className="ty-support font-semibold text-stone-900 border-b border-stone-200 pb-1.5">
                  Weekly Attire Schedule
                </h3>
                <p className="ty-support text-stone-700">
                  <strong className="text-stone-900">Sun – Thu:</strong> Formal Navy Blazer, White Shirt, School Tie, Grey Trousers/Skirt &amp; Polished Black Shoes.
                </p>
                <p className="ty-support text-stone-700">
                  <strong className="text-stone-900">Friday (P.E. &amp; House Day):</strong> Designated House Tracksuit, House Polo Shirt &amp; White Athletic Trainers.
                </p>
                <p className="ty-support text-stone-700">
                  <strong className="text-stone-900">Identification:</strong> Student ID lanyard must be worn visibly on campus.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full pt-5 border-t border-stone-200 flex items-center justify-between">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="border border-indigo-900 text-white bg-indigo-900 p-3 cursor-pointer hover:text-indigo-900 hover:bg-white transition-colors"
              onClick={prevPage}
            />
            <h2 className="ty-card-heading text-stone-800">Page 2</h2>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="border border-indigo-900 text-white bg-indigo-900 p-3 cursor-pointer hover:text-indigo-900 hover:bg-white transition-colors"
              onClick={nextPage}
            />
          </div>
        </div>
      );
      break;

    case 3:
      pageContent = (
        <div
          className={`page page3 border border-stone-300 p-6 sm:p-10 md:p-12 ${
            animationDirection === 'next' ? 'page-next' : ''
          } ${animationDirection === 'prev' ? 'page-prev' : ''}`}
        >
          <div className="w-full flex items-center justify-between border-b border-stone-200 pb-3 ty-support font-medium text-stone-500">
            <span>Parent Information Folio</span>
            <span>Section III of IV</span>
          </div>

          <div className="text-center max-w-2xl mx-auto my-auto py-6">
            <h1 className="ty-section-heading text-green-600 mb-3">
              Holiday &amp; Absence
            </h1>
            <p className="ty-body text-stone-700 mb-5">
              Students are expected to attend school regularly and on time. If your child will be absent due to illness or other reasons, please inform the school office as soon as possible. Planned absences, such as for family vacations, should be communicated to the school well in advance. Note that extended absences during term time are discouraged as they can impact your child&apos;s learning.
            </p>

            {!showAbsenceForm ? (
              <div>
                <img
                  src={Holiday}
                  alt="Holiday"
                  className="mx-auto max-h-48 w-auto object-cover border border-stone-300 mb-4"
                />
                <button
                  onClick={() => setShowAbsenceForm(true)}
                  className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-5 py-2 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Notify Office of Student Absence
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleAbsenceSubmit}
                className="bg-[#FAF9F6] border border-stone-300 p-4 text-left max-w-md mx-auto space-y-3"
              >
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <span className="ty-support font-semibold text-stone-900">Quick Absence Notice</span>
                  <button
                    type="button"
                    onClick={() => setShowAbsenceForm(false)}
                    className="ty-support text-stone-500 hover:text-stone-900"
                  >
                    Cancel
                  </button>
                </div>
                {absenceSubmitted ? (
                  <p className="ty-support text-green-700 font-medium py-3 text-center">
                    Absence notice recorded. The class teacher and office have been notified.
                  </p>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Student Name"
                        required
                        value={absenceData.studentName}
                        onChange={(e) => setAbsenceData({ ...absenceData, studentName: e.target.value })}
                        className="p-2 border border-stone-300 ty-support bg-white w-full focus:outline-none focus:border-indigo-900"
                      />
                      <input
                        type="text"
                        placeholder="Grade / Section"
                        required
                        value={absenceData.grade}
                        onChange={(e) => setAbsenceData({ ...absenceData, grade: e.target.value })}
                        className="p-2 border border-stone-300 ty-support bg-white w-full focus:outline-none focus:border-indigo-900"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Date(s) & Reason for Absence"
                      required
                      value={absenceData.reason}
                      onChange={(e) => setAbsenceData({ ...absenceData, reason: e.target.value })}
                      className="p-2 border border-stone-300 ty-support bg-white w-full focus:outline-none focus:border-indigo-900"
                    />
                    <button
                      type="submit"
                      className="w-full bg-green-700 text-white py-2 text-xs font-semibold hover:bg-green-800 transition-colors"
                    >
                      Submit Notice
                    </button>
                  </>
                )}
              </form>
            )}
          </div>

          <div className="w-full pt-5 border-t border-stone-200 flex items-center justify-between">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="border border-indigo-900 text-white bg-indigo-900 p-3 cursor-pointer hover:text-indigo-900 hover:bg-white transition-colors"
              onClick={prevPage}
            />
            <h2 className="ty-card-heading text-stone-800">Page 3</h2>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="border border-indigo-900 text-white bg-indigo-900 p-3 cursor-pointer hover:text-indigo-900 hover:bg-white transition-colors"
              onClick={nextPage}
            />
          </div>
        </div>
      );
      break;

    case 4:
      pageContent = (
        <div
          className={`page page3 border border-stone-300 p-6 sm:p-10 md:p-12 ${
            animationDirection === 'next' ? 'page-next' : ''
          } ${animationDirection === 'prev' ? 'page-prev' : ''}`}
        >
          <div className="w-full flex items-center justify-between border-b border-stone-200 pb-3 ty-support font-medium text-stone-500">
            <span>Parent Information Folio</span>
            <span>Section IV of IV</span>
          </div>

          <div className="text-center max-w-xl mx-auto my-auto py-8">
            <h1 className="ty-section-heading text-red-600 mb-4">
              Safety First
            </h1>
            <p className="ty-body-lead text-stone-700 mb-6">
              All students must follow school rules and guidelines to ensure a secure and safe environment for everyone on school grounds.
            </p>

            <div className="bg-[#FAF9F6] border border-stone-200 p-4 mb-6 text-left ty-support text-stone-700 space-y-1.5">
              <p><strong className="text-stone-900">Visitor Check-In:</strong> All guests must register at the main gate and wear a visitor pass.</p>
              <p><strong className="text-stone-900">Authorized Pick-Up:</strong> Primary students are released only to registered parents or guardians.</p>
              <p><strong className="text-stone-900">Health &amp; First Aid:</strong> Full-time school nurse available in the Campus Health Center.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/safety"
                className="inline-block border border-red-600 bg-red-600 px-6 py-3 text-[15px] font-semibold text-white hover:text-red-600 hover:bg-white transition-colors duration-300"
              >
                Safety Measures
              </Link>
              <Link
                to="/support"
                className="inline-block border border-stone-300 bg-white px-6 py-3 text-[15px] font-medium text-stone-800 hover:border-indigo-900 hover:text-indigo-900 transition-colors duration-300"
              >
                Parent Help Desk
              </Link>
            </div>
          </div>

          <div className="w-full pt-5 border-t border-stone-200 flex items-center justify-between">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="border border-indigo-900 text-white bg-indigo-900 p-3 cursor-pointer hover:text-indigo-900 hover:bg-white transition-colors"
              onClick={prevPage}
            />
            <h2 className="ty-card-heading text-stone-800">Page 4</h2>
          </div>
        </div>
      );
      break;

    default:
      pageContent = null;
  }

  return (
    <div className="App">
      {/* Direct Page Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-x border-stone-300 divide-y sm:divide-y-0 divide-x divide-stone-300 bg-stone-100">
        {pageTabs.map((tab) => {
          const active = currentPage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => goToPage(tab.id)}
              className={`py-3 px-3 text-xs sm:text-sm font-medium transition-colors ${
                active
                  ? 'bg-indigo-950 text-yellow-400 font-semibold'
                  : 'bg-white/90 text-stone-700 hover:bg-white'
              }`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      {pageContent}
    </div>
  );
};

export default Page;
