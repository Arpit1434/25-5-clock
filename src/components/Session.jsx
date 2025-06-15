import { useEffect } from 'react';

const Session = (props) => {
  useEffect(() => {
    if (props.control === 'RESET') {
      props.resetSession();
    }
  }, [props.control]);

  const handleSessionDecrement = () => {
    if (!(props.control === 'PLAY')) {
      props.decrementSessionLength();
    }
  };

  const handleSessionIncrement = () => {
    if (!(props.control === 'PLAY')) {
      props.incrementSessionLength();
    }
  };

  return (
    <>
      <div className="text-xl">
        <span id="session-label">Session Length</span>
        <div className="my-2 flex justify-around items-center">
          <i
            className="fa-solid fa-arrow-down"
            id="session-decrement"
            onClick={handleSessionDecrement}
          ></i>
          <span id="session-length">{props.session}</span>
          <i
            className="fa-solid fa-arrow-up"
            id="session-increment"
            onClick={handleSessionIncrement}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Session;
