import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useMemo, useState } from "react";

dayjs.extend(duration);

interface CounterProps {
  endTime: number;
}

export const Counter: React.FC<CounterProps> = ({ endTime }) => {
  const [time, setTime] = useState<number>(0);

  const getTimestamp = (t: number) => {
    const twoDP = (n: number) => (n > 9 ? n : "0" + n);

    var duration = dayjs.duration(t * 1000, "milliseconds");

    duration = dayjs.duration(duration.asMilliseconds(), "milliseconds");
    let timestamp = `${twoDP(duration.days() * 24 + duration.hours())}:${twoDP(
      duration.minutes(),
    )}:${twoDP(duration.seconds())}`;

    return timestamp;
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

  return <p>{getTimestamp(time)}</p>;
};
