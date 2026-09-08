export default function Player({ name, symbol, nameClass, symbolClass }) {
  return (
    <li>
      <span className={nameClass}>{name}</span>
      <span className={symbolClass}>{symbol}</span>
    </li>
  );
}
