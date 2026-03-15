import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { parseISO } from 'date-fns';
import { events } from '../data/events';

// TO ADD EVENTS TO CALENDAR: Import events from ../data/events.js
// Events with category: "upcoming" will automatically appear on the calendar.
// Just add new events to events.js with category: "upcoming" and they will show here.
//
// GOOGLE CALENDAR INTEGRATION (future):
// Replace the events import above with a fetch call to your Google Calendar API.
// Map each Google Calendar event to { date: "YYYY-MM-DD", title: "..." } format.
// The tileContent and tileClassName functions below will work without changes.

const upcomingEvents = events.filter((e) => e.category === 'upcoming');

function isSameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function getEventsOnDate(date) {
  return upcomingEvents.filter((e) => {
    try {
      return isSameDay(parseISO(e.date), date);
    } catch {
      return false;
    }
  });
}

export default function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [popoverEvents, setPopoverEvents] = useState([]);

  const handleDayClick = (date) => {
    const eventsOnDay = getEventsOnDate(date);
    if (eventsOnDay.length > 0) {
      setSelectedDate(date);
      setPopoverEvents(eventsOnDay);
    } else {
      setSelectedDate(null);
      setPopoverEvents([]);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && getEventsOnDate(date).length > 0) {
      return 'has-event';
    }
    return null;
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const evs = getEventsOnDate(date);
      if (evs.length > 0) {
        return (
          <span
            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full block"
            style={{ background: '#0EA5E9' }}
          />
        );
      }
    }
    return null;
  };

  return (
    <div className="relative">
      <Calendar
        onClickDay={handleDayClick}
        tileClassName={tileClassName}
        tileContent={tileContent}
      />

      {/* Event popover */}
      {popoverEvents.length > 0 && selectedDate && (
        <div
          className="mt-4 p-4 rounded-xl border"
          style={{
            background: '#F0F9FF',
            borderColor: 'rgba(14, 165, 233, 0.25)',
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-2"
            style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
          >
            Events on this day
          </p>
          {popoverEvents.map((e) => (
            <div key={e.id} className="mb-1">
              <p
                className="text-sm font-medium"
                style={{ color: '#16163F', fontFamily: 'Outfit, sans-serif' }}
              >
                {e.title}
              </p>
              <p
                className="text-xs text-gray-500"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {e.location}
              </p>
            </div>
          ))}
        </div>
      )}

      {upcomingEvents.length === 0 && (
        <p
          className="text-center text-sm text-gray-400 mt-4"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          No upcoming events scheduled yet. Check back soon!
        </p>
      )}
    </div>
  );
}
