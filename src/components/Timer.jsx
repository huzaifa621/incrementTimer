import React from "react";

const Timer = () => {
  const [counter, setCounter] = React.useState(0);
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");
  const [isRunning, setIsRunning] = React.useState(false);
  const timerRef = React.useRef();

  const handleClick = () => {
    if (+start <= +end) {
      setCounter(Number(start));
      startTimer();
    } else {
      alert("Enter valid end time");
    }
  };

  const startTimer = () => {
    if (isRunning) {
      return;
    }
    timerRef.current = setInterval(() => {
      setIsRunning(true);
      setCounter((prev) => {
        if (prev === Number(end)) {
          setCounter("Timer ends!");
          clearInterval(timerRef.current);
          setIsRunning(false);
        } else {
          return prev + 1;
        }
      });
    }, 1000);
  };

  return (
    <div>
      {counter === "Timer ends!" ? (
        <h1 style={{ color: "green" }}>{counter}</h1>
      ) : (
        <h1 style={{ color: "red" }}>{counter}</h1>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label>Start time(in sec)</label>
          <input
            style={{ marginLeft: "10px" }}
            type="number"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            placeholder="Enter start time here"
          />
        </div>
        <div>
          <label>End time(in sec)</label>
          <input
            style={{ marginLeft: "10px" }}
            type="number"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            placeholder="Enter end time here"
          />
        </div>
      </div>

      <div>
        <button
          style={{ margin: "20px", fontSize: "18px" }}
          onClick={handleClick}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Timer;
