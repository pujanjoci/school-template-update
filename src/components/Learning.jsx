import { useState } from 'react';
import learning from '../assets/learning-child.png';
import ExtracurricularActivities from './ExtracurricularActivities';
import PrincipalMessage from './PrincipalMessage';

const curriculumLevels = [
  {
    id: 'primary',
    label: 'Primary Wing (Grades I–V)',
    subtitle: 'Foundational Literacy, Numeracy & Inquiry',
    overview:
      'Our Primary programme nurtures curiosity and foundational habits of mind through structured reading, hands-on mathematics, environmental discovery, and creative arts.',
    subjects: [
      'English Language & Reading Lab',
      'Nepali Literature & Composition',
      'Foundational Mathematics',
      'Environmental & General Science',
      'Visual Arts, Music & Movement',
      'Computer Fundamentals',
    ],
    scheduleNote: '28 periods/week • Project-based assessment & term portfolios',
  },
  {
    id: 'middle',
    label: 'Middle School (Grades VI–VIII)',
    subtitle: 'Analytical Thinking & Interdisciplinary Exploration',
    overview:
      'Middle School students transition to specialist subject faculty, laboratory experiments, coding workshops, and structured debate to build independent study skills.',
    subjects: [
      'Advanced English & Public Speaking',
      'Algebra, Geometry & Data',
      'Integrated Physics, Chemistry & Biology Labs',
      'Social Studies, Civics & History',
      'Computer Science & Web Basics',
      'Health, Athletics & Community Service',
    ],
    scheduleNote: '34 periods/week • Practical lab evaluations & terminal exams',
  },
  {
    id: 'secondary',
    label: 'Secondary School (Grades IX–X)',
    subtitle: 'Board Examination Readiness & Academic Rigor',
    overview:
      'Designed to prepare scholars for national board examinations and higher secondary studies with intensive mentorship, science practicals, and optional electives.',
    subjects: [
      'Compulsory English & Nepali',
      'Compulsory & Optional Mathematics',
      'Science & Technology (Theory + Practical)',
      'Social Studies & Economic Studies',
      'Computer Science / Accountancy Electives',
      'Career Counseling & Seminar Series',
    ],
    scheduleNote: '36 periods/week • Mock board examinations & faculty mentoring',
  },
];

const academicCalendar = [
  { term: 'Term I — First Session', dates: 'April – July', highlight: 'Orientation, Club Enrollment & First Terminal Assessment' },
  { term: 'Term II — Mid-Year Session', dates: 'August – November', highlight: 'Annual Science Fair, Athletics Meet & Mid-Term Exams' },
  { term: 'Term III — Final Session', dates: 'December – March', highlight: 'Educational Excursions, Final Examinations & Graduation' },
];

const Learning = () => {
  const [selectedLevel, setSelectedLevel] = useState('primary');

  const activeCurriculum =
    curriculumLevels.find((lvl) => lvl.id === selectedLevel) || curriculumLevels[0];

  return (
    <div className="bg-[#FAF9F6] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Primary Architectural Triptych: Online Classes for All */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border border-stone-300 bg-white overflow-hidden">
          {/* Left Section */}
          <div className="lg:col-span-3 bg-red-700 text-white p-8 sm:p-10 flex flex-col justify-between text-left">
            <span className="ty-kicker text-red-200 block">
              01 — Digital Learning
            </span>
            <h1 className="ty-section-heading text-white my-6">
              Online Classes
              <br />
              for All
            </h1>
            <span className="ty-support text-red-100 border-t border-white/25 pt-4 block">
              St. Joseph’s Academy
            </span>
          </div>

          {/* Middle Section */}
          <div className="lg:col-span-4 min-h-[280px] sm:min-h-[360px] border-y lg:border-y-0 lg:border-x border-stone-300">
            <img
              src={learning}
              alt="Child with laptop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section */}
          <div className="lg:col-span-5 bg-red-50/80 p-8 sm:p-12 flex items-center text-left">
            <div className="space-y-4">
              <span className="ty-kicker text-red-800 block">
                Flexible Study &amp; Curriculum
              </span>
              <p className="ty-body-lead text-stone-800">
                Our blended learning environment connects classroom instruction with accessible online lessons, allowing students to review coursework, collaborate with faculty, and study effectively from anywhere.
              </p>
              <p className="ty-body text-stone-700">
                With structured study materials, interactive assignments, and dedicated teacher guidance, every learner receives continuous academic support throughout the school year.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Curriculum & Grade Divisions Explorer */}
        <section className="bg-white border border-stone-300 p-6 sm:p-10 text-left reveal-on-scroll">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-stone-300 gap-4">
            <div>
              <span className="ty-kicker text-indigo-800 block mb-1.5">
                Academic Structure
              </span>
              <h2 className="ty-section-heading text-stone-900">
                Curriculum by Division
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {curriculumLevels.map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`px-3.5 py-2 ty-support font-semibold border transition-colors ${
                    selectedLevel === lvl.id
                      ? 'bg-indigo-950 text-white border-indigo-950'
                      : 'bg-[#FAF9F6] text-stone-700 border-stone-300 hover:border-indigo-900 hover:text-indigo-950'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-[#FAF9F6] border border-stone-300 p-6">
              <span className="ty-support font-semibold text-indigo-800 uppercase tracking-wider block mb-1">
                {activeCurriculum.label}
              </span>
              <h3 className="ty-subheading text-stone-900 mb-3">
                {activeCurriculum.subtitle}
              </h3>
              <p className="ty-body text-stone-700 mb-5">
                {activeCurriculum.overview}
              </p>
              <div className="pt-4 border-t border-stone-300 ty-support text-stone-600 font-medium">
                {activeCurriculum.scheduleNote}
              </div>
            </div>

            <div className="lg:col-span-7">
              <h4 className="ty-support font-semibold text-stone-900 uppercase tracking-wider mb-3">
                Core Subjects &amp; Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCurriculum.subjects.map((subject, idx) => (
                  <div
                    key={subject}
                    className="p-3.5 border border-stone-300 bg-white flex items-baseline gap-3"
                  >
                    <span className="ty-support font-bold text-indigo-800">
                      0{idx + 1}
                    </span>
                    <span className="ty-body font-medium text-stone-800">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Calendar Summary */}
          <div className="mt-10 pt-8 border-t border-stone-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="ty-support font-semibold text-indigo-900 uppercase tracking-wider">
                Annual Academic Calendar Overview
              </h3>
              <span className="ty-support text-stone-500">Session 2026–2027</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {academicCalendar.map((item) => (
                <div
                  key={item.term}
                  className="p-4 bg-[#FAF9F6] border border-stone-300"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span className="ty-support font-bold text-stone-900">
                      {item.term}
                    </span>
                    <span className="text-xs font-semibold text-indigo-800 bg-indigo-50 px-2 py-0.5 border border-indigo-200">
                      {item.dates}
                    </span>
                  </div>
                  <p className="ty-support text-stone-600 mt-1">
                    {item.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 02: Extra-Curricular Activities */}
        <section className="reveal-on-scroll">
          <ExtracurricularActivities />
        </section>

        {/* Section 03: Principal's Academic Welcome */}
        <section className="reveal-on-scroll">
          <PrincipalMessage />
        </section>
      </div>
    </div>
  );
};

export default Learning;
