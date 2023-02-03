import React, { useRef, useEffect } from 'react';
import './style.css';
const MyComponent = () => {
  const elementRef = useRef(null);
  const [v, setV] = React.useState({ top: 0, left: 0, height: 0, width: 0 });
  const [active, setActive] = React.useState(false);
  useEffect(() => {
    if (elementRef.current) {
      const top = elementRef.current.offsetTop;
      const left = elementRef.current.offsetLeft;
      const height = elementRef.current.offsetHeight;
      const width = elementRef.current.offsetWidth;
      setV({ top, left, height, width });
    }
  }, []);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => {
            setActive(!active);
          }}
        >
          Active
        </button>
        <div
          ref={elementRef}
          style={{
            position: 'relative',
            height: '90px',
            // width: '60px',
            border: '3px solid blue',
          }}
        ></div>
        <div
          className={active ? 'active' : 'inactive'}
          style={{ top: v.top, left: v.left, height: v.height, width: v.width }}
        ></div>
        <img
          src="https://lvmhlinestudiodev.blob.core.windows.net/templates-store/Assets/image_placeholder.png"
          className="imageTag"
        />
      </div>
    </>
  );
};

export default MyComponent;
