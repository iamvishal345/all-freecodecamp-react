import { useCallback, useEffect, useRef, useState } from "react";

export const Display = ({
  sessionLength,
  breakLength,
  isRunning,
  resetEvent,
}) => {
  const [timer, setTimer] = useState(`${sessionLength}:00`);
  const [isSessionRunning, setIsSessionRunning] = useState(true);

  const interval = useRef(null);
  const timeInSeconds = useRef(null);
  const audioRef = useRef(null);

  const setTimerFun = useCallback(() => {
    let minutes, seconds;
    clearInterval(interval.current);
    return setInterval(
      (function x() {
        if (timeInSeconds.current === -1) {
          audioRef.current.play();
          if (isSessionRunning) {
            timeInSeconds.current = breakLength * 60;
          } else {
            timeInSeconds.current = sessionLength * 60;
          }
          setIsSessionRunning(!isSessionRunning);
        }
        minutes = parseInt(timeInSeconds.current / 60, 10);
        seconds = parseInt(timeInSeconds.current % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        setTimer(`${minutes}:${seconds}`);
        timeInSeconds.current -= 1;
        return x;
      })(),
      1000
    );
  }, [breakLength, sessionLength, isSessionRunning]);

  useEffect(() => {
    clearInterval(interval.current);
    setIsSessionRunning(true);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setTimer(`${25}:00`);
    timeInSeconds.current = 25 * 60;
  }, [resetEvent]);

  useEffect(() => {
    if (isSessionRunning) {
      setTimer(
        `${sessionLength < 10 ? "0" + sessionLength : sessionLength}:00`
      );
      timeInSeconds.current = sessionLength * 60;
    }
  }, [isSessionRunning, sessionLength]);

  useEffect(() => {
    if (!isSessionRunning) {
      setTimer(`${breakLength < 10 ? "0" + breakLength : breakLength}:00`);
      timeInSeconds.current = breakLength * 60;
    }
  }, [isSessionRunning, breakLength]);

  useEffect(() => {
    if (isRunning) {
      interval.current = setTimerFun();
    } else {
      clearInterval(interval.current);
    }
  }, [isRunning, setTimerFun]);
  return (
    <div className="timer-wrapper">
      <div
        className={`timer-label ${
          timeInSeconds.current && timeInSeconds.current < 60
            ? "text-danger"
            : ""
        }`}
        id="timer-label"
      >
        {isSessionRunning ? "Session" : "Break"}
      </div>
      <div
        className={`time-left ${
          timeInSeconds.current && timeInSeconds.current < 60
            ? "text-danger"
            : ""
        }`}
        id="time-left"
      >
        {timer}
      </div>
      <audio
        ref={(ref) => (audioRef.current = ref)}
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
};
