import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useMemo, useState } from "react";

dayjs.extend(duration);

interface CounterProps {
  endTime: number;
}

export const Counter: React.FC<CounterProps> = ({ endTime }) => {
  const [time, setTime] = useState<number>(0);

  const getTimestamp = (t: number) => {
    if (t <= 0) {
      return (
        <div className="text-center font-bold md:col-span-2 lg:text-left">
          <h1 className="text-2xl text-fill-transparent text-stroke-white text-stroke-2 md:whitespace-nowrap md:text-6xl">
            <span> APPLICATIONS</span>
            <span className="whitespace-nowrap"> OPEN</span>
          </h1>
          <p className="text-5xl md:whitespace-nowrap md:text-7xl">RIGHT NOW</p>
        </div>
      );
    } else {
      const twoDP = (n: number) => (n > 9 ? n : "0" + n);

      var duration = dayjs.duration(t * 1000, "milliseconds");

      duration = dayjs.duration(duration.asMilliseconds(), "milliseconds");
      let timestamp = `${twoDP(
        duration.days() * 24 + duration.hours(),
      )}:${twoDP(duration.minutes())}:${twoDP(duration.seconds())}`;

      return (
        <div className="text-center font-bold md:col-span-2 lg:text-left">
          <h1 className="text-2xl text-fill-transparent text-stroke-white text-stroke-2 md:whitespace-nowrap md:text-6xl">
            <span> APPLICATIONS</span>
            <span className="whitespace-nowrap"> OPEN IN</span>
          </h1>
          <p className="text-7xl md:text-9xl">{timestamp}</p>
        </div>
      );
    }
  };

  useMemo(() => {
    var currentTime = dayjs();
    var diffTime = endTime - currentTime.unix();
    setTime(diffTime);

    const intervalId = setInterval(() => {
      diffTime -= 1;
      setTime(diffTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endTime]);

  return getTimestamp(time);
};
