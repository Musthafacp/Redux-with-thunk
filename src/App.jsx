import { useState } from "react";
import "./App.css";
import actionProvider from "./Redux/Action";
import store from "./Redux/Store";

function App() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  store.subscribe(() => {
    setData(store.getState().data.data);
    setToggle(true);
  });

  const cleardata = () => {
    setData([]);
    setToggle(false);
  };

  return (
    <>
      <button onClick={() => store.dispatch(actionProvider())}>
        Fetch Data
      </button>
      <div className="main">
        {data.map((item, ind) => {
          return (
            <div key={ind} className="div">
              <div className="innerDiv">
                <div className="answers">
                  <h1>Name :-</h1> <h2>{item.name}</h2>
                </div>
                <div className="answers">
                  <h1>Username :- </h1>
                  <h2> {item.username}</h2>
                </div>

                <div className="answers">
                  <h1>Email :- </h1>
                  <h2> {item.email}</h2>
                </div>
                <div className="answers">
                  <h1>Website :- </h1>
                  <h2> {item.website}</h2>
                </div>

                <div className="answers">
                  <h1>Phone Number :- </h1>
                  <h2> {item.phone}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {toggle && (
        <button className="clear-button" onClick={cleardata}>
          Clear Data
        </button>
      )}{" "}
    </>
  );
}

export default App;
