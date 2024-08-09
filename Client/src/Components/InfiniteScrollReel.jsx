import React, { useEffect, useRef } from 'react';

const InfiniteScrollReel = ({ data }) => {
  const scrollContainerRef = useRef(null);
  const scrollStep = 2; // Speed of scrolling
  const scrollInterval = 20; // Interval between scroll movements

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollContainer.innerHTML;
    scrollContainer.innerHTML += scrollContent;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
    };

    const intervalId = setInterval(scroll, scrollInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap shadow-md" ref={scrollContainerRef}>
      {data.map((item, index) => (
        <div
          key={index}
          className="inline-block text-center p-8 bg-infinity"
        >
          <p className="text-xl font-semibold text-blac">{item.duedate}</p>
          <h3 className="text-gray-600 font-medium">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default InfiniteScrollReel;
