import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BackButton } from "./components/BackButton";
import Home from "./components/Home";
import SessionClock from "./apps/session-clock/App";
import DrumMachine from "./apps/drum-machine/App";
import JavascriptCalculator from "./apps/javascript-calculator/App";
import RandomQuoteGenerator from "./apps/random-quote-generator/App";
import MarkDownPreviewer from "./apps/markdown-previewer/App";
function App() {
  return (
    <main>
      <Router>
        <BackButton />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/session-clock" component={SessionClock} />
            <Route path="/drum-machine" component={DrumMachine} />
            <Route
              path="/javascript-calculator"
              component={JavascriptCalculator}
            />
            <Route
              path="/random-quote-generator"
              component={RandomQuoteGenerator}
            />
            <Route path="/markdown-previewer" component={MarkDownPreviewer} />
          </Switch>
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
