import { useEffect } from 'react';

const Break = (props) => {
  useEffect(() => {
    if (props.control === 'RESET') {
      props.resetBreak();
    }
  }, [props.control]);

  const handleBreakDecrement = () => {
    if (!(props.control === 'PLAY')) {
      props.decrementBreakLength();
    }
  };

  const handleBreakIncrement = () => {
    if (!(props.control === 'PLAY')) {
      props.incrementBreakLength();
    }
  };

  return (
    <>
      <div className="text-xl">
        <div id="break-label">Break Length</div>
        <div className="my-2 flex justify-around items-center">
          <i
            className="fa-solid fa-arrow-down"
            id="break-decrement"
            onClick={handleBreakDecrement}
          ></i>
          <span id="break-length">{props.break}</span>
          <i
            className="fa-solid fa-arrow-up"
            id="break-increment"
            onClick={handleBreakIncrement}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Break;
