export default function Skills(props) {
  return (
    <ul>
      <li className="mb-[30px]">
        <img className="inline mr-2" src={props.icon} width="40px" alt={props.name} />
        {props.name}
      </li>
    </ul>
  );
}
