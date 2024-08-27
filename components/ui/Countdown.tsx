"use client";
import { useSearchParams } from 'next/navigation';
import { DateTime } from 'luxon';
import { useMemo, ReactElement, useState, useEffect } from 'react';
import CountdownCard from '@/components/ui/CountdownCard';
import useIsMounted from '@/hooks/useIsMounted';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (endDate: DateTime): Countdown => {
  const now = DateTime.local();
  const { days, hours, minutes, seconds } = endDate.diff(now, ['days', 'hours', 'minutes', 'seconds']);
  return {
    days: Math.max(0, Math.trunc(days)),
    hours: Math.max(0, Math.trunc(hours)),
    minutes: Math.max(0, Math.trunc(minutes)),
    seconds: Math.max(0, Math.trunc(seconds)),
  };
};

const Countdown = (): ReactElement => {
  const isMounted = useIsMounted();
  const searchParams = useSearchParams();

  const defaultTime = useMemo(() => DateTime.local().plus({ days: 1, hours: 0, minutes: 0, seconds: 3 }), []);
  const initialDate = useMemo(() => {
    const dateParam = searchParams.get('date');
    return dateParam ? DateTime.fromISO(dateParam) : defaultTime;
  }, [searchParams, defaultTime]);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(initialDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(initialDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [initialDate]);

  if (!isMounted) return <></>;

  return (
    <div className="flex space-x-1 lg:space-x-10">
      <CountdownCard id="days" label="DAYS" current={timeLeft.days} />
      <CountdownCard id="hours" label="HOURS" current={timeLeft.hours} />
      <CountdownCard id="minutes" label="MINUTES" current={timeLeft.minutes} />
      <CountdownCard id="seconds" label="SECONDS" current={timeLeft.seconds} />
    </div>
  );
};

export default Countdown;
