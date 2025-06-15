import { useRef, useEffect } from 'react';

const Timer = (props) => {
  const intervalId = useRef(null);
  const audioRef = useRef();

  useEffect(() => {
    if (props.control === 'PLAY') {
      intervalId.current = setInterval(() => {
        props.decrementTimeLeft();
      }, 1000);
    } else if (props.control === 'PAUSE') {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      if (intervalId) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    } else if (props.control === 'RESET') {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      if (intervalId) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
      props.resetTimerMode();
      props.resetTimeLeft();
      props.pauseControl();
    }
    return () => clearInterval(intervalId.current);
  }, [props.control, props.timerMode]);

  useEffect(() => {
    if (props.timeLeft == 0) {
      audioRef.current.play();
    }
    if (props.timeLeft < 0) {
      clearInterval(intervalId.current);
      props.toggleTimerMode();
    }
  }, [props.timeLeft]);

  useEffect(() => {
    if (props.timerMode === 'SESSION') {
      props.setTimeLeft(props.session * 60);
    } else {
      props.setTimeLeft(props.break * 60);
    }
  }, [props.timerMode, props.session, props.break]);

  const min = Math.floor(props.timeLeft / 60)
    .toString()
    .padStart(2, '0');
  const sec = Math.floor(props.timeLeft % 60)
    .toString()
    .padStart(2, '0');

  return (
    <>
      <div
        className={`mx-4 py-4 outline-4 outline-neutral-400 rounded-3xl ${
          props.timeLeft <= 60 ? 'text-red-600' : ''
        }`}
      >
        <h2 className="text-3xl" id="timer-label">
          {props.timerMode === 'SESSION' ? 'Session' : 'Break'}
        </h2>
        <div className="text-6xl font-bold" id="time-left">
          {min}:{sec}
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
        ref={audioRef}
      ></audio>
    </>
  );
};

export default Timer;
