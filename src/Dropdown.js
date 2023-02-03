import React, { useState, useRef, useEffect } from 'react';
import select from 'react-select';

const Dropdown = () => {
  const [upsideDown, setUpsideDown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const dropdown = dropdownRef.current;
    const spaceAtBottom =
      window.innerHeight - dropdown.getBoundingClientRect().bottom;
    if (spaceAtBottom < dropdown.offsetHeight) {
      setUpsideDown(true);
    } else {
      setUpsideDown(false);
    }
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`dropdown-container ${upsideDown ? 'upside-down' : ''}`}
    >
      <style>
        {`.upside-down {
          transform-origin: bottom left;
          transform: rotate(180deg);
        }`}
      </style>
      {/* Your dropdown content */}
    </div>
  );
};

export default Dropdown;
