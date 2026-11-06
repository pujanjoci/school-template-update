import { useState, useEffect } from 'react';
import TeacherInfo from './TeacherInfo.json';
import ContactForm from './ContactForm';
import Location from './Location';

import { ImQuotesLeft } from 'react-icons/im';

// Import images statically from assets folder
import PrincipalImage from '../assets/principal.jpg';
import About1Image from '../assets/about-1.jpg';

// Import all teacher and staff images statically
import TeacherId1 from '../assets/TeacherId-1.jpg';
import TeacherId2 from '../assets/TeacherId-2.jpg';
import TeacherId3 from '../assets/TeacherId-3.jpg';
import TeacherId4 from '../assets/TeacherId-4.jpg';

import StaffId1 from '../assets/StaffId-1.jpg';
import StaffId2 from '../assets/StaffId-2.jpg';
import StaffId3 from '../assets/StaffId-3.jpg';
import StaffId4 from '../assets/StaffId-4.jpg';

const teacherImages = {
  1: TeacherId1,
  2: TeacherId2,
  3: TeacherId3,
  4: TeacherId4,
};

const staffImages = {
  1: StaffId1,
  2: StaffId2,
  3: StaffId3,
  4: StaffId4,
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [teamFilter, setTeamFilter] = useState('all');

  useEffect(() => {
    const checkIsMobile = () => {
      return /Mobi|Android/i.test(navigator.userAgent);
    };

    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const originalText =
    'Welcome to Our School, where we prioritize holistic education that fosters both academic achievement and personal growth. Our commitment extends beyond classrooms; we emphasize character development and community involvement.';

  const valuesList = [
    'Excellence in education',
    'Fostering creativity and innovation',
    'Respect and inclusivity',
    'Be Responsible',
    'Have Fun',
  ];

  const milestones = [
    { year: '1999', title: 'Academy Founded', detail: 'Opened doors with 120 pioneering students and 8 faculty members.' },
    { year: '2008', title: 'Science & Library Wing', detail: 'Inaugurated dedicated Chemistry, Biology, and Reference Library halls.' },
    { year: '2017', title: 'Digital Classroom Initiative', detail: 'Integrated blended learning resources and computer labs across all grades.' },
    { year: '2025', title: '25+ Years of Excellence', detail: 'Over 800 active students and 1,000+ alumni excelling nationwide.' },
  ];

  const showStaff = teamFilter === 'all' || teamFilter === 'staff';
  const showTeachers = teamFilter === 'all' || teamFilter === 'faculty';

  return (
    <div className="bg-[#FAF9F6] text-stone-900">
      {/* Editorial Masthead */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-300 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-8 ty-support font-medium text-stone-500">
            <span>Institutional Profile</span>
            <span>Founded 1999 • Pokhara, Nepal</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <div className="lg:col-span-5 text-left">
              <h1 className="ty-section-heading text-stone-900">
                Our School
              </h1>
            </div>
            <div className="lg:col-span-7 text-left">
              {isMobile ? (
                <p className="ty-body-lead text-stone-600">
                  {originalText}
                </p>
              ) : (
                <p className="ty-body-lead text-stone-600">
                  {originalText}
                </p>
              )}
            </div>
          </div>

          {/* Institutional Milestones Strip */}
          <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {milestones.map((item) => (
              <div key={item.year} className="border-l-2 border-indigo-900 pl-4">
                <span className="font-display font-bold text-xl text-indigo-950 block">
                  {item.year}
                </span>
                <h2 className="ty-support font-semibold text-stone-900 mt-0.5">
                  {item.title}
                </h2>
                <p className="ty-support text-stone-600 mt-1">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Portrait & Editorial Pull-Quote */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center reveal-on-scroll">
          <div className="md:col-span-5">
            <div className="bg-white border border-stone-300 p-3">
              <img
                src={PrincipalImage}
                alt="About-Principal"
                className="w-full h-80 sm:h-96 object-cover object-top"
              />
            </div>
          </div>
          <div className="md:col-span-7 text-left">
            <span className="ty-kicker text-indigo-800 block mb-4">
              01 — From the Principal’s Desk
            </span>
            <h3 className="text-2xl text-green-600 mb-4">
              <ImQuotesLeft />
            </h3>
            <p className="text-2xl sm:text-3xl font-display italic text-stone-800 leading-relaxed mb-6">
              This school will be sure that you have a safe, supportive, and stimulating environment in which to learn and grow.
            </p>
            <div className="pt-4 border-t border-stone-300 flex flex-wrap items-center justify-between gap-2">
              <p className="ty-card-heading text-stone-900">
                Sarah Johnson - Principal
              </p>
              <span className="ty-support text-stone-500">
                Admin Building, Room 101
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Visions Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center reveal-on-scroll">
          <div className="lg:col-span-5 group text-left">
            <span className="ty-kicker text-indigo-800 block mb-2">
              02 — Core Principles
            </span>
            <h3 className="relative ty-section-heading text-indigo-950 mb-6 inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-indigo-900 after:mt-2 after:transition-transform after:duration-500 after:ease-in-out after:scale-x-0 group-hover:after:scale-x-100 after:origin-left">
              Values &amp; Visions
            </h3>
            <ul className="divide-y divide-stone-200 border-y border-stone-200">
              {valuesList.map((item, idx) => (
                <li key={idx} className="py-3.5 flex items-baseline gap-4 ty-body font-medium text-stone-800">
                  <span className="ty-support text-indigo-700 font-semibold">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-stone-300 bg-[#FAF9F6] p-3">
              <img
                src={About1Image}
                alt="About-Vision"
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team: Staff and Teachers Directory */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-stone-300 gap-4 reveal-on-scroll">
            <div className="text-left">
              <span className="ty-kicker text-indigo-800 block mb-1.5">
                03 — Directory
              </span>
              <h2 className="ty-section-heading text-stone-900">
                Meet Our Team
              </h2>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { key: 'all', label: 'All Team (8)' },
                { key: 'staff', label: 'Administration & Staff (4)' },
                { key: 'faculty', label: 'Academic Faculty (4)' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setTeamFilter(tab.key)}
                  className={`px-3.5 py-2 ty-support font-semibold border transition-colors ${
                    teamFilter === tab.key
                      ? 'bg-indigo-950 text-white border-indigo-950'
                      : 'bg-white text-stone-700 border-stone-300 hover:border-indigo-900 hover:text-indigo-950'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Administration & Staff Row */}
          {showStaff && (
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4 text-left">
                <h3 className="ty-support font-semibold text-indigo-900 uppercase tracking-wider">
                  Administration &amp; Student Services
                </h3>
                <span className="ty-support text-stone-500">Office Directory</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {TeacherInfo.staff.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-white border border-stone-300 group text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="overflow-hidden border-b border-stone-200 h-60 bg-stone-100">
                        <img
                          src={staffImages[staff.id]}
                          alt={staff.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="ty-card-heading text-stone-900">{staff.name}</h3>
                        <p className="ty-support text-indigo-800 font-medium mt-0.5">{staff.position}</p>
                        {staff.officeLocation && (
                          <p className="ty-support text-stone-600 mt-2 pt-2 border-t border-stone-200">
                            <span className="font-semibold text-stone-800">Office:</span> {staff.officeLocation}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-[#FAF9F6] border-t border-stone-200 ty-support text-stone-600 space-y-0.5">
                      <p className="truncate" title={staff.email}>{staff.email}</p>
                      <p className="text-stone-500">{staff.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Faculty / Teachers Row */}
          {showTeachers && (
            <div>
              <div className="flex items-center justify-between mb-4 text-left">
                <h3 className="ty-support font-semibold text-indigo-900 uppercase tracking-wider">
                  Department Faculty
                </h3>
                <span className="ty-support text-stone-500">Classrooms &amp; Subjects</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {TeacherInfo.teachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="bg-white border border-stone-300 group text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="overflow-hidden border-b border-stone-200 h-60 bg-stone-100 relative">
                        <img
                          src={teacherImages[teacher.id]}
                          alt={teacher.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        {teacher.roomNumber && (
                          <span className="absolute bottom-2 right-2 bg-stone-950/85 text-white px-2.5 py-0.5 text-xs font-medium">
                            Room {teacher.roomNumber}
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="ty-card-heading text-stone-900">{teacher.name}</h3>
                        <p className="ty-support text-green-700 font-medium mt-0.5">{teacher.position}</p>
                        {teacher.subjectsTaught && (
                          <div className="mt-2.5 pt-2.5 border-t border-stone-200 flex flex-wrap gap-1.5">
                            {teacher.subjectsTaught.map((subject) => (
                              <span
                                key={subject}
                                className="bg-stone-100 border border-stone-200 px-2 py-0.5 text-xs text-stone-700"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-[#FAF9F6] border-t border-stone-200 ty-support text-stone-600 space-y-0.5">
                      <p className="truncate" title={teacher.email}>{teacher.email}</p>
                      <p className="text-stone-500">{teacher.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Location & Contact Form */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 pb-5 border-b border-stone-300 text-left reveal-on-scroll">
            <span className="ty-kicker text-indigo-800 block mb-1.5">
              04 — Correspondence &amp; Campus Map
            </span>
            <h2 className="ty-section-heading text-stone-900">
              Location &amp; Inquiries
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <Location />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
