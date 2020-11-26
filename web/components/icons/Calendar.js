import React from 'react';

// const strokeStyle = { vectorEffect: 'non-scaling-stroke' };

function CalendarIcon(props) {
  return (
    <svg
      viewBox="0 0 48 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        stroke="none"
        d="M45 3h-6V1a1 1 0 00-2 0v2H27V1a1 1 0 00-2 0v2H15V1a1 1 0 00-2 0v2H7a3 3 0 00-3 3v16a1 1 0 002 0v-9h40v25a1 1 0 01-1 1H26a1 1 0 000 2h19a3 3 0 003-3V6a3 3 0 00-3-3zM6 11V6a1 1 0 011-1h6v1a1 1 0 002 0V5h10v1a1 1 0 002 0V5h10v1a1 1 0 002 0V5h6a1 1 0 011 1v5z"
      />
      <path
        stroke="none"
        d="M12 24a12 12 0 1012 12 12 12 0 00-12-12zm0 22a10 10 0 1110-10 10 10 0 01-10 10zM14 23a1 1 0 000-2h-4a1 1 0 000 2z"
      />
      <path
        stroke="none"
        d="M21.71 24.29a1 1 0 00-1.42 1.42l2 2a1 1 0 001.42 0 1 1 0 000-1.42zM16.65 30.65l-4 4a1.44 1.44 0 00-1.28 0l-2-2a.49.49 0 00-.7.7l2 2a1.5 1.5 0 102.7 0l4-4a.49.49 0 00-.7-.7zM11.5 27h1v2h-1zM19 35.5h2v1h-2zM11.5 43h1v2h-1zM3 35.5h2v1H3z"
      />
    </svg>
  );
}

export default CalendarIcon;
