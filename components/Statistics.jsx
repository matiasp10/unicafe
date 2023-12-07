// eslint-disable-next-line react/prop-types
function Statistics({ bad, good, neutral }) {
  if (bad + good + neutral === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <span>Good: {good}</span> <br />
        <span>Neutral: {neutral}</span>
        <br />
        <span>Bad: {bad}</span>
        <br />
        <span>Total: {bad + good + neutral}</span>
        <br />
        <span>Promedio: {(good - bad) / (bad + good + neutral)}</span>
        <br />
        <span>Positive: {(good * 100) / (bad + good + neutral)} %</span>
      </div>
    );
  }
}

export default Statistics;
