const Controls = (props) => {
  const handleClick = () => {
    if (props.control === 'PLAY') {
      props.pauseControl();
    } else if (props.control === 'PAUSE') {
      props.playControl();
    }
  };

  return (
    <>
      <div className="space-x-4 text-2xl">
        <i
          className={`fa-solid fa-${
            props.control === 'PAUSE' ? 'play' : 'pause'
          }`}
          id="start_stop"
          onClick={handleClick}
        ></i>
        <i
          className="fa-solid fa-rotate"
          id="reset"
          onClick={props.resetControl}
        ></i>
      </div>
    </>
  );
};

export default Controls;
