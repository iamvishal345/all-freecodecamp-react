import { useCallback, useState } from "react";
import "./App.scss";
import { DisplayControl } from "./components/display-control";
import { Display } from "./components/display";
import { TimeControl } from "./components/timer-control";

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [reset, setReset] = useState(false);

  const handleClick = useCallback(
    (e) => {
      if (isRunning) return;
      const id = e.target.id;
      switch (id) {
        case "break-decrement":
          breakLength > 1 && setBreakLength(breakLength - 1);
          break;
        case "break-increment":
          breakLength < 60 && setBreakLength(breakLength + 1);
          break;
        case "session-decrement":
          sessionLength > 1 && setSessionLength(sessionLength - 1);
          break;
        case "session-increment":
          sessionLength < 60 && setSessionLength(sessionLength + 1);
          break;
        default:
          break;
      }
    },
    [breakLength, sessionLength, isRunning]
  );
  const handleResetTimer = () => {
    setBreakLength(5);
    setSessionLength(25);
    setReset(!reset);
    setIsRunning(false);
  };
  const handleToggleTimer = () => {
    setIsRunning(!isRunning);
  };
  return (
    <div className="App">
      <header className="App-header">Pomodaro Clock</header>
      <section>
        <DisplayControl
          prefix="break"
          value={breakLength}
          handleClick={handleClick}
        />
        <DisplayControl
          prefix="session"
          value={sessionLength}
          handleClick={handleClick}
        />
      </section>
      <Display
        sessionLength={sessionLength}
        breakLength={breakLength}
        isRunning={isRunning}
        resetEvent={reset}
      />
      <TimeControl
        resetTimer={handleResetTimer}
        toggleTimer={handleToggleTimer}
      />
    </div>
  );
}

export default App;
