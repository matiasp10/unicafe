import StatisticLine from './StatisticLine';

// eslint-disable-next-line react/prop-types
function Statistics({ bad, good, neutral }) {
  if (bad + good + neutral === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <StatisticLine text={'Good'} value={good} />
        <StatisticLine text={'Bad'} value={neutral} />
        <StatisticLine text={'Neutral'} value={bad} />
        <StatisticLine text={'Total'} value={bad + good + neutral} />
        <StatisticLine
          text={'Average'}
          value={(good - bad) / (bad + good + neutral)}
        />
        <StatisticLine
          text={'Positive'}
          value={(good * 100) / (bad + good + neutral)}
        />
      </div>
    );
  }
}

export default Statistics;
