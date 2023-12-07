// eslint-disable-next-line react/prop-types
function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td> {value}</td>
    </tr>
  );
}

export default StatisticLine;
