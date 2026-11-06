import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import events from './SchoolEvents.json';

const SchoolsEvents = () => {
  const [openEventIndex, setOpenEventIndex] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [expandAll, setExpandAll] = useState(false);
  const containerRef = useRef(null);

  const toggleEventDetails = (index) => {
    if (expandAll) {
      setExpandAll(false);
      setOpenEventIndex(index);
      return;
    }
    setOpenEventIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpenEventIndex(null);
      setExpandAll(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredEvents = events.filter((event) => {
    if (filterType === 'special') return Boolean(event.isSpecial);
    if (filterType === 'general') return !event.isSpecial;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <div className="mb-8 pb-4 border-b border-stone-300 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
        <div>
          <span className="ty-kicker text-indigo-800 block mb-1">
            03 — Academic Schedule
          </span>
          <h2 className="ty-section-heading text-stone-900">
            Schools&apos; Events
          </h2>
        </div>

        {/* Filter & Expand Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { key: 'all', label: 'All Events' },
            { key: 'special', label: 'Special Notices' },
            { key: 'general', label: 'Campus & Holiday' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setFilterType(tab.key);
                setOpenEventIndex(null);
              }}
              className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
                filterType === tab.key
                  ? 'bg-indigo-950 text-white border-indigo-950'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="px-3 py-1.5 text-xs font-medium border border-stone-300 bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors"
          >
            {expandAll ? 'Collapse All' : 'Expand All'}
          </button>
        </div>
      </div>

      <div className="border-t border-stone-300 divide-y divide-stone-300 bg-white">
        {filteredEvents.map((event, index) => {
          const isOpen = expandAll || openEventIndex === index;
          return (
            <div
              key={index}
              className={`p-5 sm:p-6 transition-colors ${
                isOpen
                  ? 'bg-[#FAF9F6] border-l-4 border-red-600'
                  : 'bg-white hover:bg-stone-50'
              }`}
            >
              <div
                className={`flex justify-between items-center gap-4 cursor-pointer text-left ${
                  event.isSpecial ? 'ty-card-heading font-semibold' : 'ty-card-heading font-medium'
                } ${isOpen ? 'text-red-600' : 'text-stone-900'}`}
                onClick={() => toggleEventDetails(index)}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  {event.date && (
                    <span className="ty-support text-stone-500 w-32 flex-shrink-0 font-normal">
                      {event.date}
                    </span>
                  )}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span>{event.title}</span>
                    {event.isSpecial && (
                      <span className="text-[11px] font-medium px-2 py-0.5 bg-red-50 text-red-700 border border-red-200">
                        Special
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-sm flex-shrink-0">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>

              {isOpen && (
                <div className="mt-4 pt-3 border-t border-stone-200 text-left sm:pl-38 space-y-1.5">
                  {event.date && (
                    <div className="ty-support text-stone-500">
                      <strong className="text-stone-700">Schedule:</strong> {event.date}
                      {event.time && `, ${event.time}`}
                    </div>
                  )}
                  {event.location && (
                    <div className="ty-support text-stone-700">
                      <strong className="text-stone-900">Venue:</strong> {event.location}
                    </div>
                  )}
                  {event.description && (
                    <div className="ty-body text-stone-600 pt-1">
                      {event.description}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SchoolsEvents;
