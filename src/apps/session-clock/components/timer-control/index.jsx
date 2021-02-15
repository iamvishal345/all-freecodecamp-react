export const TimeControl = ({ toggleTimer, resetTimer }) => {
  return (
    <div className="time-control-wrapper">
      <button title="Play/Pause Timer" id="start_stop" onClick={toggleTimer}>
        &#x25ba;&#x2225;
      </button>
      <button title="Reset Timer" id="reset" onClick={resetTimer}>
        &#x21bb;
      </button>
    </div>
  );
};
