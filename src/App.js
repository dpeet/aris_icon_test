import React from 'react';
import './App.css';
// import clinical from "./Clinical-Particulars-Tab-onSelect.svg"
import email from "./email.svg"

function App() {
  return (
    <div className="App">
      <div className="icon1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" fill-rule="evenodd">
            <polygon points="0 0 24 0 24 24 0 24" />
            <path fill="#000" d="M22,6 C22,4.9 21.1,4 20,4 L4,4 C2.9,4 2,4.9 2,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 Z M20,6 L12,11 L4,6 L20,6 Z M20,18 L4,18 L4,8 L12,13 L20,8 L20,18 Z" />
          </g>
        </svg>

      </div>
      <div className="icon2">
        <img src={email} alt="email icon"></img>
      </div>
      <div className="icon3">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="email icon" style={{ height: "24px", width: "24px" }}></img>
      </div>
      <div className="badge badge-red">MI</div>
      <div className="badge badge-orange">
          <img className="icon-badge" src={email} alt="email icon"></img>
      </div>
      <div className="badge badge-blue">AE</div>

    </div>
  );
}

export default App;
