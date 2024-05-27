import { useState } from "react";
import githubLogo from "./assets/github.png";
import linkedinLogo from "./assets/linkedin.png";
import cvlogo from "./assets/cv.png";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://linkedin.com/in/alexandra-busson" target="_blank">
          <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/MimiBsn" target="_blank">
          <img src={githubLogo} className="logo react" alt="GitHub logo" />
        </a>
        <a href="https://flowcv.com/resume/f44n5n979t" target="_blank">
          <img src={cvlogo} className="logo cv" alt="CV logo" />
        </a>
      </div>
      <h1>Portfolio in progress ...</h1>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Meanwhile, you can check my LinkedIn profile, GitHub projects and CV.
      </p>
    </>
  );
}

export default App;
