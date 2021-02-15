import { Link } from "react-router-dom";
import "./Home.scss";
const APP_LIST = [
  {
    name: "Drum Machine",
    key: "drum-machine",
    desc: "Play your beats!",
    bg: "linear-gradient(to right, #000428, #004e92)",
    cat: "Entertainment",
  },
  {
    name: "JavaScript Calculator",
    key: "javascript-calculator",
    desc: "Lets calculate some values!",
    bg: "linear-gradient(to right, #6a9113, #141517)",
    cat: "Productivity",
  },
  {
    name: "Markdown Previewer",
    key: "markdown-previewer",
    desc: "Preview your Readme files!",
    bg: "linear-gradient(to right, #8e0e00, #1f1c18)",
    cat: "Productivity",
  },
  {
    name: "Random Quote",
    key: "random-quote-generator",
    desc: "See your quote of the day!",
    bg: "linear-gradient(to right, #00bf8f, #001510)",
    cat: "Curiosity",
  },
  {
    name: "Pomodoro Timer",
    key: "session-clock",
    desc: "Manage your time and stay focused!",
    bg: "linear-gradient(to right, #536976, #292e49)",
    cat: "Productivity",
  },
];
const Home = () => (
  <section className="hero-section">
    <div className="card-grid">
      {APP_LIST.map((app, i) => (
        <Link className="card" to={app.key}>
          <div
            className="card__background"
            style={{
              background: app.bg,
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">{app.cat}</p>
            <h3 className="card__heading">{app.name}</h3>
            <p style={{ color: "white" }}>{app.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Home;
