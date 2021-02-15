export const DisplayControl = ({ prefix, value, handleClick }) => {
  return (
    <div className="display-control">
      <h3 className="caps" id={`${prefix}-label`}>
        {prefix} Length
      </h3>
      <div className="wrapper">
        <button
          className="control-buttons"
          title={`Decrement ${prefix}`}
          id={`${prefix}-decrement`}
          onClick={handleClick}
          value="dec"
        >
          <p>&#x1F883;</p>
        </button>
        <label className="length" id={`${prefix}-length`}>
          {value}
        </label>
        <button
          title={`Increment ${prefix}`}
          className="control-buttons"
          id={`${prefix}-increment`}
          onClick={handleClick}
          value="inc"
        >
          <p className="align">&#x1F881;</p>
        </button>
      </div>
    </div>
  );
};
