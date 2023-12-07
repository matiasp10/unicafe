// eslint-disable-next-line react/prop-types
function Button({ action, value, text }) {
  return <button onClick={() => action(value + 1)}>{text}</button>;
}

export default Button;
