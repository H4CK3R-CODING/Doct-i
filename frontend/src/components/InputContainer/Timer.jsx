import React, { useEffect, useRef, useState } from 'react';

const Timer = ({ start }) => {
  const [remMin, setRemMin] = useState(4);
  const [remSec, setRemSec] = useState(59);
  const intervalRef = useRef(null);

  useEffect(() => {
    // if (!start) return;

    // Reset timer values when starting
    // setRemMin(4);
    // setRemSec(59);

    // Clear existing interval if any
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setRemSec((prevSec) => {
        if (prevSec === 0) {
          setRemMin((prevMin) => {
            if (prevMin === 0) {
              clearInterval(intervalRef.current);
              return 0;
            }
            return prevMin - 1;
          });
          return 59;
        }
        return prevSec - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [start]); // trigger effect when `start` changes

  return (
    <div>
      {remMin === 0 && remSec === 0 ? (
        <p className="text-red-600">OTP Expired</p>
      ) : (
        <div>
          {remMin < 10 ? '0' + remMin : remMin} :{' '}
          {remSec < 10 ? '0' + remSec : remSec}
        </div>
      )}
    </div>
  );
};

export default Timer;